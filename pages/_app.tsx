// pages/_app.tsx or pages/_app.js
import { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n/i18n"; // Import your i18n configuration
import { Poppins } from "next/font/google";

import "../styles/globals.css";
const Poppin = Poppins({ subsets: ["latin"], weight: "400" });

function MyApp({ Component, pageProps }: AppProps) {
  const isFarsi = i18n.language === "fa";

  return (
    <main
      className={`${
        isFarsi ? "font-YekanReg" : Poppin.className
      } w-full h-screen  bg-transparent flex  flex-col justify-center`}
    >
      <I18nextProvider i18n={i18n}>
        {/* Pass i18n instance to provider */}
        <Component {...pageProps} />
      </I18nextProvider>
    </main>
  );
}

export default MyApp;
