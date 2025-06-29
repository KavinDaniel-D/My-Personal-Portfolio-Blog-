import { motion } from "framer-motion";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  SendHorizonal,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-black">
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.section
          className="w-full h-[40vh] lg:h-[55vh] bg-cover bg-center brightness-50"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('your-image.jpg')",
            backgroundSize: "cover",
          }}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="absolute top-1/2 left-[5%] md:left-[10%] -translate-y-1/2 text-white"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold">Get In Touch</h1>
        </motion.div>
      </motion.div>

      <div className="w-full h-[1200px] md:h-[60vh] lg:h-[100vh] bg-gray-900 relative">
        <motion.div
          className="absolute -top-[3%] md:-top-[10%] left-1/2 -translate-x-1/2 grid grid-cols-1 md:grid-cols-3 h-fit w-4/5 md:w-[90%] lg:w-4/5 rounded shadow overflow-hidden text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="p-4 md:p-6 h-full bg-gray-800 col-span-2 rounded-lg">
            <form>
              <div className="flex flex-col md:flex-row justify-between items-center pt-6">
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Send Us A Message
                </h2>
                <Mail size={28} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 text-sm">
                <input
                  className="border-[1px] border-gray-500 bg-gray-900 p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter Your Name"
                  required
                  name="name"
                  type="text"
                />
                <input
                  className="border-[1px] border-gray-500 bg-gray-900 p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter Your Email"
                  required
                  name="email"
                  type="email"
                />
                <input
                  className="border-[1px] border-gray-500 bg-gray-900 p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter Your Phone Number"
                  required
                  name="phone"
                  type="tel"
                />
                <input
                  className="border-[1px] border-gray-500 bg-gray-900 p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter Your Subject"
                  required
                  name="subject"
                  type="text"
                />
                <textarea
                  className="border-[1px] border-gray-500 bg-gray-900 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 md:col-span-2"
                  placeholder="Enter Your Message"
                  required
                  name="message"
                  rows={4}
                ></textarea>
              </div>
            </form>
            <div className="flex items-center justify-center md:justify-end py-4">
              <motion.button
                className="py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-xl">Submit</span>
                <SendHorizonal />
              </motion.button>
            </div>
          </div>
          <motion.div
            className="p-6 bg-blue-800 flex flex-col justify-between rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            style={{
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <h2 className="text-xl lg:text-2xl text-center font-semibold">
              Contact Information
            </h2>

            <div className="flex flex-col items-center mt-6">
              <Mail size={35} stroke="#fff" />
              <span className="mt-2 text-lg">kavindaniel99@gmail.com</span>
            </div>

            <div className="flex flex-col items-center mt-6">
              <Phone size={35} stroke="#fff" />
              <span className="mt-2 text-lg">9566326727</span>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="text-white hover:text-gray-300" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="text-white hover:text-gray-300" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="text-white hover:text-gray-300" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
