import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
      <div className="max-w-xl w-full bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Me</h2>
        <form className="w-full space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-md"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-md"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows={5}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
            />
          </div>

          <Link href='mailto:muhammadrahmah005@email.com'
            type="submit"
            className="!w-full bg-[#21243D] text-[#FFFF]  font-extrabold rounded-[10px]"
          >
            Send Message
          </Link>
        </form>
      </div>
    </div>
  );
}