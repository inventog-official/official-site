import { useInView } from "react-intersection-observer";
import SlideUp from "../Animatecomponets/SlideUpTextAnimation/main";
import Button3 from "../common/button3";

const GetInTouch = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, // Adjust as needed
    triggerOnce: true, // Only trigger once
  });
  return (
    <div ref={ref} id={'getInTouch'} className="h-screen bg-primary justify-center items-center flex xl:px-10 px-5 ">
      <div className="flex flex-col md:flex-row gap-10  items-center justify-between w-full">
        <div className="text-black w-full px-5 ">
          <h2 className="xl:text-[120px] text-[50px] font-bold">{<SlideUp text="Get"/>}</h2>
          <h2 className="xl:text-[120px] text-[50px] font-bold"> {<SlideUp text="in touch"/>}</h2>
        </div>
        <div className="gap-28  xl:gap-16 xl:w-[60%] w-[100%] px-5 flex flex-col h-full  justify-start items-start  text-black">
          <p className="text-2xl text-wrap font-semibold h-10">
            <SlideUp text={'Provide us with project information and reach out to our team.'}/>
           
          </p>
          <Button3 classNames={`${inView?"animate-slideIn":""}`} text={"contact us"} />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
