import { useRouter } from "next/router";

const WhatsAppButton = ({ isFarsi }: any) => {
  const router = useRouter();

  const whatsappNumber = "+447949362425"; // Replace with your phone number
  const message = "Hello, I need help!"; // Default message for WhatsApp
  const handleClick = () => {
    const currentUrl = window.location.href;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}?Link:${currentUrl}`;
    // Open the WhatsApp window with the given URL
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col md:flex-row gap-2">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
      >
        {isFarsi ? "ارتباط با ما در واتس اپ" : "Contact Us on WhatsApp"}
      </button>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
      >
        {isFarsi ? "ارتباط با ما در واتس اپ" : "Contact Us on WhatsApp"}
      </button>
    </div>
  );
};

export default WhatsAppButton;
