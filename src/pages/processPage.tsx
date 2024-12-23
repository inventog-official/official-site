import AnimatedText from "../components/Animatecomponets/AnimateText/main";
import SlideUp from "../components/Animatecomponets/SlideUpTextAnimation/main";
import StepProgressAnimation from "../components/Animatecomponets/stepAnimation/main";


export const ProcessPage = () => {
  return (
    <div className="flex justify-center flex-col  items-center h-full  pt-32 xl:pt-0   px-5  xl:px-32 ">
      <div className="w-full    xl:h-screen text-black  flex justify-end items-start flex-col gap-0  ">
        <SlideUp
          className="xl:text-[80px] text-white text-[40px] font-[800] animate-slideIn   "
          text={"Process of crafting"}
        />

        <span className="flex flex-col xl:flex-row gap-3">
          <AnimatedText
            text="memorable"
            className="xl:text-[80px]  animate-slideIn  justify-start items-start text-[40px] font-[800] text-white  "
          />
          <SlideUp
             
            className="xl:text-[80px] text-[40px] font-[800] animate-slideIn text-white   "
            text={"brands "}
          />
        </span>

        <SlideUp
          className="xl:text-[80px] text-[40px] font-[800] animate-slideIn text-white   "
          text={"and experiences."}
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <StepProgressAnimation
          stepNumber={1}
          firstContent={
            "In the discovery phase, we gather information about your business, your goals, and your target audience. We conduct research to learn more about your industry, your competition, and your unique value proposition. We also work with you to determine your goals for the project, such as increasing leads, improving user experience, or driving online sales. By getting to know your business and target audience intimately, we can develop a strategy that meets your needs and delivers results."
          }
          secondContent={
            "Defining project goals and objectives onducting research and analysis Establishing user personas and scenarios Content strategy and planning Defining technica"
          }
        />
        <StepProgressAnimation
          stepNumber={2}
          firstContent={
            "In the discovery phase, we gather information about your business, your goals, and your target audience. We conduct research to learn more about your industry, your competition, and your unique value proposition. We also work with you to determine your goals for the project, such as increasing leads, improving user experience, or driving online sales. By getting to know your business and target audience intimately, we can develop a strategy that meets your needs and delivers results."
          }
          secondContent={
            "Defining project goals and objectives onducting research and analysis Establishing user personas and scenarios Content strategy and planning Defining technica"
          }
        />
        <StepProgressAnimation
          stepNumber={3}
          firstContent={
            "In the discovery phase, we gather information about your business, your goals, and your target audience. We conduct research to learn more about your industry, your competition, and your unique value proposition. We also work with you to determine your goals for the project, such as increasing leads, improving user experience, or driving online sales. By getting to know your business and target audience intimately, we can develop a strategy that meets your needs and delivers results."
          }
          secondContent={
            "Defining project goals and objectives onducting research and analysis Establishing user personas and scenarios Content strategy and planning Defining technica"
          }
        />
         <StepProgressAnimation
          lineEnable={false}
          stepNumber={4}
          firstContent={
            "In the discovery phase, we gather information about your business, your goals, and your target audience. We conduct research to learn more about your industry, your competition, and your unique value proposition. We also work with you to determine your goals for the project, such as increasing leads, improving user experience, or driving online sales. By getting to know your business and target audience intimately, we can develop a strategy that meets your needs and delivers results."
          }
          secondContent={
            "Defining project goals and objectives onducting research and analysis Establishing user personas and scenarios Content strategy and planning Defining technica"
          }
        />
      </div>
    </div>
  );
};

