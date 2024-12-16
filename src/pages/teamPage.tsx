
import AnimatedText from "../components/Animatecomponets/AnimateText/main";
import ParallexHorizontalScroll from "../components/Animatecomponets/ParalexScrollHorizontal/main";
import SlideUp from "../components/Animatecomponets/SlideUpTextAnimation/main";
import TeamCard from "../components/Animatecomponets/TeamCard/main";
import { FeSvg, BeSvg, UiUxSvg, DeVops, PmSvg, QaSvg } from "../components/common/Svg/Team";
import { wholePageContent } from "../utils/pageContent";
import {GetInTouch} from "./getInTouch";

export const TeamPage = () => {

  const teamMembers = [
    {
      gender: "male",
      role: "Frontend Developer",
      color: "bg-white", // Custom color
      profileImage: <FeSvg/>, // Replace with actual image URL
    },
    {
      gender: "male",
      role: "Backend Developer",
      color: "bg-white", // Custom color
      profileImage: <BeSvg/>, // Replace with actual image URL
    },
    {
      gender: "male",
      role: "UI/UX Designer",
      color: "bg-white", // Custom color
      profileImage: <UiUxSvg/>, // Replace with actual image URL
    },
    {
      gender: "male",
      role: "DevOps Engineer",
      color: "bg-white", // Custom color
      profileImage: <DeVops/>, // Replace with actual image URL
    },
    // {
    //   gender: "male",
    //   role: "Software Architect",
    //   color: "bg-white", // Custom color
    //   profileImage: "https://example.com/profile5.jpg", // Replace with actual image URL
    // },
    {
      gender: "male",
      role: "Product Manager",
      color: "bg-white", // Custom color
      profileImage: <PmSvg/>, // Replace with actual image URL
    },
    {
      gender: "male",
      role: "QA Engineer",
      color: "bg-white", // Custom color
      profileImage: <QaSvg/>, // Replace with actual image URL
    },
    // {
    //   gender: "male",
    //   role: "Data Scientist",
    //   color: "bg-white", // Custom color
    //   profileImage: "https://example.com/profile8.jpg", // Replace with actual image URL
    // },
  ];
  return (
    <div className="h-full">
      <div className="flex justify-center  items-center xl:h-full pt-24 xl:pt-0    flex-col  ">
        <div className="w-full    xl:h-full text-black  flex justify-end items-start flex-col gap-0 px-5  xl:px-32 ">
          <SlideUp
            className="xl:text-[80px]  text-[40px] font-[800] animate-slideIn   "
            text={wholePageContent.team.headingText1}
          />
          <SlideUp
            className="xl:text-[80px] text-[40px] font-[800] animate-slideIn    "
            text={wholePageContent.team.headingText2}
          />
          <span className="flex gap-3">
            <AnimatedText
              text={wholePageContent.team.headingText3}
              className="xl:text-[80px]  animate-slideIn  justify-start items-start text-[40px] font-[800]   "
            />
          </span>
        </div>
      </div>

      <div className="flex flex-col  xl:flex-row  items-start text-left px-3 xl:px-10 gap-2 h-full xl:h-screen w-full">
        <div className="w-full  h-full p-16  flex justify-center items-center">
          <img src="https://i.imghippo.com/files/gQX3238Xyg.png" className="animate-zoomIn" />
        </div>
        <div className="w-full flex justify-center h-full gap-2 flex-col px-8 xl:px-14">
          <button className="border border-black w-full xl:w-[30%] rounded-full px-4 py-2 ">
           {wholePageContent.team.heading}
          </button>
          <div className="text-left text-lg xl:text-3xl font-bold max-w-lg leading-relaxed">
           {wholePageContent.team.description}
          </div>
        </div>
      </div>
      <ParallexHorizontalScroll>
      {teamMembers.map((member, index) => (
        <TeamCard
          key={index}
          gender={member.gender}
          role={member.role}
          color={member.color}
          profileImage={member.profileImage}
        />
      ))}
      </ParallexHorizontalScroll>
      <GetInTouch />
    </div>
  );
};

