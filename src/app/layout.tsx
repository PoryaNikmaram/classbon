import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className="flex flex-col min-h-screen font-bold uppercase">
        <header className="flex p-8 items-center justify-center bg-orange-300">
          header
        </header>
        <div className="flex flex-1 bg-teal-600 text-center">{children}</div>
        <footer className="flex p-8 items-center justify-center text-center bg-indigo-400">
          footer
        </footer>
      </body>
    </html>
  );
}
