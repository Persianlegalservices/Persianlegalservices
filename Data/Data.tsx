import { useTranslation } from "react-i18next";

const useServiceData = () => {
  const { t } = useTranslation("translation");
  return [
    {
      id: 1,
      en: {
        title: "Legal Consultation",
        description:
          "Our expert legal advisors provide comprehensive guidance on various legal issues for individuals, businesses, and organizations. Whether you need clarification on complex regulations or advice tailored to your unique circumstances, we offer",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "One-on-one consultations to address specific concerns",
              "Legal strategies for dispute resolution or risk mitigation.",
              "Guidance on compliance with national and international laws",
            ],
          },
        ],
      },
      fa: {
        title: "مشاوره حقوقی",
        description:
          "در دنیای پیچیده امروز، مسائل حقوقی چالش‌برانگیزتر از همیشه هستند. با پیشرفت روزافزون در حوزه‌های اقتصادی، اجتماعی و فناوری، قوانین و مقررات نیز به سرعت در حال تغییر و به‌روزرسانی هستند. این تغییرات گاهی منجر به سردرگمی و ایجاد چالش‌هایی می‌شوند که نیازمند درک عمیق و تخصصی از قوانین است. تیم مشاوران حقوقی متخصص ما با هدف تسهیل این مسیر، آماده است تا در تمامی مراحل، از تحلیل و شفاف‌سازی قوانین گرفته تا ارائه راه‌حل‌های عملی و دفاع از حقوق شما، همراهتان باشد.                اهمیت دریافت مشاوره حقوقی تخصصی                 امروزه حتی تصمیمات کوچک می‌توانند تأثیرات بزرگی بر زندگی افراد یا موفقیت کسب‌وکارها داشته باشند. مشاوره حقوقی نه تنها به شما در جلوگیری از مشکلات احتمالی کمک می‌کند، بلکه می‌تواند فرصتی برای ایجاد پایه‌ای محکم برای پیشرفت و توسعه باشد. چه در مسائل شخصی مانند ارث، املاک و دعاوی خانوادگی و چه در حوزه‌های تجاری نظیر قراردادها، اختلافات مالی و تطابق با قوانین، وجود یک مشاور آگاه و متخصص بسیار ضروری است.",
        imageUrl: "",
        offers: [
          {
            id: 1,
            title: "مشاوره حقوقی شفاف و کارآمد",
            offerOption: [
              "توضیح قوانین و مقررات به زبان ساده و قابل فهم",
              "ارائه راه‌حل‌های حقوقی منطبق با شرایط خاص شما",
              "مشاوره حضوری و آنلاین برای صرفه‌جویی در زمان و هزینه",
            ],
          },
          {
            id: 2,
            title: "تدوین و تنظیم قراردادهای حقوقی مطمئن",
            offerOption: [
              "تهیه قراردادهای تجاری، شراکت و پیمانکاری با دقت بالا",
              "بازنگری و اصلاح قراردادهای موجود برای جلوگیری از ریسک‌های احتمالی",
              "ارائه مشاوره در زمینه حقوقی معاملات و توافق‌نامه‌ها",
            ],
          },
          {
            id: 3,
            title: "حل اختلافات و دعاوی حقوقی",
            offerOption: [
              "میانجیگری و مذاکره برای رسیدن به توافق دوستانه",
              "ارائه دفاعیه‌های محکم در پرونده‌های قضایی",
              "مدیریت پرونده‌های حقوقی پیچیده با راه‌حل‌های استراتژیک",
            ],
          },
          {
            id: 4,
            title: "راهنمایی در زمینه قوانین ملی و بین‌المللی",
            offerOption: [
              "کمک به تطابق کسب‌وکارها با قوانین و مقررات محلی و جهانی",
              "ارائه مشاوره حقوقی در زمینه تجارت بین‌الملل",
              "تحلیل حقوقی برای ورود به بازارهای خارجی یا تعامل با شرکای بین‌المللی",
            ],
          },
        ],
      },
    },
    {
      id: 2,
      en: {
        title: "Drafting and Reviewing Legal Documents",
        description:
          "Ensure your legal documents are accurate, enforceable, and tailored to your needs. Our services include",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "Drafting contracts such as sales agreements, employment contracts, and partnership agreements.",
              "Reviewing existing contracts to identify risks or ambiguities.",
              "Assisting with amendments and updates to legal documents.",
            ],
          },
        ],
      },
      fa: {
        title: "تهیه و بررسی مستندات حقوقی",
        description:
          "اطمینان حاصل کنید که مستندات حقوقی شما دقیق، قابل اجرا و متناسب با نیازهای شما است. خدمات ما شامل موارد زیر است",
        imageUrl: "",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "تنظیم قراردادها مانند قراردادهای فروش، قراردادهای استخدام و قراردادهای شراکت.",
              "بازبینی قراردادهای موجود برای شناسایی خطرات یا ابهامات.",
              "کمک به اصلاح و به‌روزرسانی اسناد قانونی.",
            ],
          },
        ],
      },
    },
    {
      id: 3,
      en: {
        title: "Legal Disputes",
        description:
          "We represent individuals and businesses in all stages of legal disputes, ensuring the best possible outcome",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "Filing lawsuits and managing court proceedings.",
              "Negotiating settlements outside the courtroom.",
              "Providing defense or prosecution in civil, financial, and property-related disputes.",
            ],
          },
        ],
      },
      fa: {
        title: "اختلافات حقوقی",
        description:
          "ما از افراد و کسب‌وکارها در تمام مراحل اختلافات حقوقی نمایندگی می‌کنیم و بهترین نتیجه ممکن را تضمین می‌کنیم",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "طرح دعوی و مدیریت روند دادرسی در دادگاه.",
              "مذاکره برای توافقات خارج از دادگاه.",
              "ارائه دفاع یا پیگیری در اختلافات مدنی، مالی و مرتبط با اموال.",
            ],
          },
        ],
      },
    },
    {
      id: 4,
      en: {
        title: "Criminal Matters",
        description:
          "Protect your rights with our skilled criminal defense team. We handle cases involving",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "White-collar crimes such as fraud and embezzlement.",
              "Violent crimes, theft, and other criminal charges.",
              "Appeals and post-conviction relief.",
            ],
          },
        ],
      },
      fa: {
        title: "مسائل کیفری",
        description:
          "از حقوق خود با تیم متخصص دفاع کیفری ما محافظت کنید. ما پرونده‌هایی را که شامل موارد زیر هستند رسیدگی می‌کنیم:",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "جرایم یقه‌سفید مانند کلاهبرداری و اختلاس.",
              "جرایم خشونت‌آمیز، سرقت و سایر اتهامات کیفری.",
              "فرجام‌خواهی و تخفیف مجازات پس از محکومیت.",
            ],
          },
        ],
      },
    },
    {
      id: 5,
      en: {
        title: "Fraud and Bribery Cases",
        description:
          "Our team specializes in cases of financial misconduct, ensuring justice for all parties",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "Defending individuals accused of fraud or corruption",
              "Investigating claims of financial deception or bribery",
              "Assisting whistleblowers and addressing corporate ethics violations.",
            ],
          },
        ],
      },
      fa: {
        title: "پرونده‌های کلاهبرداری و رشوه‌خواری",
        description:
          "تیم ما در پرونده‌های تخلفات مالی تخصص دارد و عدالت را برای همه طرف‌ها تضمین می‌کند.",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "دفاع از افرادی که به کلاهبرداری یا فساد متهم شده‌اند",
              "بررسی ادعاهای فریب مالی یا رشوه‌خواری",
              "کمک به افشاگران و رسیدگی به نقض‌های اخلاقی شرکتی",
            ],
          },
        ],
      },
    },
    {
      id: 6,
      en: {
        title: "Family Law Matters",
        description:
          "Navigating family disputes can be challenging. Our compassionate legal team assists",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "Divorce proceedings, including asset division and alimony.",
              "Custody battles and visitation rights for children",
              "Claims for dowry (Mehrieh) and spousal support.",
            ],
          },
        ],
      },
      fa: {
        title: "مسائل حقوق خانواده",
        description:
          "حل اختلافات خانوادگی می‌تواند چالش‌برانگیز باشد. تیم حقوقی دلسوز ما در این زمینه کمک می‌کند.",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "مراحل طلاق، از جمله تقسیم اموال و نفقه",
              "دعوی حضانت و حقوق ملاقات فرزند",
              "مطالبات مهریه و نفقه همسر",
            ],
          },
        ],
      },
    },
    {
      id: 7,
      en: {
        title: "Inheritance and Estate Matters",
        description:
          "We provide expert legal support for matters related to wills and estates.",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "Drafting and validating wills in accordance with Islamic and Iranian laws",
              "Resolving disputes among heirs regarding estate distribution",
              "Advising on the management and administration of estates",
            ],
          },
        ],
      },
      fa: {
        title: "مسائل ارث و املاک",
        description:
          "ما پشتیبانی حقوقی تخصصی برای مسائل مربوط به وصیت‌نامه‌ها و املاک فراهم می‌کنیم.",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "تنظیم و تایید وصیت‌نامه‌ها بر اساس قوانین اسلامی و ایرانی",
              "حل اختلافات میان وراث در مورد توزیع اموال",
              "مشاوره در زمینه مدیریت و اداره املاک",
            ],
          },
        ],
      },
    },
    {
      id: 8,
      en: {
        title: "Property Law (Domestic & Commercial)",
        description:
          "Protect your property rights with our experienced property law team. ",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "Real estate transactions, including buying, selling, and leasing",
              "Resolving disputes over property ownership and tenancy",
              "Advising on commercial property development and zoning regulations",
            ],
          },
        ],
      },
      fa: {
        title: "حقوق املاک (مسکونی و تجاری)",
        description:
          "با تیم مجرب ما در حقوق املاک از حقوق ملکی خود محافظت کنید.",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "معاملات املاک، از جمله خرید، فروش و اجاره",
              "حل اختلافات مربوط به مالکیت ملک و اجاره‌نشینی",
              "مشاوره در زمینه توسعه املاک تجاری و مقررات منطقه‌بندی",
            ],
          },
        ],
      },
    },
    {
      id: 9,
      en: {
        title: "Registration and Intellectual Property",
        description:
          "Safeguard your business and creative assets with our registration and intellectual property services",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "Registering companies, trademarks, and patents.",
              "Drafting licensing agreements and protecting copyrights",
              "Representing clients in cases of intellectual property infringement.",
            ],
          },
        ],
      },
      fa: {
        title: "ثبت و مالکیت فکری",
        description:
          "با خدمات ثبت و مالکیت فکری ما از دارایی‌های تجاری و خلاقانه خود محافظت کنید",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "ثبت شرکت‌ها، علائم تجاری و اختراعات",
              "تنظیم قراردادهای مجوز و حفاظت از حق‌ تکثیر",
              "نمایندگی از مشتریان در پرونده‌های نقض مالکیت فکری",
            ],
          },
        ],
      },
    },
    {
      id: 10,
      en: {
        title: "Tax Advisory and Representation",
        description:
          "Avoid legal complications and optimize your financial strategies with our tax advisory services",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "Advising businesses and individuals on tax compliance and planning",
              "Representing clients in tax disputes or audits",
              "Assisting with international tax issues and cross-border compliance",
            ],
          },
        ],
      },
      fa: {
        title: "مشاوره و نمایندگی مالیاتی",
        description:
          "با خدمات مشاوره مالیاتی ما، از پیچیدگی‌های قانونی اجتناب کرده و استراتژی‌های مالی خود را بهینه کنید",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "ارائه مشاوره به کسب‌وکارها و افراد در زمینه رعایت قوانین مالیاتی و برنامه‌ریزی مالیاتی",
              "نمایندگی از مشتریان در اختلافات یا حسابرسی‌های مالیاتی",
              "کمک در مسائل مالیاتی بین‌المللی و رعایت قوانین فرامرزی",
            ],
          },
        ],
      },
    },
    {
      id: 11,
      en: {
        title: "Commercial and Business Legal Services",
        description:
          "Support your business operations with expert legal advice on",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "Drafting and negotiating international and domestic contracts",
              "Handling mergers, acquisitions, and corporate restructuring",
              "Advising on import/export regulations and customs law",
            ],
          },
        ],
      },
      fa: {
        title: "خدمات حقوقی تجاری و بازرگانی",
        description: "با مشاوره حقوقی تخصصی ما، عملیات تجاری خود را حمایت کنید",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "تنظیم و مذاکره در مورد قراردادهای داخلی و بین‌المللی",
              "رسیدگی به ادغام‌ها، خریدها و بازسازی‌های شرکتی",
              "ارائه مشاوره در زمینه قوانین واردات/صادرات و گمرک",
            ],
          },
        ],
      },
    },
    {
      id: 12,
      en: {
        title: "Immigration Services",
        description:
          "Simplify your immigration journey with our end-to-end services",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "Visa application support for individuals and families",
              "Assisting with residency, citizenship, and asylum cases",
              "Advising businesses on hiring foreign talent and compliance with immigration",
            ],
          },
        ],
      },
      fa: {
        title: "خدمات مهاجرت",
        description: "با خدمات جامع ما، فرآیند مهاجرت خود را ساده کنید",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "پشتیبانی از درخواست ویزا برای افراد و خانواده‌ها",
              "کمک در پرونده‌های اقامت، شهروندی و پناهندگی",
              "ارائه مشاوره به کسب‌وکارها درباره استخدام نیروی کار خارجی و رعایت قوانین مهاجرت",
            ],
          },
        ],
      },
    },
    {
      id: 13,
      en: {
        title: "Arbitration and Mediation",
        description:
          "Resolve conflicts effectively outside of court through our arbitration and mediation services",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "Acting as mediators to facilitate mutually beneficial agreements",
              "Representing clients in arbitration hearings",
              "Drafting and enforcing arbitration agreements.",
            ],
          },
        ],
      },
      fa: {
        title: "داوری و میانجی‌گری",
        description:
          "با استفاده از خدمات داوری و میانجی‌گری ما، اختلافات را به‌طور مؤثر خارج از دادگاه حل کنید",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "عمل به‌عنوان میانجی برای تسهیل توافق‌های سودمند متقابل",
              "نمایندگی از مشتریان در جلسات داوری",
              "تنظیم و اجرای توافق‌نامه‌های داوری",
            ],
          },
        ],
      },
    },
    {
      id: 14,
      en: {
        title: "Banking and Investment Consultation",
        description:
          "Navigate the complexities of banking and investment with our expert legal advice",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "Advising on investment strategies and financial regulations",
              "Assisting with loan agreements, securities, and asset management",
              "Protecting investors’ rights in financial disputes",
            ],
          },
        ],
      },
      fa: {
        title: "مشاوره بانکی و سرمایه‌گذاری",
        description:
          "با استفاده از مشاوره حقوقی تخصصی ما، پیچیدگی‌های بانکی و سرمایه‌گذاری را مدیریت کنید",
        offers: [
          {
            id: 1,
            title: "",
            offerOption: [
              "ارائه مشاوره در مورد استراتژی‌های سرمایه‌گذاری و مقررات مالی",
              "کمک در تنظیم قراردادهای وام، اوراق بهادار و مدیریت دارایی",
              "حفاظت از حقوق سرمایه‌گذاران در اختلافات مالی",
            ],
          },
        ],
      },
    },
  ];
};

export default useServiceData;
