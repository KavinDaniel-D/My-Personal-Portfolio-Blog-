import { Parallax } from "react-scroll-parallax";
// import bg1 from "../assets/images/bg-1.jpg";

export default function AboutMe() {
  return (
    <div className="relative">
      <section
        className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-cover bg-center px-6 md:px-16"
        // style={{ backgroundImage: `url(${bg1})` }}
      >
        <Parallax speed={-12} translateX={[0, 30]}>
          <div className="bg-black h-screen bg-opacity-80 p-8 md:p-12 lg:p-16 rounded-lg shadow-lg max-w-2xl mx-auto md:mx-0 text-center md:text-left">
            <h2 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-6">
              About Me
            </h2>
            <p className="text-white text-lg leading-relaxed">
              Hi, I'm{" "}
              <span className="text-amber-500 font-semibold">Kavin Daniel</span>
              , a passionate Frontend Developer specializing in
              <span className="text-amber-500 font-semibold">
                {" "}
                React, JavaScript, HTML, CSS, Bootstrap, and Tailwind CSS
              </span>
              . I enjoy building responsive, interactive, and user-friendly web
              applications.
              <br />
              <br />
              With hands-on experience, I have worked on e-commerce websites and
              other creative interfaces using modern frontend technologies.
              <br />
              <br />
              Beyond coding, I love{" "}
              <span className="text-amber-500">
                watching movies, playing cricket, and photography
              </span>
              . I'm always eager to learn and explore the **latest trends** in
              frontend development.
            </p>
          </div>
        </Parallax>
      </section>
    </div>
  );
}
