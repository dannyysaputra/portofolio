import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileCta from "./MobileCta";

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col pb-[calc(4.5rem+env(safe-area-inset-bottom))] sm:pb-0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[var(--radius-control)] focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}
