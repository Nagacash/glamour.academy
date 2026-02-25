import { NextResponse } from "next/server";

const ELEVENLABS_AGENT_ID = "agent_8801kjbhp147ey8t715wygx8y48a";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Returns a conversation token for ElevenLabs WebRTC so the API key stays server-side. */
export async function GET() {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "ELEVENLABS_API_KEY not configured" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `https://api.elevenlabs.io/v1/convai/conversation/token?agent_id=${ELEVENLABS_AGENT_ID}`,
      {
        method: "GET",
        headers: {
          "xi-api-key": apiKey,
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error("[elevenlabs-token]", res.status, text);
      return NextResponse.json(
        { error: "Failed to get conversation token" },
        { status: res.status }
      );
    }

    const data = (await res.json()) as { token?: string };
    if (!data?.token) {
      return NextResponse.json(
        { error: "No token in response" },
        { status: 500 }
      );
    }

    return NextResponse.json({ token: data.token });
  } catch (err) {
    console.error("[elevenlabs-token]", err);
    return NextResponse.json(
      { error: "Conversation token unavailable" },
      { status: 500 }
    );
  }
}
