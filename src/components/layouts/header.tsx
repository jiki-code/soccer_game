"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/toggle-theme";
import { TagInfo } from "@/components/ui/tag-info";
import Link from "next/link";
import { navLinksHeader } from "@/datas/common";
import { Menu, X, Volleyball } from "lucide-react";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return (
    <header
      className="sticky z-50 w-full border-b h-20"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div className="mx-auto w-full max-w-8/10 flex items-center justify-between px-3 pt-2">
        {/* Logo + Nav */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div
            className="flex items-center gap-2 text-[var(--button-green)] font-bold text-xl cursor-pointer"
            onClick={() => {
              <Link key="/" href="/" />;
            }}
          >
            <Volleyball className="w-5 h-5" />
            <span>
              Bet<span className="var(--foreground)">Soccer</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 var(--foreground) font-medium">
            {navLinksHeader.map((it) => (
              <Link
                key={it.link}
                href={`/${it.link.toLowerCase()}`} // ví dụ: /home, /about
                className="hover:text-[var(--button-green)]"
              >
                {it.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <Button label="Login" variant="solid" />
          <Button label="Sign Up" variant="outline" />
          <ThemeToggle changeBackGround={toggleTheme} theme={theme} />
          <TagInfo userName="JohnDoe" className="bg-gray-300 cursor-pointer" />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex absolute right-[12px]">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="var(--foreground) cursor-pointer"
          >
            {" "}
            {menuOpen ? <X size={22} /> : <Menu size={22} />}{" "}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 pt-2 flex flex-col items-start gap-4 var(--foreground) bg-white  px-2">
          {navLinksHeader.map((it) => (
            <Link
              key={it.link}
              href={`/${it.link.toLowerCase()}`}
              className="text-blue-500 hover:text-[#00FF9D]"
            >
              {it.name}
            </Link>
          ))}
          <div className="flex gap-4 py-2">
            <Button label="Login" variant="solid" />
            <Button label="Sign Up" variant="outline" />
          </div>
        </div>
      )}
    </header>
  );
}
