import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import Cookies from "js-cookie";

i18n
  .use(Backend) // Backend for loading translations
  .use(initReactI18next) // Use React bindings
  .init({
    lng: Cookies.get("i18next-language") || "fa", // Default language
    fallbackLng: "fa", // Fallback language
    debug: false,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: true, // Disable suspense (important for SSR)
    },
    returnObjects: true,
  });

export default i18n;
