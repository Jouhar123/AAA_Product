"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Contact from "@/app/components/Contact";
import Specs from "@/app/components/Specs";
import Features from "@/app/components/Features";

import { Crimson_Text } from "next/font/google"; // Import Google Font
import Footer from "@/app/components/Footer";

const crimson = Crimson_Text({ subsets: ["latin"], weight: ["400", "700"] });

// const roboto = Roboto_Condensed({ subsets: ["latin"], weight: ["400", "700"] });

const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeComponent, setActiveComponent] = useState("Features");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`w-screen h-screen  justify-center items-start bg-black overflow-x-hidden ${crimson.className}`}
    >
      <div className="relative w-full h-[70vh] overflow-hidden">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`image-${index + 1}`}
            width={0}
            height={0}
            sizes="100vw"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 scale-105" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className=" mt-10">
        <p className="text-white text-4xl text-center items-center">AAA Solution</p>
        <p className="text-white text-2xl text-pretty pl-10 pr-10">
          AAA Authentication is a powerful, API-integrated WiFi management
          solution designed for seamless connectivity and enhanced security.
          Fully customizable, it simplifies network access while improving both
          user and client experiences. With advanced features like effortless
          network separation, real-time packet tracking, and robust security
          protocols, AAA Authentication ensures a smooth, secure, and scalable
          internet experience. Whether for small businesses or large
          enterprises, this cutting-edge solution adapts to any organizations
          needs, making network management easier than ever.
        </p>
      </div>

      {/* Button Section */}

      <div className="mt-6 flex gap-4 justify-center">
        {/* Show Features */}
        <button
          className={`border-2 px-6 py-2 rounded-md transition ${
            activeComponent === "Features"
              ? "bg-blue-700 text-white border-blue-700"
              : "border-blue-700 text-white"
          }`}
          onClick={() => setActiveComponent("Features")}
        >
          Features
        </button>

        {/* Specification Button (Future Use) */}
        <button
          className={`border-2 px-6 py-2 rounded-md transition ${
            activeComponent === "Specification"
              ? "bg-blue-700 text-white border-blue-700"
              : "border-blue-700 text-white"
          }`}
          onClick={() => setActiveComponent("Specification")}
        >
          Specification
        </button>

        {/* Show Contact */}
        <button
          className={`border-2 px-6 py-2 rounded-md transition ${
            activeComponent === "contact"
              ? "bg-blue-700 text-white border-blue-700"
              : "border-blue-700 text-white"
          }`}
          onClick={() => setActiveComponent("contact")}
        >
          Contact Us
        </button>
      </div>

      {/* ✅ Render Active Component Inside the Container */}
      <div className="mt-10 mb-10 pl-20 pr-20 w-full">
        <div className="pt-10 pl-20 pr-20 pb-10 border-2 border-blue-700 rounded-xl text-center">
          {/* Show Features by Default, Contact on Button Click */}
          {activeComponent === "Specification" && <Specs />}
          {activeComponent === "contact" && <Contact />}
          {activeComponent === "Features" && <Features />}
        </div>
      </div>
      <Footer />
    </div>
  );
}
