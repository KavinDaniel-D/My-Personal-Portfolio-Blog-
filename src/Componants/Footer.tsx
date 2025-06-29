import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-10 border-t border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
   
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-xl font-bold mb-2 hover:text-blue-400 transition duration-300">Contact</h1>
          <div className="flex items-center gap-2">
            <Mail size={20} className="text-blue-400" />
            <p className="text-gray-300">kavindaniel99@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Phone size={20} className="text-green-400" />
            <p className="text-gray-300">9566326727</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-xl font-bold mb-2 hover:text-blue-400 transition duration-300">Social Media</h1>
          <div className="flex gap-6">
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-500 transition duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-gray-400 transition duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.instagram.com/_kd127/" aria-label="Instagram" className="hover:text-pink-500 transition duration-300">
              <Instagram size={24} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
