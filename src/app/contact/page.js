import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
      <div className="max-w-xl w-full bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Me</h2>
        
        {/* Make sure to replace YOUR_FORM_ID with your actual Formspree ID */}
        <form action="https://formspree.io/f/xlgvqpye" method="POST" className="w-full gap-5 flex flex-col">
          <div>
            <label className="block text-sm font-bold text-gray-700">Name</label>
            <input
              type="text"
              name="name" // Added name attribute
              required
              className="mt-1 w-full px-4 py-2 border rounded-md text-gray-900"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700">Email</label>
            <input
              type="email" // Changed from text to email
              name="email" // Added name attribute
              required
              className="mt-1 w-full px-4 py-2 border rounded-md text-gray-900"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700">Message</label>
            <textarea
              rows={5}
              name="message" // Added name attribute
              required
              className="mt-1 w-full px-4 py-2 border rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
            />
          </div>

          {/* Cleaned up the submit button (removed the mailto anchor wrapper) */}
          <button
            type="submit"
            className="w-full h-[50px] flex items-center justify-center bg-[#21243D] text-[#FFFF] font-bold rounded-[10px] cursor-pointer hover:bg-[#151728] transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}