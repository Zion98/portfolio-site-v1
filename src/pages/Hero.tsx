import Image from "next/image";
import React from "react";
// import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
const Hero = () => {
  const firstLineImages = [
    {
      name: "boy in bicycle",
      imageLink: "/images/bicycle.svg",
    },

    {
      name: "rainbow-like roof",
      imageLink: "/images/rainbow-roof.svg",
    },

    {
      name: "semi-circle",
      imageLink: "/images/semi-circle.svg",
    },

    {
      name: "boy in bicycle",
      imageLink: "/images/bicycle.svg",
    },

    {
      name: "rainbow-like roof",
      imageLink: "/images/rainbow-roof.svg",
    },

    {
      name: "semi-circle",
      imageLink: "/images/semi-circle.svg",
    },
  ];

  const marqueeVariants = {
    animate: {
      y: [0, -1036],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 100,
          ease: "linear",
        },
      },
    },
  };

  const reverseVariants = {
    animate: {
      y: [-1036, 0],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 100,
          ease: "linear",
        },
      },
    },
  };
  return (
    <>
      {/* <header className="flex py-6 mx-auto px-main bg-[#000]">
        <div className="left__side  h-full w-full flex items-center justify-start">
          <h2 className="font-clash text-sm text-white font-[700]">
            Segun Adeyemi
          </h2>
        </div>

        <div className="right__side bg-[#000] h-full w-full"></div>
      </header> */}

      <main className="h-[25rem] lg:h-[35rem] flex flex-col lg:flex-row">
        <div className="px-main left__side bg-[#000] h-full w-full flex flex-col justify-center items-start relative">
          <header className="top-0 flex bg-[#000] absolute py-4">
            <div className="left__side h-full w-full ">
              <h2 className="whitespace-nowrap font-clash text-sm text-white font-[700]">
                Segun Adeyemi
              </h2>
            </div>

            <div className="right__side bg-[#000] h-full w-full"></div>
          </header>

          <p className="text-base lg:text-4xl text-white ">
            I craft Ideas into code
          </p>
          <h2 className="my-3 lg:my-4 font-clash text-3xl text-white font-[700] ">
            Frontend Engineer
          </h2>

          <p className="text-white text-sm text-justify lg:max-w-[80%] leading-[1.8] ">
            Welcome to my corner of the web! I'm Segun, a seasoned frontend
            developer with a passion for crafting seamless digital experiences.
            Over the past three years, I've had the privilege of weaving my
            skills and expertise across a diverse range of industries, including
            Education, Finance, and Gaming.
          </p>

          <div className="flex items-start gap-2">
            <a
              href="mailto:adeyemioluwasegun98@gmail.com"
              className="py-4 px-4 flex items-center mt-3 gap-x-4 text-xs text-white border-[.1px] border-white hover:bg-white hover:text-black"
            >
              Get in touch
            </a>

            <a
              target="_blank"
              href="https://docs.google.com/document/d/1V98hEDL934cT3f3Zi4nZopSJpLL5evQTJcoyDp3NR_w/edit?usp=sharing"
              className="bg-white py-4 px-4 flex items-center mt-3 gap-x-4 text-xs text-black border-[.1px] border-white hover:bg-transparent hover:text-white"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="hidden right__side bg-[#000] h-full w-full lg:grid grid-cols-12">
          <div className="relative col-span-4 w-full h-full overflow-hidden">
            <div className="marquee">
              <motion.div
                className="track absolute"
                variants={marqueeVariants}
                animate="animate"
              >
                {" "}
                {firstLineImages.map((image) => {
                  return (
                    <div className="all-imag relative">
                      <Image
                        className="object-contain w-full h-full"
                        width={200}
                        height={200}
                        src={image.imageLink}
                        alt={image.name}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          <div className="relative col-span-4 w-full h-full overflow-hidden">
            <div className="marquee">
              <motion.div
                className="track absolute"
                variants={reverseVariants}
                animate="animate"
              >
                {" "}
                {firstLineImages.map((image) => {
                  return (
                    <div className="all-imag relative">
                      <Image
                        className="object-contain w-full h-full"
                        width={200}
                        height={200}
                        src={image.imageLink}
                        alt={image.name}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          <div className="relative col-span-4 w-full h-full overflow-hidden">
            <div className="marquee">
              <motion.div
                className="track absolute"
                variants={marqueeVariants}
                animate="animate"
              >
                {" "}
                {firstLineImages.map((image) => {
                  return (
                    <div className="all-imag relative">
                      <Image
                        className="object-contain w-full h-full"
                        width={200}
                        height={200}
                        src={image.imageLink}
                        alt={image.name}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
