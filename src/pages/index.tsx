import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import Skills from "./Skills";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import MyProjects from "./MyProjects";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import StickySocials from "./StickySocials";
config.autoAddCss = false;

export default function Home() {
  return (
    <main className={poppins.className}>
      <Hero />
      <Skills />

      <MyProjects />

      {/* <Contact /> */}

      <Footer />

      <StickySocials />
    </main>
  );
}
