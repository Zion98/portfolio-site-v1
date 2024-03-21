import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyProjects = () => {
  //
  //profiles--decagon
  //education.p2vest - p2vest
  // winwise --liberty
  //paybox--liberty
  //cashwise website

  const myProjects = [
    {
      title: "PayBox360",
      image: "/images/paybox.png",
      description:
        "An all in one financial solutions platform with services ranging from Sales operations, HR management, Expense tracking,Inventory management etc.",
      link: "https://www.paybox360.com/",
    },
    {
      title: "WinWise",
      image: "/images/winwise.png",
      description:
        "An interactive gaming software platform for placing bets across different arrays of Game options.",
      link: "https://www.wisewinn.com/",
    },
    {
      title: "Cashwise",
      image: "/images/cashwise.png",
      description:
        "A series of connected informational landing pages for financial related services centered around iternational cash transfer in over 2 countries.",
      link: "https://www.cashwise.finance/",
    },
    {
      title: "Profiles",
      image: "/images/profiles.png",
      description:
        "A digital platform that connects businesses and individuals seeking software-related services with skilled professionals in the software development industry.",
      link: "https://profiles.decagonhq.com/",
    },
    {
      title: "Education Loans App (P2vest)",
      image: "/images/educationp2vest.png",
      description:
        "A web application targeted towards providing financial loan options for interested students.",
      link: "https://education.p2vest.com/",
    },
  ];

  return (
    <div className="mx-auto px-main container">
      <div className="flex justify-center mt-16">
        <h2 className="font-clash text-center text-[#98a7d100] text-clip text-base lg:text-2xl font-[600] mb-5">
          Featured Projects
        </h2>
      </div>
      <div className="flex w-full max-w-full flex-col gap-12 rounded-[12px] sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4">
        {myProjects.map((project) => {
          return (
            <Link
              target="_blank"
              href={project.link}
              key={project.description}
              className="hover:scale-[1.05] transition ease-in-out delay-[11ms] bg-[#171c28] relative bg-[url(/images/card__bg.svg)] bg-right-top bg-no-repeat rounded-b-[2rem]"
            >
              <div className="p-6 pb-0 mb-6">
                <a
                  href={project.link}
                  target="_blank"
                  className="text-[#fff] bg-[#2d2d30] text-xs p-3 px-5 rounded-lg"
                >
                  View Project
                </a>
              </div>
              <div className=" pb-4 w-full h-[10rem] relative pr-[.1rem]">
                <Image
                  className="h-full w-full object-cover"
                  width={100}
                  height={100}
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="pb-6">
                <h2 className="py-2 bg-[#000] px-6 text-base font-[600] text-white my-6">
                  {project.title}
                </h2>

                <p className="leading-[1.6]  px-6 text-xs text-white">
                  {project.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
