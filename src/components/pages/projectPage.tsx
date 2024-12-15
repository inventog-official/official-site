import ImageCard from "../Animatecomponets/ImageScreenAnimation/main";
import SlideUp from "../Animatecomponets/SlideUpTextAnimation/main";
import { BsArrowDown } from "react-icons/bs";

const ProjectPage = () => {
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
      <div className="w-full    xl:h-[70vh] text-black  flex justify-end items-start flex-col gap-0 px-4   xl:px-32 ">
        <SlideUp
          className="xl:text-[90px]  text-[40px] font-[800]   "
          text={"Our"}
        />
        <SlideUp
          className="xl:text-[90px] text-[40px] font-[800]    "
          text={"projects"}
        />
      </div>
      <div className="w-full h-64  flex gap-3 px-16  ">
        <div className="w-[50%]   h-full flex justify-center items-center">
          <BsArrowDown className="h-28  font-thin w-16 text-black" />
        </div>
        <div className="w-[50%] text-4xl  flex justify-center items-center h-full">
          <SlideUp
            className="xl:text-4xl text-2xl     "
            text={
              "Check out some of the exciting projects we’ve completed below, and get inspired for your own!"
            }
          />
        </div>
      </div>
      <div className="h-full flex gap-10 flex-col w-full p-16 ">
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
    </div>
  );
};

export default ProjectPage;
