import React, { useState } from 'react';
import { FiPaperclip, FiSend, FiSmile } from 'react-icons/fi';

const Contact = () => {
  const [toast, setToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#002b36] via-[#014f43] to-[#003322] flex flex-col items-center justify-center px-4 py-20 font-sans relative transition-all duration-300 ease-in-out">
      
      {/* Header */}
      <h2 className="text-4xl font-bold text-white mb-10">
        <span className="bg-gradient-to-r from-green-300 to-blue-400 text-transparent bg-clip-text">
          Contact Me
        </span>
      </h2>

      {/* Gmail-like Compose Box */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8 transition-all duration-500">
        
        {/* Top Header */}
        <div className="flex items-center justify-between mb-6 border-b pb-3">
          <h3 className="text-lg font-semibold text-gray-800">New Message</h3>
          <button className="text-gray-400 hover:text-red-500 text-xl font-bold transition duration-300 ease-in-out">&times;</button>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* To */}
          <div>
            <input
              type="email"
              placeholder="To"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </div>

          {/* Subject */}
          <div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none transition"
              required
            ></textarea>
          </div>

          {/* Icons & Attachments */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-4 text-gray-600">
              <label className="flex items-center gap-2 cursor-pointer hover:text-green-500 transition">
                <FiPaperclip className="text-xl" />
                <input type="file" className="hidden" />
              </label>
              <button type="button" className="hover:text-yellow-500 transition">
                <FiSmile className="text-xl" />
              </button>
            </div>

            {/* Send Button */}
            <button
              type="submit"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-sm transition"
            >
              <FiSend className="text-lg" /> Send
            </button>
          </div>
        </form>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#1a1a1a] text-white px-6 py-3 rounded-full shadow-lg transition-opacity duration-300 z-50">
          ✅ Message sent successfully!
        </div>
      )}
    </section>
  );
};

export default Contact;
