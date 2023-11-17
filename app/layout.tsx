import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Layout from "./_components/layout";

const manrope = Manrope({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Klangor Studio",
  description: "Klangor studio - biuro architektoniczne",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
