import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import EmailLink from "../components/Animatecomponets/EmailLink/main";
import SlideUp from "../components/Animatecomponets/SlideUpTextAnimation/main";
import Button3 from "../components/common/button3";
import { useInView } from "react-intersection-observer";


export const GetInTouch = ({bgColor='bg-primary'}:{bgColor?:string}) => {
  const { ref, inView } = useInView({
    threshold: 0.3, // Adjust as needed
    triggerOnce: true, // Only trigger once
  });
  return (
    <div ref={ref} id={"getInTouch"}>
 
      <div className={`xl:h-screen  lg:h-full py-3 xl:py-0  ${bgColor} justify-center items-center flex xl:px-10 px-5 `}>
        <div className="flex flex-col md:flex-row gap-10  items-center justify-between w-full">
          <div className="text-black w-full px-5 ">
            <h2 className="xl:text-[120px] text-[50px] font-bold">
              {<SlideUp text="Get" />}
            </h2>
            <h2 className="xl:text-[120px] text-[50px] font-bold">
              {" "}
              {<SlideUp text="in touch" />}
            </h2>
          </div>
          <div className="gap-28  xl:gap-16 xl:w-[60%] w-[100%] px-5 flex flex-col h-full  justify-start items-start  text-black">
            <p className="text-2xl text-wrap font-semibold h-10">
              <SlideUp
                text={
                  "Provide us with project information and reach out to our team."
                }
              />
            </p>
            <Button3
             bgColor={bgColor}
              classNames={`${inView ? "animate-slideIn" : ""}`}
              text={"contact us"}
            />
          </div>
        </div>
      </div>
      <div className={`${bgColor} xl:h-16 h-full w-full flex  flex-col xl:flex-row justify-between items-start xl:items-center px-5 gap-2 py-2 xl:px-16`}>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex  justify-center gap-5  p-2   items-center mx-auto shadow-xl text-md xl:text-lg bg-white backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 text-black relative z-10  font-thin overflow-hidden  rounded-full  "
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="flex  justify-center gap-5  p-2   items-center mx-auto shadow-xl text-md xl:text-lg bg-white backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 text-black relative z-10  font-thin overflow-hidden  rounded-full  "
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="flex  justify-center gap-5  p-2   items-center mx-auto shadow-xl text-md xl:text-lg bg-white backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 text-black relative z-10  font-thin overflow-hidden  rounded-full  "
          >
            <FaInstagram />
          </a>
        </div>
        <span className="font-semibold cursor-pointer">
          <EmailLink />
        </span>
        <span className="font-semibold cursor-pointer">
          Inventog.com 2024© All rights reserved
        </span>
      </div>
    </div>
  );
};

