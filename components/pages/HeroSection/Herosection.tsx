import Counters from "@/components/(Common)/Counters/Counters";
import { useRouter } from "next/router";

function HeroSection({ t, i18n }: any) {
  const router = useRouter();
  return (
    <div className="heroSection  relative flex items-center bg-red-500 justify-start flex-col min-h-screen overflow-hidden p-8  h-auto    ">
      <span className="z-20 flex h-1/2 relative items-center lg:my-24 flex-col justify-center">
        <h1 className=" p-2 text-3xl font-YekanBold lg:mt-24 text-white text-center my-2 ">
          {t("heroSection.title")}
        </h1>
        <h3 className="font-YekanReg text-xl text-wrap text-white lg:w-1/2 text-center">
          {t("heroSection.description")}
        </h3>
        <button className="px-12 my-8 py-6 text-xl text-white bg-primary-400 rounded-md hover:bg-primary-500 transition-all font-YekanBold ">
          {t("heroSection.buttonText")}
        </button>
      </span>
      <Counters t={t} i18n={i18n} />
    </div>
  );
}

export default HeroSection;
