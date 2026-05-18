import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ResumeGenerator from "./components/ResumeGenerator";
import Features from "./components/Features";
import Examples from "./components/Examples";
import HowToUse from "./components/HowToUse";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener("popstate", handleLocationChange);

    // Override link clicks for internal navigation
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (link) {
        const href = link.getAttribute("href");
        if (href?.startsWith("/")) {
          // If it's a home-page anchor like "/#features"
          if (href.includes("#")) {
            const [path, hash] = href.split("#");
            if (path === "/" || path === "") {
              if (window.location.pathname !== "/") {
                e.preventDefault();
                window.history.pushState({}, "", "/");
                handleLocationChange();
                // Wait for re-render then scroll
                setTimeout(() => {
                  const element = document.getElementById(hash);
                  element?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }
              // If already on home, let browser handle hash scroll
              return;
            }
          }

          // Standard internal pages
          e.preventDefault();
          window.history.pushState({}, "", href);
          handleLocationChange();
        }
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case "/privacy-policy":
        return <PrivacyPolicy />;
      case "/terms-and-conditions":
        return <TermsConditions />;
      case "/resume-summary-generator":
      default:
        return (
          <>
            <ResumeGenerator />
            <Features />
            <Examples />
            <HowToUse />
            <FAQ />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}
