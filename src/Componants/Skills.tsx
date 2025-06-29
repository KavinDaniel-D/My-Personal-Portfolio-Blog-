import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { skills } from "../Data/SkillsData";

export default function Skills() {
  return (
    <ParallaxProvider>
      <div className="py-10 bg-transparent text-white" id="skills">
        <h1 className="text-center text-4xl font-bold mb-10">TECH SKILLS</h1>

        <Parallax speed={-10}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 justify-center">
            {skills &&
              Object.entries(skills).map(([category, skillList], index) =>
                skillList?.length > 0 ? (
                  <motion.div
                    key={category}
                    className="bg-gray-900  p-6  rounded-xl "
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <h3 className="text-xl font-semibold text-center capitalize">
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </h3>
                    <hr className="my-4 border-gray-600" />
                    <div className="flex flex-wrap justify-center gap-4">
                      {skillList.map((skill, idx) => (
                        <a
                          key={idx}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 hover:text-blue-400 transition"
                        >
                          <img
                            src={skill.imgSrc || "default.png"}
                            alt={skill.imgAltText || "Skill"}
                            className="w-10 h-10"
                          />
                          <span>{skill.skillName || "Unknown Skill"}</span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                ) : null
              )}
          </div>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}
