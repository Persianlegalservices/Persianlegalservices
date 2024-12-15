import useServiceData from "@/Data/Data";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
function SecondNavbar({ i18n, t }: any) {
  const isFarsi = i18n.language === "fa";
  const [hovered, setHovered] = useState<number | null>(null);
  const ServiceData = useServiceData();
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState("fa");

  const changeLanguage = (language: string) => {
    setCurrentLanguage(language); // Update state
    i18n.changeLanguage(language); // Change the i18n language
    router.push(router.pathname, router.asPath, { locale: language }); // Update the locale in URL
    Cookies.set("i18next-language", language); // Update the cookie
  };

  const items = [
    { id: 1, title: t("navigation.Home"), linkUrl: "/" },
    {
      id: 2,
      title: t("navigation.Services"),
      linkUrl: "",
      subItems: [
        {
          id: 6,
          title: t("navigation.ServicesDetails.service1"),
          linkUrl: "/service1",
        },
        {
          id: 7,
          title: t("navigation.ServicesDetails.service2"),
          linkUrl: "/service2",
        },
        {
          id: 8,
          title: t("navigation.ServicesDetails.service3"),
          linkUrl: "/service3",
        },
        {
          id: 9,
          title: t("navigation.ServicesDetails.service4"),
          linkUrl: "/service4",
        },
        {
          id: 10,
          title: t("navigation.ServicesDetails.service5"),
          linkUrl: "/service5",
        },
        {
          id: 11,
          title: t("navigation.ServicesDetails.service6"),
          linkUrl: "/service6",
        },
        {
          id: 12,
          title: t("navigation.ServicesDetails.service7"),
          linkUrl: "/service7",
        },
        {
          id: 13,
          title: t("navigation.ServicesDetails.service8"),
          linkUrl: "/service8",
        },
        {
          id: 14,
          title: t("navigation.ServicesDetails.service9"),
          linkUrl: "/service9",
        },
        {
          id: 15,
          title: t("navigation.ServicesDetails.service10"),
          linkUrl: "/service10",
        },
        {
          id: 16,
          title: t("navigation.ServicesDetails.service11"),
          linkUrl: "/service11",
        },
        {
          id: 17,
          title: t("navigation.ServicesDetails.service12"),
          linkUrl: "/12",
        },
      ],
    },
    { id: 3, title: t("navigation.AboutUs"), linkUrl: "/about" },
    { id: 4, title: t("navigation.ContactUs"), linkUrl: "/contact" },
    { id: 5, title: t("navigation.FAQ"), linkUrl: "/faq" },
  ];

  return (
    <div
      className={`h-16 relative font-YekanReg lg:w-2/3 flex container mx-auto items-center lg:gap-7 shadow-[rgba(0,0,0,0.15)_1.95px]  justify-evenly ${
        isFarsi && " font-YekanReghBlack "
      }`}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setHovered(item.id)}
        >
          <Link
            className="hover:text-primary-400 transition-all"
            href={item.linkUrl}
          >
            {item.title}
          </Link>
        </div>
      ))}
      <select
        value={currentLanguage}
        onChange={(e) => changeLanguage(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
        className="w-20"
      >
        <option value="en">EN</option>
        <option value="fa">FA</option>
      </select>
      {hovered === 2 && (
        <div
          onMouseLeave={() =>
            setTimeout(() => {
              setHovered(null);
            }, 500)
          }
          className="absolute top-full left-0 bg-white shadow-md mt-2 z-50 p-2 min-w-max rtl: rounded"
        >
          {ServiceData.map((subItem) => (
            <Link
              key={subItem.id}
              className="block px-4 py-2 hover:bg-primary-200 transition-all"
              href={`/services/${subItem.id}`}
            >
              {isFarsi ? subItem.fa.title : subItem.en.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SecondNavbar;
