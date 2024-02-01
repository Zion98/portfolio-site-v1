import { clsx } from "clsx";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3,
  faDocker,
  faGit,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faNode,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Skills = () => {
  const skills = [
    {
      name: "html-5",
      fontAwesomeClassName: faHtml5,
    },
    {
      name: "css3",
      fontAwesomeClassName: faCss3,
    },

    {
      name: "JavaScript/ Typescript",
      fontAwesomeClassName: faJs,
    },

    {
      name: "reactjs / nextjs",
      fontAwesomeClassName: faReact,
    },

    {
      name: "vuejs",
      fontAwesomeClassName: faVuejs,
    },

    {
      name: "java",
      fontAwesomeClassName: faJava,
    },

    {
      name: "nodejs",
      fontAwesomeClassName: faNode,
    },

    {
      name: "SQL",
      fontAwesomeClassName: faDatabase,
    },

    {
      name: "docker",
      fontAwesomeClassName: faDocker,
    },

    {
      name: "git",
      fontAwesomeClassName: faGit,
    },

    {
      name: "github",
      fontAwesomeClassName: faGithub,
    },

    //Second Batch
    {
      name: "html-5",
      fontAwesomeClassName: faHtml5,
    },
    {
      name: "css3",
      fontAwesomeClassName: faCss3,
    },

    {
      name: "JavaScript/ Typescript",
      fontAwesomeClassName: faJs,
    },

    {
      name: "reactjs / nextjs",
      fontAwesomeClassName: faReact,
    },

    {
      name: "vuejs",
      fontAwesomeClassName: faVuejs,
    },

    {
      name: "java",
      fontAwesomeClassName: faJava,
    },

    {
      name: "nodejs",
      fontAwesomeClassName: faNode,
    },

    {
      name: "SQL",
      fontAwesomeClassName: faDatabase,
    },

    {
      name: "docker",
      fontAwesomeClassName: faDocker,
    },

    {
      name: "git",
      fontAwesomeClassName: faGit,
    },

    {
      name: "github",
      fontAwesomeClassName: faGithub,
    },

    //Second Batch
    {
      name: "html-5",
      fontAwesomeClassName: faHtml5,
    },
    {
      name: "css3",
      fontAwesomeClassName: faCss3,
    },

    {
      name: "JavaScript/ Typescript",
      fontAwesomeClassName: faJs,
    },

    {
      name: "reactjs / nextjs",
      fontAwesomeClassName: faReact,
    },

    {
      name: "vuejs",
      fontAwesomeClassName: faVuejs,
    },

    {
      name: "java",
      fontAwesomeClassName: faJava,
    },

    {
      name: "nodejs",
      fontAwesomeClassName: faNode,
    },

    {
      name: "SQL",
      fontAwesomeClassName: faDatabase,
    },

    {
      name: "docker",
      fontAwesomeClassName: faDocker,
    },

    {
      name: "git",
      fontAwesomeClassName: faGit,
    },

    {
      name: "github",
      fontAwesomeClassName: faGithub,
    },
  ];

  return (
    <section className="font-poppins mx-auto mt-16 px-main mb-5 lg:mb-10 ">
      <div className="flex justify-center">
        <h2 className="font-clash text-center text-[#98a7d100] text-clip text-base lg:text-2xl font-[600] mb-5">
          Technologies
        </h2>
      </div>

      <div className="mt-2 marquee container mx-auto flex overflow-hidden items-center gap-6">
        <Marquee
          speed={100}
          loop={0}
          pauseOnClick={true}
          className="mask marquee-contnt flex whitespace-nowrap w-full flex-shrink-0 flex-row items-center justify-around gap-y-6 align-center place-content-center md:gap-4 align-middle"
        >
          {skills.map((skill, index) => {
            return (
              <div className="marquee-item font-[400]" key={index}>
                <li
                  key={index + skill.name}
                  className="list-none flex flex-col justify-center items-center"
                >
                  <FontAwesomeIcon
                    className="text-gray-300 icon "
                    size="3x"
                    scale={10}
                    beat={true}
                    icon={skill.fontAwesomeClassName as IconProp}
                  />
                  <p className="text-xs mt-4 !text-white font-bold capitalize">
                    {skill.name.toLowerCase()}
                  </p>
                </li>
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
