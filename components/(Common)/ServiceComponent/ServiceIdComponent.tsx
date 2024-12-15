import useServiceData from "@/Data/Data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoReturnDownBackOutline } from "react-icons/io5";
import WhatsAppButton from "../WhatsappComponent/WhatsappComponent";

interface Service {
  id: number;

  en: {
    title: string;
    description: string;
    offers: {
      id: number;
      title: string;
      offerOption: string[];
    }[];
  };
  fa: {
    title: string;
    description: string;
    offers: {
      id: number;
      title: string;
      offerOption: string[];
    }[];
  };
}

// interface ServiceIdComponentProps {
//   id: number
// }

const ServiceIdComponent: React.FC = () => {
  const [findService, setFindService] = useState<Service | null>(null);
  const { i18n } = useTranslation("translation");
  const services = useServiceData() as any;
  const router = useRouter();
  const { id } = router.query;
  const isFarsi = i18n.language === "fa";

  // const isFarsi = i18n.language === "fa"

  // Update the service whenever the `id` prop or the router query changes
  useEffect(() => {
    const service = services.find(
      (service: Service) => service.id === Number(id)
    );
    setFindService(service || null); // Make sure to handle undefined case
  }, [id]);

  if (!findService) return <p>Loading...</p>;

  return (
    <div className="min-h-screen h-full flex flex-col container mx-auto items-center">
      {findService ? (
        <>
          <div className="w-full h-fit lg:h-[100%] overflow-hidden p-10 ">
            <Image
              loading="eager"
              src={`/images/justice.webp`}
              alt={isFarsi ? findService.fa.title : findService.en.title}
              className="w-full h-full rounded-lg object-cover "
              width={1000}
              height={1000}
            />
          </div>
          <h1 className="font-YekanBold">
            {isFarsi ? findService.fa.title : findService.en.title}
          </h1>{" "}
          {/* Use .fa.title instead of .title */}
          <p className="font-YekanReg text-justify p-8">
            {isFarsi ? findService.fa.description : findService.en.description}
          </p>{" "}
          {/* Use .fa.description instead of .description */}
          <div className="flex flex-col lg:items-start lg:justify-start  w-full p-8">
            {isFarsi
              ? findService.fa.offers.map((offer) => (
                  <div key={offer.id}>
                    <h3 className="font-YekanBold text-xl">{offer.title}</h3>
                    <ul>
                      {offer.offerOption.map((option, index) => (
                        <li className="font-YekanReg p-2" key={index}>
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              : findService.en.offers.map(
                  (
                    offer // assuming you're showing English offers when not Farsi
                  ) => (
                    <div key={offer.id}>
                      <h3 className="font-YekanBold text-xl">{offer.title}</h3>
                      <ul>
                        {offer.offerOption.map((option, index) => (
                          <li className="font-YekanReg p-2" key={index}>
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
          </div>
        </>
      ) : (
        <p>Service not found.</p>
      )}
      <WhatsAppButton isFarsi={isFarsi} />
      <Link
        className={
          isFarsi
            ? "my-2 flex justify-center gap-x-2"
            : "my-2 flex flex-row-reverse justify-center gap-x-2"
        }
        href="/"
      >
        {isFarsi ? "بازگشت" : "Go back"}{" "}
        <IoReturnDownBackOutline size={24} className="mt-1" />
      </Link>
    </div>
  );
};

export default ServiceIdComponent;
