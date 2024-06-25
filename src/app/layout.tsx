import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/index.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mountain Eye Institute | Cedar City Ophthalmology & LASIK Center",
  description:
    "Check-ups, Treatments, LASIK & Surgery Center, Optical Center + More In Southern Utah. Ophthalmology practice providing treatment for Eye Diseases & more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
