import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { Providers } from "./Providers";
import ToastProvider from "./ToastProvider";

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
      <body>
        <Header />
        <main className="bg-[var(--body)] text-[var(--foreground)]">
          <Providers>{children}</Providers>
          <ToastProvider />
        </main>
        <Footer />
      </body>
    </html>
  );
}
