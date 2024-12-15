import useServiceData from "@/Data/Data";
import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ConsultationForm = () => {
  // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const url = `https://script.google.com/macros/s/AKfycbwsfxaPBoWEuX7nleK_voLh-ortOBVwZZ2w-JiOot_dtrkPXEsSecsG9TUSQqhPyJ5w/exec`;
  const { t, i18n } = useTranslation("translation");
  const [formDatas, setFormDatas] = useState({
    firstName: "",
    lastName: "",
    email: "", // Pre-fill email for demonstration
    service: "",
    message: "",
  });

  const isFarsi = i18n.language === "fa";

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormDatas({ ...formDatas, [name]: value });
  };
  const newFormData = new FormData();
  const allServices = useServiceData();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation pattern
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formDatas);

    // Validate email before submitting
    if (!validateEmail(formDatas.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    newFormData.append("name", formDatas.firstName + " " + formDatas.lastName);
    newFormData.append("email", formDatas.email);
    newFormData.append("service", formDatas.service);
    newFormData.append("message", formDatas.message);

    try {
      const response = await axios.post(url, newFormData);

      console.log(response, "response response");
      if (response.status === 200) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending the request:", error);
      // alert("There was an error submitting your form.");
    }
  };

  return (
    <div
      style={{ direction: `${isFarsi ? "rtl" : "ltr"}` }}
      className="contactus"
    >
      <div className="shadow-lg sticky bg-white rounded-lg max-w-3xl w-full p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {t("contactUsForm.title")}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* First Name */}
          <input
            type="text"
            name="firstName"
            placeholder={t("contactUsForm.firstName")}
            value={formDatas.firstName}
            onChange={handleChange}
            className="border rounded-md p-2 w-full"
          />

          {/* Last Name */}
          <input
            type="text"
            name="lastName"
            placeholder={t("contactUsForm.lastName")}
            value={formDatas.lastName}
            onChange={handleChange}
            className="border rounded-md p-2 w-full"
          />

          {/* Email (readOnly) */}
          <input
            type="text"
            name="email"
            placeholder={t("contactUsForm.email")}
            value={formDatas.email}
            onChange={handleChange}
            // Email is now read-only
            className="border rounded-md p-2 w-full"
          />

          {/* Service Dropdown */}
          <select
            name="service"
            value={formDatas.service}
            onChange={handleChange}
            className="border rounded-md p-2 w-full"
          >
            <option value="" disabled>
              Select a Service
            </option>
            {allServices.map((service) => (
              <option key={service.en.title} value={service.en.title}>
                {isFarsi ? service.fa.title : service.en.title}
              </option>
            ))}
          </select>

          {/* Message */}
          <textarea
            name="message"
            placeholder={t("contactUsForm.message")}
            value={formDatas.message}
            onChange={handleChange}
            className="col-span-full border rounded-md p-2 w-full"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="col-span-full bg-blue-600 text-white font-bold p-2 rounded-md hover:bg-blue-700"
          >
            {t("contactUsForm.submitButton")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
