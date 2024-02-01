import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const StickySocials = () => {
  return (
    <div className="relative">
      {" "}
      <div className="bottom-10 left-4 lg:left-10 fixed z-[999] flex items-start gap-4 flex-col">
        <div>
          <a
            href="https://github.com/Zion98/"
            target="_blank"
            className="github__link flex items-center mt-3"
          >
            <div>
              <FontAwesomeIcon
                className="text-clip icon "
                size="2x"
                scale={10}
                // beatFade={true}
                icon={faGithub}
              />
            </div>
          </a>
        </div>
        <div className="">
          <a
            href="https://www.linkedin.com/in/adeyemi-oluwasegun/"
            target="_blank"
            className="linked_in__link flex items-center mt-3"
          >
            <div>
              <FontAwesomeIcon
                className="text-clip icon "
                size="2x"
                scale={10}
                // beatFade={true}
                icon={faLinkedin}
              />
            </div>
          </a>
        </div>{" "}
        <div className="">
          <a
            href="https://www.instagram.com/adeyemi180/"
            target="_blank"
            className="instagram__link flex items-center mt-3"
          >
            <div>
              <FontAwesomeIcon
                className="text-clip icon "
                size="2x"
                scale={10}
                // beatFade={true}
                icon={faInstagram}
              />
            </div>
          </a>
        </div>
        <div>
          {" "}
          <a
            href="https://twitter.com/Cashwisefinance"
            target="_blank"
            className="twitter__link flex items-center mt-3"
          >
            <div>
              {/* <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z"
                  fill="#FFF"
                  fill-opacity="0.08"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.259 12.489C12.3426 12.3165 12.5174 12.207 12.709 12.207H15.779C15.932 12.207 16.0766 12.2771 16.1714 12.3972L20.9025 18.3898L26.9388 12.3535C27.134 12.1582 27.4506 12.1582 27.6459 12.3535C27.8411 12.5487 27.8411 12.8653 27.6459 13.0606L21.5264 19.1801L27.6848 26.9805C27.8035 27.1309 27.8258 27.336 27.7423 27.5084C27.6587 27.6809 27.4839 27.7904 27.2923 27.7904H24.2223C24.0693 27.7904 23.9247 27.7203 23.8299 27.6002L19.0988 21.6076L13.0625 27.6439C12.8673 27.8392 12.5507 27.8392 12.3554 27.6439C12.1602 27.4487 12.1602 27.1321 12.3554 26.9368L18.4749 20.8173L12.3165 13.0169C12.1978 12.8665 12.1755 12.6614 12.259 12.489ZM13.7408 13.207L24.4646 26.7904H26.2605L15.5367 13.207H13.7408Z"
                  fill="#FFF"
                />
              </svg> */}

              <FontAwesomeIcon
                className="text-clip icon "
                size="2x"
                scale={10}
                // beatFade={true}
                icon={faXTwitter}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickySocials;
