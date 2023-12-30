import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import Footer from "./Footer";
import { TRPCReactProvider } from "~/trpc/react";
import Header from "./(header)/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "chof64/ex",
  description: "EXPERIMENTAL! Everything is experimental, things change.",
  icons: [{ rel: "icon", url: "/icons/ex-icon.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <div className="min-h-screen">
            <Header />
            {children}
          </div>
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
