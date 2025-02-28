import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "53fb1800-d40d-4ac1-8041-8bffe2e40bb4"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset(); // Reset form after successful submission
    } else {
      console.error("Error:", data);
      setResult(`Error: ${data.message}`);
    }
  };

  return (
    <div className="mt-10 flex justify-center">
      <div className="text-white bg-gray-900 p-6 rounded-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Contact Us</h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            required
            className="p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            required
            className="p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          />

          {/* Message Input */}
          <textarea
            name="message"
            placeholder="Enter Message"
            rows="4"
            required
            className="p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          ></textarea>

          {/* Submit Button */}
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {result && <p className="mt-4 text-center">{result}</p>}
      </div>
    </div>
  );
};

export default Contact;
