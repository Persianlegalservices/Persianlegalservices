import useServiceData from "@/Data/Data";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

function ServicesComponents() {
  const { t, i18n } = useTranslation("translation");
  const serviceData = useServiceData();
  const router = useRouter();
  const isFarsi = i18n.language === "fa";

  return (
    <div className="flex flex-col items-center justify-center px-4 lg:w-2/3 mx-auto lg:px-10">
      {/* Section Title */}
      <h1 className="my-6 text-3xl font-bold text-center">
        {isFarsi ? t("navigation.OurServices") : t("OurServices")}
      </h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 container mx-auto w-auto">
        {serviceData.slice(0, 9).map((item) => (
          <div
            onClick={() => router.push(`/services/${item.id}`)}
            key={item.id}
            className="flex flex-col cursor-pointer rounded-2xl h-full items-start justify-start border border-gray-200 shadow-lg p-6 transition-transform hover:scale-105 bg-white"
          >
            {/* Icon and Title */}
            <div className="flex items-center gap-2 border-b pb-4 mb-4">
              <Image
                src={"/images/law.png"}
                alt={item.en.title}
                width={30}
                height={30}
                className="flex-shrink-0"
              />
              <h3 className="text-primary-400 text-xl font-YekanBold">
                {isFarsi ? item.fa.title : item.en.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-start font-YekanReg flex-grow">
              {isFarsi
                ? item.fa.offers[0].offerOption.map((i, index) => (
                    <p key={index}>{i}</p>
                  ))
                : item.en.offers[0].offerOption.map((i, index) => (
                    <p key={index}>{i}</p>
                  ))}
            </p>

            {/* Button */}
            <div className="mt-4">
              <button
                type="button"
                className="font-YekanBold hover:bg-primary-400 transition-all bg-cello-500 px-4 py-2 text-white rounded-xl w-full text-center"
              >
                {t("serviceSectionButton")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesComponents;
