/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Bowlby_One_SC } from "next/font/google";
import { SendIcon } from "lucide-react";

const bowly = Bowlby_One_SC({
  subsets: ["latin"],
  weight: ["400"],
});
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev: any) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const validateForm = () => {
    let valid = true;
    let newErrors: any = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
      valid = false;
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      valid = false;
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
      valid = false;
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async () => {
    try {
      if (!validateForm()) return;
      const sendMail = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          date: new Date().toLocaleDateString(),
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
      );
      if (sendMail) {
        setFormData({ name: "", email: "", message: "", phone: "" });
        alert("Message sent successfully!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className="relative flex flex-col justify-center items-center max-w-6xl mx-auto p-4 py-16"
      id="contact"
    >
      <div className="relative w-full flex flex-col items-end justify-center gap-4 px-4 sm:px-6 py-12">
        <div className="relative z-10 border p-6 sm:p-8 w-full sm:w-[80%] md:w-[65%] lg:w-[50%] rounded-lg bg-white dark:bg-black shadow-md">
          <h2
            className={`text-2xl sm:text-3xl font-bold text-center w-full text-[#432323] dark:text-[#FFFD8F] ${bowly.className}`}
          >
            Contact Us
          </h2>
          <p className="text-sm sm:text-[15px] leading-relaxed text-center mt-2">
            Have a specific inquiry Our experienced team is ready to engage with
            you.
          </p>

          <form className="flex flex-col gap-3 mt-6">
            <div className="space-y-4 mt-8">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="px-2 py-3 w-full text-sm border-b border-black/50 dark:border-white focus:border-blue-600 outline-none placeholder-black dark:placeholder-white"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}

              <input
                type="number"
                placeholder="Phone No."
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="px-2 py-3 w-full text-sm border-b border-black/50 dark:border-white focus:border-blue-600 outline-none placeholder-black dark:placeholder-white"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}

              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="px-2 py-3 w-full text-sm border-b border-black/50 dark:border-white focus:border-blue-600 outline-none placeholder-black dark:placeholder-white"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}

              <textarea
                placeholder="Write Message"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="px-2 pt-3 w-full text-sm border-b border-black/50 dark:border-white focus:border-blue-600 outline-none placeholder-black dark:placeholder-white"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className=" border border-black/20 rounded-md mt-8 flex items-center justify-center gap-2 text-sm font-medium w-full px-4 py-2.5 bg-[#432323] hover:bg-[#572727] text-white cursor-pointer dark:bg-[#FFFD8F] dark:hover:bg-[#FFFD8F] dark:text-black"
            >
              <SendIcon size={18} className="stroke-white dark:stroke-black"/>
              Send Message
            </button>
          </form>
          <ul className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="currentColor"
                viewBox="0 0 479.058 479.058"
              >
                <path
                  d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                  data-original="#000000"
                />
              </svg>
              <a href="mailto:Bakhtawarsinghgahle@yahoo.in" className="text-sm ml-3">
                <span className="font-medium">Bakhtawarsinghgahle@yahoo.in</span>
              </a>
            </li>
            <li className="flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="currentColor"
                viewBox="0 0 482.6 482.6"
              >
                <path
                  d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                  data-original="#000000"
                ></path>
              </svg>
              <a href="tel:+919417319262" className="text-sm ml-3">
                <span className="font-medium">94173-19262</span>
              </a>,
              <a href="tel:+919417667165" className="text-sm ml-3">
                <span className="font-medium">94176-67165</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="md:absolute block top-0 left-0 md:h-screen h-[50vh] w-full rounded-2xl overflow-hidden md:-z-0">
             <iframe
               src="https://www.google.com/maps?q=30.864935,74.930880&z=15&output=embed"
               className="h-full w-full"
               frameBorder="0"
               allowFullScreen
             />
           </div>
      </div>
    </div>
  );
};

export default Contact;


