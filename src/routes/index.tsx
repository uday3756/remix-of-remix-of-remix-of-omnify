import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IntroGallery } from "@/components/IntroGallery";
import { Overview } from "@/components/Overview";
import { ServicesExplorer } from "@/components/ServicesExplorer";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SiteBackground } from "@/components/SiteBackground";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Only run intro on client after mount
    setShowIntro(true);
  }, []);

  return (
    <ThemeProvider>
      <SiteBackground />
      {showIntro && <IntroGallery onFinish={() => setShowIntro(false)} />}
      <div className="flex min-h-screen flex-1 flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Overview />
          <ServicesExplorer />
        </main>
        <Footer />
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}
