import AnimatedText from "../Animatecomponets/AnimateText/main";
import ParallexHorizontalScroll from "../Animatecomponets/ParalexScrollHorizontal/main";
import SlideUp from "../Animatecomponets/SlideUpTextAnimation/main";
import TeamCard from "../Animatecomponets/TeamCard/main";
import GetInTouch from "./getInTouch";

const TeamPage = () => {

  const teamMembers = [
    {
      gender: "male",
      role: "Frontend Developer",
      color: "bg-blue-500", // Custom color
      profileImage: "https://example.com/profile1.jpg", // Replace with actual image URL
    },
    {
      gender: "male",
      role: "Backend Developer",
      color: "bg-blue-500", // Custom color
      profileImage: "https://example.com/profile2.jpg", // Replace with actual image URL
    },
    {
      gender: "male",
      role: "UI/UX Designer",
      color: "bg-blue-500", // Custom color
      profileImage: "https://example.com/profile3.jpg", // Replace with actual image URL
    },
    {
      gender: "male",
      role: "DevOps Engineer",
      color: "bg-blue-500", // Custom color
      profileImage: "https://example.com/profile4.jpg", // Replace with actual image URL
    },
    {
      gender: "male",
      role: "Software Architect",
      color: "bg-blue-500", // Custom color
      profileImage: "https://example.com/profile5.jpg", // Replace with actual image URL
    },
    {
      gender: "male",
      role: "Product Manager",
      color: "bg-blue-500", // Custom color
      profileImage: "https://example.com/profile6.jpg", // Replace with actual image URL
    },
    {
      gender: "male",
      role: "QA Engineer",
      color: "bg-blue-500", // Custom color
      profileImage: "https://example.com/profile7.jpg", // Replace with actual image URL
    },
    {
      gender: "male",
      role: "Data Scientist",
      color: "bg-blue-500", // Custom color
      profileImage: "https://example.com/profile8.jpg", // Replace with actual image URL
    },
  ];
  return (
    <div className="h-full">
      <div className="flex justify-center  items-center xl:h-full pt-24 xl:pt-0    flex-col  ">
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

      <div className="flex flex-col  xl:flex-row  items-start text-left px-3 xl:px-10 gap-2 h-full xl:h-screen w-full">
        <div className="w-full  h-full p-16  flex justify-center items-center">
          <img src="/team.png" className="animate-zoomIn" />
        </div>
        <div className="w-full flex justify-center h-full gap-2 flex-col px-8 xl:px-14">
          <button className="border border-black w-full xl:w-[30%] rounded-full px-4 py-2 ">
            OUR MISSION
          </button>
          <div className="text-left text-lg xl:text-3xl font-bold max-w-lg leading-relaxed">
            We believe that every brand has a unique story to tell, and we
            strive to bring that story to life through innovative solutions.
            From concept to implementation, we work hand-in-hand with our
            clients to develop innovative digital products and create a
            compelling online presence that sets them apart from the
            competition.
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

export default TeamPage;
