import * as fonts from "@/fonts";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Providers from "@/app/providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "MyShop",
    template: "%s | MyShop",
  },
  description: "The best online store for shoes and fashion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="select-none">
        <Navbar />
        <div id="content-area" className="relative ">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
