"use client";

import { useCallback, useEffect, useState } from "react";
import { Mic, MicOff, Send, X } from "lucide-react";
import { useConversation } from "@elevenlabs/react";

const ELEVENLABS_AGENT_ID = "agent_8801kjbhp147ey8t715wygx8y48a";

type TranscriptMessage = { role: "user" | "agent"; text: string };

export function AssistantPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [input, setInput] = useState("");
  const [transcripts, setTranscripts] = useState<TranscriptMessage[]>([]);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const [tokenLoading, setTokenLoading] = useState(false);

  const conversation = useConversation({
    onConnect: () => {
      setConnectionError(null);
    },
    onDisconnect: () => {},
    onMessage: (message) => {
      const msg = message as { message?: string; agent_response?: string; text?: string };
      const text = typeof msg?.message === "string" ? msg.message : String(msg?.agent_response ?? msg?.text ?? JSON.stringify(message));
      if (text && text !== "{}") {
        setTranscripts((prev) => [...prev, { role: "agent", text }]);
      }
    },
    onError: (error) => {
      const msg = typeof error === "object" && error !== null && "message" in error 
        ? String((error as any).message) 
        : String(error);
      setConnectionError(msg);
    },
    onModeChange: () => {},
  });

  const startSession = useCallback(async () => {
    setConnectionError(null);
    setTokenLoading(true);
    try {
      const res = await fetch("/api/assistant/elevenlabs-token");
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? "Could not start conversation");
      }
      const { token } = (await res.json()) as { token: string };
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({
        conversationToken: token,
        connectionType: "webrtc",
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      const hint =
        msg.includes("Couldn't connect") || msg.includes("WebSocket") || msg.includes("blocked")
          ? " Try disabling ad blockers or privacy extensions for this site, or use a different browser."
          : "";
      setConnectionError(msg + hint);
    } finally {
      setTokenLoading(false);
    }
  }, [conversation]);

  const endSession = useCallback(() => {
    conversation.endSession();
  }, [conversation]);

  const sendText = useCallback(() => {
    const text = input.trim();
    if (!text || conversation.status !== "connected") return;
    conversation.sendUserMessage(text);
    setTranscripts((prev) => [...prev, { role: "user", text }]);
    setInput("");
  }, [input, conversation]);

  // When panel closes, end the session
  useEffect(() => {
    if (!open) {
      if (conversation.status === "connected") {
        conversation.endSession();
      }
    }
  }, [open, conversation]);

  if (!open) return null;

  const isConnected = conversation.status === "connected";
  const isConnecting = conversation.status === "connecting" || tokenLoading;
  const canStart = !isConnected && !isConnecting;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div
        className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-[#1c1a19] border-l border-white/10 shadow-2xl flex flex-col"
        role="dialog"
        aria-label="AI Website Support"
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="font-serif text-lg text-white">Susi – AI Website Support</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/5"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
          {!isConnected && !isConnecting && (
            <div className="space-y-2">
              <p className="text-white/50 text-sm font-light">
                Start a voice conversation with Susi. Ask about courses, treatments, or booking.
              </p>
              <p className="text-white/40 text-xs font-light">
                If connection fails, try disabling ad blockers or privacy extensions for this site.
              </p>
            </div>
          )}
          {connectionError && (
            <p className="text-red-400/90 text-sm font-light bg-red-500/10 rounded-lg px-3 py-2">
              {connectionError}
            </p>
          )}
          {isConnecting && (
            <p className="text-white/60 text-sm font-light">Connecting…</p>
          )}
          {isConnected && (
            <p className="text-white/50 text-sm font-light">
              {conversation.isSpeaking ? "Susi is speaking…" : "Listening…"}
            </p>
          )}
          {transcripts.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                  m.role === "user"
                    ? "bg-brand-gold/20 text-white"
                    : "bg-white/5 text-white/90 font-light"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-white/10 flex items-center gap-2">
          {canStart && (
            <button
              type="button"
              onClick={startSession}
              disabled={isConnecting}
              className="flex-1 py-3 rounded-full bg-brand-gold text-[#1c1a19] font-medium text-sm disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isConnecting ? "Connecting…" : "Start conversation"}
            </button>
          )}
          {isConnected && (
            <>
              <button
                type="button"
                onClick={endSession}
                className={`p-3 rounded-full transition-colors bg-red-500/20 text-red-400`}
                aria-label="End conversation"
                title="End conversation"
              >
                <MicOff size={20} />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendText();
                  }
                }}
                placeholder="Type a message…"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm text-white placeholder:text-white/40 font-light focus:border-brand-gold focus:outline-none"
              />
              <button
                type="button"
                onClick={sendText}
                disabled={!input.trim()}
                className="p-3 rounded-full bg-brand-gold text-[#1c1a19] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                aria-label="Send"
              >
                <Send size={20} />
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
