import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { Providers } from "./Providers";

export const metadata: Metadata = {
  title: "Soccer game",
  description: "Sports aplication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Loading /> */}
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <Header />
        <main className="min-h-[60vh]">  <Providers>
          {children}
        </Providers></main>
        <Footer />
      </body>
    </html>
  );
}
