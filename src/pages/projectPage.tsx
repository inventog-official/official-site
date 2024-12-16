
import { BsArrowDown } from "react-icons/bs";
import ImageCard from "../components/Animatecomponets/ImageScreenAnimation/main";
import SlideUp from "../components/Animatecomponets/SlideUpTextAnimation/main";
import HorizontalScroll from "../components/Animatecomponets/HorizontalScrollAnimation/main";
import Button2 from "../components/common/button2";
import { wholePageContent } from "../utils/pageContent";
import { useInView } from "react-intersection-observer";

export const ProjectPage = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, // Adjust as needed
    triggerOnce: true, // Only trigger once
  });
  const imageData = [
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl:
        "https://bbbzdlyncfcnmzxxaubm.supabase.co/storage/v1/object/gms-api/public/banner-img/3f49feb424a78b862cc3.webp",
      backgroundColor: "#3559E0",
      title: "Game On Solution",
    },
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl: "https://bbbzdlyncfcnmzxxaubm.supabase.co/storage/v1/object/gms-api/public/banner-img/3f49feb424a78b862cc3.webp",
      backgroundColor: "#3559E0",
      title: "Click to Close",
    },
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl: "https://bbbzdlyncfcnmzxxaubm.supabase.co/storage/v1/object/gms-api/public/banner-img/3f49feb424a78b862cc3.webp",
      backgroundColor: "#3559E0",
      title: "Click to Close",
    },
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl: "https://bbbzdlyncfcnmzxxaubm.supabase.co/storage/v1/object/gms-api/public/banner-img/3f49feb424a78b862cc3.webp",
      backgroundColor: "#3559E0",
      title: "Click to Close",
    },
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl: "https://bbbzdlyncfcnmzxxaubm.supabase.co/storage/v1/object/gms-api/public/banner-img/3f49feb424a78b862cc3.webp",
      backgroundColor: "#3559E0",
      title: "Click to Close",
    },
  ];
  return (
    <div className="flex justify-center  flex-col items-center h-full  px-0    ">
      <div className="w-full    xl:h-[70vh] text-black  flex justify-end items-start flex-col gap-0 px-4  pt-20  xl:px-32 ">
        <SlideUp
          className="xl:text-[90px]  text-[40px] font-[800]   "
          text={"Our"}
        />
        <SlideUp
          className="xl:text-[90px] text-[40px] font-[800]    "
          text={"projects"}
        />
      </div>
      <div className="w-full h-64  flex gap-3  xl:px-16 px-4  ">
        <div className="w-[50%]   h-full flex justify-center items-center">
          <BsArrowDown className="h-28  font-thin w-16 text-black" />
        </div>
        <div className="w-[50%]  flex justify-center items-center h-full">
          <SlideUp
            className="xl:text-4xl text-xl    "
            text={
              "Check out some of the exciting projects we’ve completed below, and get inspired for your own!"
            }
          />
        </div>
      </div>
      <div className="h-full hidden   xl:flex  gap-10 flex-col w-full p-16 ">
        {imageData.map((data, index) => (
          <ImageCard
            key={index} // Use a unique key for each item
            description={data.description}
            category={data.category}
            className="h-screen w-full"
            imageUrl={data.imageUrl}
            backgroundColor={data.backgroundColor}
            title={data.title}
          />
        ))}
      </div>
      <div className=" xl:hidden lg:flex md:flex flex scroll-container overflow-x-auto w-screen p-4 space-x-4">
        {wholePageContent.work.projectsData.map((data, index) => {
          return (
            <HorizontalScroll key={index}>
              <div ref={ref} className={`relative ${inView?"animate-zoomIn":""}  rounded-2xl flex shadow-lg overflow-hidden w-full h-[56vh] md:h-[50vh] lg:h-[40vh]`}>
                <img
                  src="https://bbbzdlyncfcnmzxxaubm.supabase.co/storage/v1/object/gms-api/public/banner-img/3f49feb424a78b862cc3.webp"
                  alt="Two people smiling and working on a laptop"
                  className="w-full h-full object-cover"
                />
                <span className="absolute text-white h-full flex flex-col gap-52 justify-between">
                  <span className="flex gap-4 p-7 flex-col justify-start items-start">
                    <h2 className="text-4xl text-wrap w-[60%] font-bold">{data.initialText}.</h2>
                    <p className=" text-wrap text-lg font-semibold w-[60%]">
                      {" "}
                      Digital design & smart production agency
                    </p>
                  </span>
                  <span></span>
                </span>
                <span className="flex absolute bottom-6   w-full  left-12 ">
                  <Button2
                    classNames="px-7 py-2 absolute"
                    text={wholePageContent.work.buttonText}
                  />
                </span>
              </div>
            </HorizontalScroll>
          );
        })}
      </div>
    </div>
  );
};

