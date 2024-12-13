import AnimatedText from "../Animatecomponets/AnimateText/main";
import SlideUp from "../Animatecomponets/SlideUpTextAnimation/main";

const TeamPage = () => {
  return (
    <div className="flex justify-center  items-center h-full   flex-col  ">
      <div className="w-full    xl:h-full text-black  flex justify-end items-start flex-col gap-0 px-5  xl:px-32 ">
        <SlideUp
          className="xl:text-[80px]  text-[40px] font-[800] animate-slideIn   "
          text={"Improve your digital"}
        />
        <SlideUp
          className="xl:text-[80px] text-[40px] font-[800] animate-slideIn    "
          text={"presence with a team of"}
        />
        <span className="flex gap-3">
          <AnimatedText
            text="dedicated"
            className="xl:text-[80px]  animate-slideIn  justify-start items-start text-[40px] font-[800]   "
          />
        </span>
      </div>
    </div>
  );
};

export default TeamPage;
