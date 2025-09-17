import Link from "next/link";
import { Twitter, Facebook, Instagram } from "lucide-react";
import {FooterSection}  from "../../models/footer"


const footerSections: FooterSection[] = [
  {
    title: "Responsible Gambling",
    links: [
      { label: "18+ Only", href: "#" },
      { label: "Self-Exclusion", href: "#" },
      { label: "Problem Gambling", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Live Chat", href: "#" },
    ],
  },
];

const linkCls =
  "text-[var(--foreground)]/80 hover:text-[var(--button-green)] transition-colors text-sm leading-7";

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top grid */}
        <div className="grid text-center sm:text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-3">{section.title}</h3>
              <ul className="space-y-1">
                {section.links?.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={linkCls}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold mb-3">Follow Us</h3>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                aria-label="Twitter"
                className="text-[var(--foreground)]/80 hover:text-[var(--button-green)]"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="text-[var(--foreground)]/80 hover:text-[var(--button-green)]"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="text-[var(--foreground)]/80 hover:text-[var(--button-green)]"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-[var(--foreground)]/10" />

        {/* Bottom note */}
        <p className="text-center text-[var(--foreground)]/70 text-sm">
          © 2025 BetSoccer. All rights reserved. Licensed and regulated.
        </p>
      </div>
    </footer>
  );
}
