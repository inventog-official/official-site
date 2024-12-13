import Button2 from "../common/button2";
import { wholePageContent } from "../../utils/pageContent";
import { useInView } from "react-intersection-observer";

const About = () => {

  const { ref, inView } = useInView({
    threshold: 0.3, // Adjust as needed
    triggerOnce: true, // Only trigger once
  });
  return (
    <div 
    id="about"
      ref={ref}
      className={`min-h-screen   flex flex-col xl:flex-row items-center justify-center gap-16 px-5 md:px-10`}
    >
      <div className="w-full xl:w-1/3  h-full  flex flex-col justify-center items-center">
        <img
          src={"/about.png"}
          alt={"about"}
          className={`h-auto max-h-[90vh] w-full object-cover transition duration-300 filter ${inView ? 'animate-zoomIn' : 'animate-zoomOut'}`}
        />
      </div>
      <div className="w-full xl:w-1/2 flex  h-full">
        <div className="flex flex-col  justify-center items-center xl:justify-start xl:items-start  gap-10 p-6">
          <button className={`border border-black rounded-full w-full xl:w-[30%] px-4 py-2 ${inView ? 'animate-slideIn' : ''}`}>
            {wholePageContent.about.heading}
          </button>
          <p className={`text-lg md:text-xl lg:text-3xl font-serif ${inView ? 'animate-slideIn' : ''}`}>
            {wholePageContent.about.content}
          </p>
          <Button2 classNames={`${inView ? 'animate-slideIn' : 'w-ful'}  px-12 py-2`} text={wholePageContent.about.buttonText} />
        </div>
      </div>
      
    </div>
  );
};

export default About;