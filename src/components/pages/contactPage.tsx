import SlideUp from "../Animatecomponets/SlideUpTextAnimation/main";
import AnimatedText from "../Animatecomponets/AnimateText/main";
import { BsArrowDown } from "react-icons/bs";
import ContactForm from "../common/conatctForm";
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
    </div>
  );
};

export default ContactPage;
