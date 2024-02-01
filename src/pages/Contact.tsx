import { Button, FormError, Input } from "@/components/elements";
import { launchNotification } from "@/utils";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Contact = () => {
  type MessageFormValues = {
    fullname: string;
    email: string;
    message: string;
  };
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<MessageFormValues>({
    mode: "onTouched",
  });

  const [loading, setLoading] = React.useState(false);

  const onSubmit: SubmitHandler<MessageFormValues> = async (data) => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.cashwise.finance/v1/messaging/contact",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      setLoading(false);
      launchNotification(
        "success",
        result?.message || "Message sent successfully."
      );
      reset();
    } catch (error: any) {
      setLoading(false);
      launchNotification(
        "error",
        error?.message || "An error occured, please try again later"
      );
    }

    // saveContact(data);
  };
  return (
    <main className="font-poppins relative contact__section mx-auto container px-main ">
      <div className="flex flex-col md:flex-row items-start justify-between py-10">
        <div>
          <h2 className="text-center text-[#98a7d100] text-clip text-base lg:text-2xl font-[600] mb-5">
            Will you like to reach me?
          </h2>

          <div className="contact__options flex items-center justify-between gap-4 flex-wrap">
            <a
              href="tel:+2348142707088"
              className="flex items-center mt-3 gap-x-4"
            >
              <div className="p-2 rounded-full bg-[#17C373]/10 ">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.8087 15.7753C18.8087 16.0753 18.742 16.3837 18.6003 16.6837C18.4587 16.9837 18.2753 17.267 18.0337 17.5337C17.6253 17.9837 17.1753 18.3087 16.667 18.517C16.167 18.7253 15.6253 18.8337 15.042 18.8337C14.192 18.8337 13.2837 18.6337 12.3253 18.2253C11.367 17.817 10.4087 17.267 9.45866 16.5753C8.50033 15.8753 7.59199 15.1003 6.72533 14.242C5.86699 13.3753 5.09199 12.467 4.40033 11.517C3.71699 10.567 3.16699 9.61699 2.76699 8.67533C2.36699 7.72533 2.16699 6.81699 2.16699 5.95033C2.16699 5.38366 2.26699 4.84199 2.46699 4.34199C2.66699 3.83366 2.98366 3.36699 3.42533 2.95033C3.95866 2.42533 4.54199 2.16699 5.15866 2.16699C5.39199 2.16699 5.62533 2.21699 5.83366 2.31699C6.05033 2.41699 6.24199 2.56699 6.39199 2.78366L8.32533 5.50866C8.47533 5.71699 8.58366 5.90866 8.65866 6.09199C8.73366 6.26699 8.77533 6.44199 8.77533 6.60033C8.77533 6.80033 8.71699 7.00033 8.60033 7.19199C8.49199 7.38366 8.33366 7.58366 8.13366 7.78366L7.50033 8.44199C7.40866 8.53366 7.36699 8.64199 7.36699 8.77533C7.36699 8.84199 7.37533 8.90033 7.39199 8.96699C7.41699 9.03366 7.44199 9.08366 7.45866 9.13366C7.60866 9.40866 7.86699 9.76699 8.23366 10.2003C8.60866 10.6337 9.00866 11.0753 9.44199 11.517C9.89199 11.9587 10.3253 12.367 10.767 12.742C11.2003 13.1087 11.5587 13.3587 11.842 13.5087C11.8837 13.5253 11.9337 13.5503 11.992 13.5753C12.0587 13.6003 12.1253 13.6087 12.2003 13.6087C12.342 13.6087 12.4503 13.5587 12.542 13.467L13.1753 12.842C13.3837 12.6337 13.5837 12.4753 13.7753 12.3753C13.967 12.2587 14.1587 12.2003 14.367 12.2003C14.5253 12.2003 14.692 12.2337 14.8753 12.3087C15.0587 12.3837 15.2503 12.492 15.4587 12.6337L18.217 14.592C18.4337 14.742 18.5837 14.917 18.6753 15.1253C18.7587 15.3337 18.8087 15.542 18.8087 15.7753Z"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                </svg>
              </div>
              <p className="text-sm text-white">+234 814 270 7088</p>
            </a>

            <a
              href="mailto:adeyemioluwasegun98@gmail.com"
              className="flex items-center mt-3 gap-x-4"
            >
              <div className="p-2 rounded-full bg-[#17C373]/10 ">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 21.0005H7.5C4.5 21.0005 2.5 19.5005 2.5 16.0005V9.00049C2.5 5.50049 4.5 4.00049 7.5 4.00049H17.5C20.5 4.00049 22.5 5.50049 22.5 9.00049V16.0005C22.5 19.5005 20.5 21.0005 17.5 21.0005Z"
                    stroke="#17C373"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.5 9.50049L14.37 12.0005C13.34 12.8205 11.65 12.8205 10.62 12.0005L7.5 9.50049"
                    stroke="#17C373"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="text-sm text-white">
                adeyemioluwasegun98@gmail.com
              </p>
            </a>
          </div>

          <div className="sm_options mt-6">
            <p className="text-base text-white"> Socials</p>
            <div className="flex items-start gap-4">
              <div className="">
                <a
                  href="https://www.instagram.com/cashwisefinance/"
                  target="_blank"
                  className="instagram__link flex items-center mt-3"
                >
                  <div>
                    <svg
                      width="41"
                      height="41"
                      viewBox="0 0 41 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="20.5"
                        cy="20.5005"
                        r="20"
                        fill="#17C373"
                        fill-opacity="0.08"
                      />
                      <g clip-path="url(#clip0_568_49718)">
                        <path
                          d="M25.3046 16.7752C25.9011 16.7752 26.3846 16.2917 26.3846 15.6952C26.3846 15.0988 25.9011 14.6152 25.3046 14.6152C24.7081 14.6152 24.2246 15.0988 24.2246 15.6952C24.2246 16.2917 24.7081 16.7752 25.3046 16.7752Z"
                          fill="#121212"
                        />
                        <path
                          d="M20.4996 15.8789C19.5855 15.8789 18.692 16.15 17.9319 16.6578C17.1719 17.1656 16.5795 17.8874 16.2297 18.7319C15.8799 19.5764 15.7884 20.5057 15.9667 21.4022C16.1451 22.2987 16.5852 23.1222 17.2316 23.7686C17.8779 24.4149 18.7014 24.8551 19.5979 25.0334C20.4945 25.2117 21.4237 25.1202 22.2682 24.7704C23.1127 24.4206 23.8345 23.8282 24.3423 23.0682C24.8502 22.3082 25.1212 21.4146 25.1212 20.5006C25.1212 19.2748 24.6343 18.0993 23.7676 17.2326C22.9009 16.3658 21.7253 15.8789 20.4996 15.8789ZM20.4996 23.5006C19.9062 23.5006 19.3262 23.3246 18.8329 22.995C18.3395 22.6653 17.955 22.1968 17.7279 21.6486C17.5009 21.1004 17.4415 20.4972 17.5572 19.9153C17.673 19.3333 17.9587 18.7988 18.3783 18.3792C18.7978 17.9597 19.3324 17.674 19.9143 17.5582C20.4963 17.4424 21.0995 17.5019 21.6476 17.7289C22.1958 17.956 22.6643 18.3405 22.994 18.8338C23.3236 19.3272 23.4996 19.9072 23.4996 20.5006C23.4996 21.2962 23.1835 22.0593 22.6209 22.6219C22.0583 23.1845 21.2952 23.5006 20.4996 23.5006Z"
                          fill="#17C373"
                        />
                        <path
                          d="M20.5 13.1221C22.9031 13.1221 23.1878 13.1313 24.1368 13.1746C24.7075 13.1814 25.2728 13.2863 25.808 13.4845C26.1961 13.6343 26.5486 13.8636 26.8428 14.1578C27.1369 14.452 27.3663 14.8045 27.516 15.1926C27.7143 15.7278 27.8191 16.2931 27.8259 16.8638C27.8692 17.8128 27.8784 18.0975 27.8784 20.5006C27.8784 22.9036 27.8693 23.1883 27.8259 24.1373C27.8191 24.708 27.7143 25.2733 27.516 25.8085C27.3663 26.1967 27.1369 26.5491 26.8428 26.8433C26.5486 27.1375 26.1961 27.3668 25.808 27.5166C25.2728 27.7149 24.7075 27.8197 24.1368 27.8265C23.1879 27.8698 22.9033 27.879 20.5 27.879C18.0967 27.879 17.8122 27.8698 16.8632 27.8265C16.2925 27.8197 15.7272 27.7149 15.192 27.5166C14.8039 27.3668 14.4514 27.1375 14.1572 26.8433C13.8631 26.5491 13.6337 26.1967 13.484 25.8085C13.2857 25.2733 13.1809 24.708 13.1741 24.1373C13.1308 23.1883 13.1216 22.9036 13.1216 20.5006C13.1216 18.0975 13.1307 17.8128 13.1741 16.8638C13.1809 16.2931 13.2857 15.7278 13.484 15.1926C13.6337 14.8044 13.8631 14.452 14.1572 14.1578C14.4514 13.8636 14.8039 13.6342 15.192 13.4845C15.7272 13.2862 16.2925 13.1814 16.8632 13.1746C17.8122 13.1313 18.0969 13.1221 20.5 13.1221V13.1221ZM20.5 11.5005C18.0557 11.5005 17.7492 11.5108 16.7893 11.5546C16.0428 11.5696 15.3042 11.7111 14.605 11.973C14.007 12.2042 13.464 12.5578 13.0107 13.0112C12.5573 13.4645 12.2037 14.0075 11.9725 14.6055C11.7106 15.3048 11.5691 16.0435 11.5541 16.7902C11.5103 17.7497 11.5 18.0562 11.5 20.5005C11.5 22.9447 11.5103 23.2513 11.5541 24.2112C11.5691 24.9578 11.7106 25.6965 11.9725 26.3959C12.2037 26.9938 12.5573 27.5369 13.0107 27.9902C13.464 28.4435 14.007 28.7971 14.605 29.0284C15.3043 29.2903 16.043 29.4318 16.7897 29.4467C17.7492 29.4901 18.0557 29.5005 20.5 29.5005C22.9443 29.5005 23.2508 29.4901 24.2107 29.4463C24.9573 29.4314 25.696 29.2899 26.3954 29.028C26.9933 28.7968 27.5364 28.4431 27.9897 27.9898C28.443 27.5365 28.7966 26.9934 29.0279 26.3955C29.2898 25.6961 29.4313 24.9575 29.4462 24.2108C29.4897 23.2513 29.5 22.9447 29.5 20.5005C29.5 18.0562 29.4896 17.7497 29.4459 16.7898C29.4309 16.0433 29.2894 15.3047 29.0275 14.6055C28.7962 14.0076 28.4426 13.4646 27.9893 13.0114C27.5359 12.5581 26.9929 12.2046 26.395 11.9734C25.6957 11.7114 24.957 11.57 24.2103 11.555C23.2508 11.5108 22.9443 11.5005 20.5 11.5005Z"
                          fill="#17C373"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_568_49718">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(8.5 8.50049)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  {/* <p className="text-sm text-white">@cashwisefinance</p> */}
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
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z"
                        fill="#17C373"
                        fill-opacity="0.08"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.259 12.489C12.3426 12.3165 12.5174 12.207 12.709 12.207H15.779C15.932 12.207 16.0766 12.2771 16.1714 12.3972L20.9025 18.3898L26.9388 12.3535C27.134 12.1582 27.4506 12.1582 27.6459 12.3535C27.8411 12.5487 27.8411 12.8653 27.6459 13.0606L21.5264 19.1801L27.6848 26.9805C27.8035 27.1309 27.8258 27.336 27.7423 27.5084C27.6587 27.6809 27.4839 27.7904 27.2923 27.7904H24.2223C24.0693 27.7904 23.9247 27.7203 23.8299 27.6002L19.0988 21.6076L13.0625 27.6439C12.8673 27.8392 12.5507 27.8392 12.3554 27.6439C12.1602 27.4487 12.1602 27.1321 12.3554 26.9368L18.4749 20.8173L12.3165 13.0169C12.1978 12.8665 12.1755 12.6614 12.259 12.489ZM13.7408 13.207L24.4646 26.7904H26.2605L15.5367 13.207H13.7408Z"
                        fill="#17C373"
                      />
                    </svg>
                  </div>
                  {/* <p className="text-sm text-white">@cashwisefinance</p> */}
                </a>
              </div>

              <div>
                <a
                  href="https://web.facebook.com/cashwisefinance"
                  target="_blank"
                  className="facebook__link flex items-center mt-3"
                >
                  <div>
                    <svg
                      width="41"
                      height="41"
                      viewBox="0 0 41 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="20.5"
                        cy="20.5005"
                        r="20"
                        fill="#17C373"
                        fill-opacity="0.08"
                      />
                      <g clip-path="url(#clip0_568_49727)">
                        <path
                          d="M20.5 21.9995H23L24 17.9995H20.5V15.9995C20.5 14.9695 20.5 13.9995 22.5 13.9995H24V10.6395C23.674 10.5965 22.443 10.4995 21.143 10.4995C18.428 10.4995 16.5 12.1565 16.5 15.1995V17.9995H13.5V21.9995H16.5V30.4995H20.5V21.9995Z"
                          fill="#17C373"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_568_49727">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(6.5 8.50049)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  {/* <p className="text-sm text-white">Cashwise Finance</p> */}
                </a>
              </div>
              <div className="">
                <a
                  href="https://www.linkedin.com/company/cashwise/"
                  target="_blank"
                  className="linked_in__link flex items-center mt-3"
                >
                  <div>
                    <svg
                      width="41"
                      height="41"
                      viewBox="0 0 41 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="20.5"
                        cy="20.5005"
                        r="20"
                        fill="#17C373"
                        fill-opacity="0.08"
                      />
                      <g clip-path="url(#clip0_568_49734)">
                        <path
                          d="M16.2835 14.668C16.2833 15.11 16.1075 15.5339 15.7948 15.8463C15.4821 16.1587 15.0581 16.334 14.616 16.3338C14.174 16.3336 13.7502 16.1578 13.4378 15.8451C13.1254 15.5324 12.95 15.1083 12.9502 14.6663C12.9504 14.2243 13.1262 13.8005 13.4389 13.4881C13.7517 13.1757 14.1757 13.0003 14.6177 13.0005C15.0597 13.0007 15.4836 13.1765 15.796 13.4892C16.1084 13.8019 16.2838 14.226 16.2835 14.668ZM16.3335 17.568H13.0002V28.0013H16.3335V17.568ZM21.6002 17.568H18.2835V28.0013H21.5669V22.5263C21.5669 19.4763 25.5419 19.193 25.5419 22.5263V28.0013H28.8335V21.393C28.8335 16.2513 22.9502 16.443 21.5669 18.968L21.6002 17.568Z"
                          fill="#17C373"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_568_49734">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(10.5 10.5005)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  {/* <p className="text-sm text-white">Cashwise Finance</p> */}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 lg:mt-0 contact__form relative w-full lg:w-[35%]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 p-6 bg-[#313339] rounded-[10px] font-poppins"
          >
            <p className="text-[#fff] text-sm max-w-[90%]">
              Interested in building a new project or want me to collaborate in
              an exiting one?
            </p>

            <div className="full__name">
              <Input
                className="h-auto placeholder:text-black rounded-lg px-6 py-3.5 text-sm font-medium focus:!bg-white/30 focus:!ring-1 focus:!ring-white outline-none focus:ring-offset-1 focus:ring-offset-[#818181]"
                id="fullname"
                placeholder="Full Name"
                type="text"
                required
                {...register("fullname", { required: true })}
              />

              {errors?.fullname && (
                <FormError
                  className="bg-red-900/40 text-white"
                  errorMessage={errors.fullname.message}
                />
              )}
            </div>

            <div className="message">
              <textarea
                className="placeholder:text-black w-full h-auto rounded-lg px-6 py-3.5 text-sm font-medium focus:!bg-white/30 focus:!ring-1 focus:!ring-white outline-none focus:ring-offset-1 focus:ring-offset-[#818181]"
                id="message"
                placeholder="Message"
                rows={5}
                required
                {...register("message", { required: true })}
              ></textarea>

              {errors?.message && (
                <FormError
                  className="bg-red-900/40 text-white"
                  errorMessage={errors.message.message}
                />
              )}
            </div>
            <div>
              <Button
                className="text-white rounded-[7px] bg-[#191970]/[.5] py-4 font-[600]"
                variant={"unstyled"}
                size={"fullWidth"}
              >
                {loading ? <span>Loading...</span> : <span> Send message</span>}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
