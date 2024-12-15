import SlideUp from "../Animatecomponets/SlideUpTextAnimation/main";
import AnimatedText from "../Animatecomponets/AnimateText/main";
import { BsArrowDown } from "react-icons/bs";
import ContactForm from "../common/conatctForm";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import EmailLink from "../Animatecomponets/EmailLink/main";
const ContactPage = () => {
  return (
    <div className="flex justify-center  flex-col items-center h-full     ">
      <div className="w-full    xl:h-screen text-black  flex justify-end items-start flex-col gap-0 px-4   xl:px-32 ">
        <SlideUp
          className="xl:text-[80px]  text-[40px] font-[800]   "
          text={"Tell us about"}
        />
        <SlideUp
          className="xl:text-[80px] text-[40px] font-[800]    "
          text={"your next"}
        />
        <span className="flex gap-3">
          <AnimatedText
            text="project"
            className="xl:text-[80px]   justify-start items-start text-[40px] font-[800]   "
          />
        </span>
      </div>
      <div className="w-full h-64  flex gap-3 px-16  ">
        <div className="w-[50%]   h-full flex justify-center items-center">
          <BsArrowDown className="h-28  font-thin w-16 text-black" />
        </div>
        <div className="w-[50%] text-4xl  flex justify-center items-center h-full">
          <SlideUp
            className="xl:text-4xl text-2xl     "
            text={
              "Fill out our project form below and let's make your project dreams come true!"
            }
          />
        </div>
      </div>
      <ContactForm/>
      <div className="bg-primary h-16 w-full flex justify-between items-center  px-16">
      <div className="flex items-center gap-3">
            <a href="#" className="flex  justify-center gap-5  p-2   items-center mx-auto shadow-xl text-lg bg-white backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 text-black relative z-10  font-thin overflow-hidden  rounded-full  ">
              <FaFacebookF />
            </a>
            <a href="#" className="flex  justify-center gap-5  p-2   items-center mx-auto shadow-xl text-lg bg-white backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 text-black relative z-10  font-thin overflow-hidden  rounded-full  ">
              <FaTwitter />
            </a>
            <a href="#" className="flex  justify-center gap-5  p-2   items-center mx-auto shadow-xl text-lg bg-white backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 text-black relative z-10  font-thin overflow-hidden  rounded-full  ">
              <FaInstagram />
            </a>
          </div>
          <span className="font-semibold cursor-pointer">
          {/* office@Inventog.com */}
          <EmailLink />

          </span>
          <span className="font-semibold cursor-pointer">
          Inventog.com 2024©  All rights reserved
          </span>
      </div>

    </div>
  );
};

export default ContactPage;
