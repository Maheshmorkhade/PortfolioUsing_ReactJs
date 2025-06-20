// import React from "react";
// const ContactUs = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center p-6">
//       <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800  items-center flex justify-center">Contact Us</h2>
//         <form className="space-y-4" method="POST">
//           <div>
//             <label className="block text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               required
//               className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               required
//               className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Subject</label>
//             <input
//               type="text"
//               name="subject"
//               required
//               className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Message</label>
//             <textarea
//               name="message"
//               required
//               rows="4"
//               className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Send Message
//           </button>
//         </form>

//       </div>
//     </div>
//   )
// }

// export default ContactUs;
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate backend API call here
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <>
      <div className="flex items-center justify-center text-white text-3xl font-extrabold">
        <h2 className="bg-[#a49bc7] p-5 pr-8 pl-8 border rounded-xl ">
          Contact Us
        </h2>
      </div>

      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 items-center">
            Feel Free To reach out!
          </h2>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-4"
          >
            <div>
              <input
                type="hidden"
                name="access_key"
                value="c0d191b0-fa46-46e7-9554-3e3bbf9898a7"
              />
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                value={formData.message}
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
