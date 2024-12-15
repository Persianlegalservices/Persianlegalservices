import ConsultationForm from "@/components/(Common)/ContactUsForm/ContactUsForm";
import Footer from "@/components/(Common)/Footer/Footer";
import Navbar from "@/components/(Common)/Navbar/Navbar";
import SecondNavbar from "@/components/(Common)/SecondNavbar/SecondNavbar";
import ServiceIdComponent from "@/components/(Common)/ServiceComponent/ServiceIdComponent";
import ServicesComponents from "@/components/(Common)/ServicesComponents/ServicesComponents";
import HeroSection from "@/components/pages/HeroSection/Herosection";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const MainpageLayout: React.FC<any> = ({
  hasServiceIdComponent,
}: {
  hasServiceIdComponent?: boolean;
}) => {
  const { t, i18n } = useTranslation("translation");
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsClient(true);
    }, 400);
  }, []);
  const router = useRouter();
  const { id } = router.query;
  const isFarsi = i18n.language === "fa";
  const rtlStyle: React.CSSProperties = isFarsi
    ? {
        direction: "rtl" as const,
        textAlign: "right" as const,
      }
    : {};

  if (!isClient) {
    return (
      <div className="flex justify-center w-full">
        <p style={{ left: 80, top: 40 }} className="relative ">
          Loading{" "}
        </p>
        <span className=" loader " />
      </div>
    );
  }

  return (
    <div
      className="flex flex-col w-full h-full"
      lang={i18n.language}
      style={rtlStyle}
    >
      <Navbar />
      <SecondNavbar i18n={i18n} t={t} />
      {!hasServiceIdComponent && !id && <HeroSection i18n={i18n} t={t} />}
      {!id && (
        <>
          <ServicesComponents />
          <ConsultationForm />
        </>
      )}
      {hasServiceIdComponent && <ServiceIdComponent />}

      <Footer i18n={i18n} t={t} />
    </div>
  );
};

export default MainpageLayout;
