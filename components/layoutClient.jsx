"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import Footer from "./footer"

export default function LayoutClient({ children }) {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className="layout">

      <button
        className="menuButton"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <Sidebar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main className="mainContent">
        {children}
      </main>

      <Footer />

    </div>
  );
}