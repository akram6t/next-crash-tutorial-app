import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./styles/globals.css";

const Montserrat_SansSarif = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {


  return (
    <html lang="en">
      <body className={Montserrat_SansSarif.className}>
        <ThemeProvider attribute="class">
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
};