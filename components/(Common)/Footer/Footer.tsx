import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";
import { MdMail } from "react-icons/md";

function Footer({ t, i18n }: any) {
  const isFarsi = i18n.language === "fa";

  const footerItems = [
    { id: 1, title: "Persian Legal", linkUrl: "/", icon: <FaHome /> },
    {
      id: 2,
      title: "+44 2039838787",
      linkUrl: "tel:+00442039838787",
      icon: <FaPhone />,
    },
    {
      id: 3,
      title: "+44 7891840997",
      linkUrl: "tel:+00447891840997",
      icon: <FaPhone />,
    },
    {
      id: 4,
      title: "+44 7949362425",
      linkUrl: "tel:+00447949362425",
      icon: <FaPhone />,
    },
    {
      id: 5,
      title: "info@elitemigrationservices.com",
      linkUrl: "mailto:info@elitemigrationservices.com",
      icon: <MdMail />,
    },
    {
      id: 6,
      title: "14 Broad Foundry Trumpers Way,London W7 2QP",
      linkUrl: "https://maps.app.goo.gl/ped9NpWLseWr3UZs9",
      icon: <FaLocationDot />,
    },
  ];

  const socialMedia = [
    {
      id: 1,
      title: "Facebook",
      linkUrl:
        "https://www.facebook.com/Elite-Migration-Services-106981885149964/",
      icon: <FaFacebook />,
    },
    {
      id: 2,
      title: "Instagram",
      linkUrl: "https://www.instagram.com/elite_migration_services/",
      icon: <FaInstagram />,
    },
    {
      id: 3,
      title: "Twitter",
      linkUrl: "https://twitter.com/EliteMigrationServices",
      icon: <FaTwitter />,
    },
    {
      id: 4,
      title: "LinkedIn",
      linkUrl: "https://www.linkedin.com/company/elite-migration-services/",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <div className="w-full flex flex-col p-8 border-t mt-auto bg-gray-100">
      {/* عنوان اصلی */}
      <div className=" flex gap-4  h-full items-center justify-center">
        <div>
          <Image src="/images/Pls.webp" alt="logo" width={100} height={100} />
        </div>
        <div className="text-center  flex items-center flex-col  justify-center">
          <p className="font-YekanBold text-primary-500 text-2xl">
            {isFarsi ? "خدمات حقوقی Persian" : "Persian Legal Services"}
          </p>
          <p className="font-YekanBold text-lg text-gray-600">
            {isFarsi
              ? "همراه شما در کلیه مسائل حقوقی"
              : "Your Trusted Partner in Every Legal Matter"}
          </p>
        </div>
      </div>

      {/* محتوا */}
      <div className="flex flex-col lg:flex-row justify-evenly gap-8">
        {/* بخش توضیحات */}
        <div className="flex-1 text-center lg:text-right font-YekanReg text-gray-700">
          <p className="text-start">{t("footer.textContent")}</p>
          <Link
            href="https://mistaagency.com"
            className="flex items-center justify-start  gap-1 my-5"
          >
            <p>{t("footer.agency")}</p>
            <p className="text-primary-400">Mista</p>
          </Link>
        </div>

        {/* راه‌های ارتباطی */}
        <div className="flex-1">
          <p className="font-YekanBold text-xl mb-4">
            {isFarsi ? "راه های ارتباطی" : "Contact Us"}
          </p>
          {footerItems.map((item) => (
            <Link
              key={item.id}
              href={item.linkUrl}
              className="hover:text-blue-500 hover:underline flex items-center mb-2 text-gray-800"
            >
              <i className="text-primary-400 mr-2">{item.icon}</i>
              <p className="font-sans">{item.title}</p>
            </Link>
          ))}
        </div>

        {/* شبکه‌های اجتماعی */}
        <div className="flex-1 text-center">
          <p className="font-YekanBold text-xl mb-4">
            {isFarsi ? "شبکه های مجازی" : "Social Media"}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialMedia.map((item) => (
              <Link
                key={item.id}
                href={item.linkUrl}
                className="hover:text-blue-500 hover:underline flex items-center text-gray-800"
              >
                <i className="text-primary-400 mr-2">{item.icon}</i>
                <p>{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
