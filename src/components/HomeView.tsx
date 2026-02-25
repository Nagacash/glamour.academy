"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { TreatmentsOverview } from "@/components/sections/TreatmentsOverview";
import { ArtistAcademy } from "@/components/sections/ArtistAcademy";
import { Masterclasses } from "@/components/sections/Masterclasses";
import { ArtistModules } from "@/components/sections/ArtistModules";
import { Mentorship } from "@/components/sections/Mentorship";
import { Founders } from "@/components/sections/Founders";
import { SectionNav } from "@/components/ui/SectionNav";
import { AssistantPanel } from "@/components/assistant/AssistantPanel";

export function HomeView() {
  const [assistantOpen, setAssistantOpen] = useState(false);

  return (
    <main className="min-h-screen bg-brand-beige selection:bg-brand-rose selection:text-foreground">
      <Navbar />
      <SectionNav />

      <HeroSection onOpenAssistant={() => setAssistantOpen(true)} />
      <VideoShowcase />
      <TreatmentsOverview />
      <ArtistAcademy />
      <Masterclasses />
      <ArtistModules />
      <Mentorship />
      <Founders />

      <Footer />

      <AssistantPanel open={assistantOpen} onClose={() => setAssistantOpen(false)} />
    </main>
  );
}
