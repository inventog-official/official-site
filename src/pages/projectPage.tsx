import { BsArrowDown } from "react-icons/bs";
import SlideUp from "../components/Animatecomponets/SlideUpTextAnimation/main";
import HorizontalScroll from "../components/Animatecomponets/HorizontalScrollAnimation/main";
import Button2 from "../components/common/button2";
import { wholePageContent } from "../utils/pageContent";
import { useInView } from "react-intersection-observer";
import ProjectGallery from "../components/Animatecomponets/ImageScreenAnimation/projectGallery";

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
      backgroundColor: "#1D4ED8",
      title: "Game On Solution",
      path:"game-on-solution"
    },
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      backgroundColor: "#1D4ED8",
      title: "Sri Viswa charitable Trust",
      path: "sri-viswa-charitable-trust",
    },
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl:
        "https://bbbzdlyncfcnmzxxaubm.supabase.co/storage/v1/object/gms-api/public/banner-img/3f49feb424a78b862cc3.webp",
      backgroundColor: "#1D4ED8",
      title: "Click to Close",
      path:"game-on-solution"

    },
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl:
        "https://bbbzdlyncfcnmzxxaubm.supabase.co/storage/v1/object/gms-api/public/banner-img/3f49feb424a78b862cc3.webp",
      backgroundColor: "#1D4ED8",
      title: "Click to Close",
      path:"game-on-solution"

    },
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl:
        "https://bbbzdlyncfcnmzxxaubm.supabase.co/storage/v1/object/gms-api/public/banner-img/3f49feb424a78b862cc3.webp",
      backgroundColor: "#1D4ED8",
      title: "Click to Close",
      path:"game-on-solution"

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
      <ProjectGallery  imageData={imageData}/>
      {/* <div className="h-full hidden   xl:flex  gap-10 flex-col w-full p-16 ">
        {imageData.map((data, index) => (
          <div
            ref={(el) => (imageRefs.current[index] = el)} // Store reference to each image card
            key={index}
            onClick={() => handleImageClick(index)}
          >
            <ImageCard
              description={data.description}
              category={data.category}
              className="h-screen w-full cursor-pointer"
              imageUrl={data.imageUrl}
              backgroundColor={data.backgroundColor}
              title={data.title}
            />
          </div>
        ))}
      </div> */}
      <div className=" xl:hidden lg:flex md:flex flex scroll-container overflow-x-auto w-screen p-4 space-x-4">
        {wholePageContent.work.projectsData.map((data, index) => {
          return (
            <HorizontalScroll key={index}>
              <div
                ref={ref}
                className={`relative ${
                  inView ? "animate-zoomIn" : ""
                }  rounded-2xl flex shadow-lg overflow-hidden w-full h-[56vh] md:h-[50vh] lg:h-[40vh]`}
              >
                <img
                  src="https://bbbzdlyncfcnmzxxaubm.supabase.co/storage/v1/object/gms-api/public/banner-img/3f49feb424a78b862cc3.webp"
                  alt="Two people smiling and working on a laptop"
                  className="w-full h-full object-cover"
                />
                <span className="absolute text-white h-full flex flex-col gap-52 justify-between">
                  <span className="flex gap-4 p-7 flex-col justify-start items-start">
                    <h2 className="text-4xl text-wrap w-[60%] font-bold">
                      {data.initialText}.
                    </h2>
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
