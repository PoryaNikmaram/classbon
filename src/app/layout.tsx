import { Figtree } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl" className={`dark ${figtree.variable}`}>
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] font-bold uppercase  bg-white text-base-100 dark:bg-base-100 dark:text-base-content">
        <Header />
        <div className="flex flex-1 bg-teal-600 text-center">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
