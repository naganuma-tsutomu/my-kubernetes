import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | My Portfolio",
  description: "Get in touch with me.",
};

export default function Contact() {
  return (
    <div className="bg-white min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Page Title */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-bold text-[#1C1C1C] font-['Oswald'] uppercase tracking-wide mb-4">
            Contact
          </h1>
          <div className="h-2 w-24 bg-[#1C1C1C] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info Section */}
          <div>
            <h2 className="text-4xl font-bold font-['Oswald'] mb-8 text-[#1C1C1C] uppercase">
              Get In Touch
            </h2>
            <div className="font-['Shippori_Mincho'] text-lg text-[#3a3a3a] space-y-6 leading-relaxed mb-12">
              <p>
                プロジェクトのご相談、技術的な質問、あるいは単なる挨拶でも、お気軽にご連絡ください。
                通常、24時間以内に返信いたします。
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-black pl-6 py-2">
                <h3 className="font-['Oswald'] text-xl font-bold text-[#1C1C1C] uppercase mb-1">Email</h3>
                <a href="mailto:hello@example.com" className="font-['Shippori_Mincho'] text-lg text-[#3a3a3a] hover:text-[#E53935] transition-colors">
                  hello@example.com
                </a>
              </div>

              <div className="border-l-4 border-black pl-6 py-2">
                <h3 className="font-['Oswald'] text-xl font-bold text-[#1C1C1C] uppercase mb-1">Socials</h3>
                <div className="flex space-x-6 font-['Oswald'] text-lg">
                  <a href="#" className="text-[#1C1C1C] hover:text-[#E53935] transition-colors border-b-2 border-transparent hover:border-[#E53935]">Twitter</a>
                  <a href="#" className="text-[#1C1C1C] hover:text-[#E53935] transition-colors border-b-2 border-transparent hover:border-[#E53935]">GitHub</a>
                  <a href="#" className="text-[#1C1C1C] hover:text-[#E53935] transition-colors border-b-2 border-transparent hover:border-[#E53935]">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="relative">
            {/* Decorative background element */}
            <div className="absolute top-4 left-4 w-full h-full bg-gray-100 border-2 border-dashed border-gray-300 -z-10 hidden md:block"></div>

            <form className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-6">
                <label htmlFor="name" className="block font-['Oswald'] text-lg font-bold text-[#1C1C1C] mb-2 uppercase">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-50 border-2 border-black p-3 font-['Shippori_Mincho'] focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(229,57,53,1)] transition-shadow"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block font-['Oswald'] text-lg font-bold text-[#1C1C1C] mb-2 uppercase">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-50 border-2 border-black p-3 font-['Shippori_Mincho'] focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(229,57,53,1)] transition-shadow"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block font-['Oswald'] text-lg font-bold text-[#1C1C1C] mb-2 uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-gray-50 border-2 border-black p-3 font-['Shippori_Mincho'] focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(229,57,53,1)] transition-shadow resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1C1C1C] text-white font-['Oswald'] font-bold text-xl py-4 uppercase tracking-wider hover:bg-[#E53935] transition-colors border-2 border-transparent hover:border-black"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
