import L_HTML5 from "../assets/images/skills/html-5.svg";
import L_CSS3 from "../assets/images/skills/css-3.svg";
import L_BOOTSTRAP from "../assets/images/skills/bootstrap-4.svg";
import L_REACT from "../assets/images/skills/react.svg";
import L_GIT from "../assets/images/skills/github.svg";
import L_SQL from "../assets/images/skills/sql.svg";
import L_JAVASCRIPT from "../assets/images/skills/javascript.svg";
import L_TAILWIND from "../assets/images/skills/tailwindcss-icon.svg";

export const skills = {
  frontend: [
    {
  
      imgAltText: "HTML 5",
      imgSrc: L_HTML5,
      skillName: "HTML5"
    },
    {
      imgAltText: "CSS 3",
      imgSrc: L_CSS3,
      skillName: "CSS3"
    },
    {
      imgAltText: "JavaScript",
      imgSrc: L_JAVASCRIPT,
      skillName: "JavaScript"
    },
 
    {
      imgAltText: "React JS",
      imgSrc: L_REACT,
      skillName: "React JS"
    },
  ],
  frameworks: [
 
    {
      imgAltText: "Bootstrap",
      imgSrc: L_BOOTSTRAP,
      skillName: "Bootstrap"
    },
    {
      imgAltText: "tailwindcss",
      imgSrc: L_TAILWIND,
      skillName: "Tailwind CSS"
    }
  ],

  databases: [
    {
      imgAltText: "Sql Database",
      imgSrc: L_SQL,
      skillName: "SQL Database"
    }
  ],
  versionControl: [
    {
      imgAltText: "GIT",
      imgSrc: L_GIT,
      skillName: "GIT"
    }
  ]
};