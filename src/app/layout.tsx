import { Figtree } from "next/font/google";
import { Baloo_Bhaijaan_2 } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

const bahoo = Baloo_Bhaijaan_2({
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["arabic"],
  variable: "--font-bahoo",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" className={`dark ${bahoo.variable}`}>
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] font-bold uppercase  bg-white text-base-100 dark:bg-base-100 dark:text-base-content">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
