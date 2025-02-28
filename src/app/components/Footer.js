export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10 py-10">
    <div className="container mx-auto px-6 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Address Section (Left Side) */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Moonstar It Consultants</h2>
          <p className="mt-2">Unit-935, Tower A, Spaze IT Park, Sohna Road</p>
          <p>Gurugram, Haryana</p>
          <p className="mt-2">Email: Support@Moonstaritcs.com</p>
          <p>Phone: +91 8448010336</p>
        </div>
  
        {/* Google Map Embed (Right Side) */}
        <div className="w-full md:w-1/2 h-60 mt-6 md:mt-0 flex justify-end">
          <iframe
            className="w-full md:w-[90%] h-full rounded-lg border border-blue-500"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.17880015551!2d77.0375650734469!3d28.4138612404799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23942361e03d%3A0x1178427d3b1bde84!2sMoonstar%20IT%20Consultants!5e0!3m2!1sen!2sin!4v1740388791838!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
  
      {/* Footer Bottom */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} MoonStar It Consultants. All rights reserved.</p>
      </div>
    </div>
  </footer>
  
  );
}
