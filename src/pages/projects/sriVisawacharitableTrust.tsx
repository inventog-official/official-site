import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsArrowDown } from "react-icons/bs";
import BottomToTopScreenOpenAnimation from "../../components/Animatecomponets/BottomToTopScreenOpenAnimation/main";
import { GetInTouch } from "../getInTouch";
import { useEffect } from "react";

const SriViswaCharityTrust = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
    triggerOnce: true, // Only trigger once
  });
  const imageData = [
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      backgroundColor: "#16a249",
      title: "Sri Visawa charitable Trust",
      path: "sri-visawa-charitable-trust",
    },
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      backgroundColor: "#16a249",
      title: "Click to Close",
      path: "sri-visawa-charitable-trust",
    },
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      backgroundColor: "#16a249",
      title: "Click to Close",
      path: "sri-visawa-charitable-trust",
    },
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      backgroundColor: "#16a249",
      title: "Click to Close",
      path: "sri-visawa-charitable-trust",
    },
    {
      description: "Platform for court bookings at sports facilities",
      category: ["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"],
      imageUrl:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      backgroundColor: "#16a249",
      title: "Click to Close",
      path: "sri-visawa-charitable-trust",
    },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}, []); 
  return (
    <div
      id={"SriViswaCharityTrust"}
      className="bg-white text-black border-black relative h-full"
    >
      <div
        ref={ref}
        className={`relative h-screen   shadow-lg overflow-hidden `}
      >
        <img
          src={
            "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          className="z-0"
          alt="Your Image"
          style={{
            position: "absolute",
            width: " 100%",
            height: "100%",
            objectFit: "cover",
            top: 0,
            left: 0,
          }}
        />

        <div
          className={`absolute  z-10 h-full w-full flex flex-col justify-center items-center

          `}
        >
          <span
            className={`xl:text-[90px] text-4xl text-white 
            
            `}
          >
            {"Sri Viswa CharityTrust"}
          </span>
          <span className="xl:hidden flex text-white text-xl w-[70%] text-center">
            {"Platform for court bookings at sports facilities"}
          </span>
          <div
            className={`flex justify-center xl:justify-between h-44 w-full absolute bottom-0 transition-opacity duration-300 
           
            `}
          >
            <div className="h-full hidden w-[40%] xl:flex gap-2 justify-center items-center">
              {["DESIGN", "DEVELOPMENT", "MOTION", "STRATEGY"]?.map(
                (item, index) => (
                  <p
                    key={index}
                    className="bg-white text-black shadow-lg rounded-full p-2"
                  >
                    {item}
                  </p>
                )
              )}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 2 }}
              className="flex w-[20%] justify-center items-center"
            >
              <BsArrowDown className="h-28  font-thin w-16 text-white" />
            </motion.div>
            <div className="h-full hidden  w-[40%] text-4xl text-white text-center xl:flex justify-center items-center">
              <span className="w-[90%]">
                {"Platform for court bookings at sports facilities"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full flex flex-col gap-16  py-16">
        <div className="xl:px-48 px-5  flex flex-col  ">
          <div className="xl:w-[60%] flex flex-col gap-10 w-full">
            <button className="border border-[#16a249] text-[#16a249] rounded-full px-4 py-2  w-full xl:w-[30%]">
              DESCRIPTION
            </button>
            <p className="text-2xl leading-relaxed">
              Case 3D is a{" "}
              <span className="font-bold text-[#16a249]">proptech company</span>{" "}
              from Serbia, Novi Sad, which provides technology that makes home
              buying intelligent and seamless. We were asked to create a new{" "}
              <span className="font-bold text-[#16a249]">
                presentation website
              </span>
              . From the start of the project, we knew we wanted to create an
              absolutely stunning website. Our client’s willingness to give us
              total creative freedom was crucial, and boosted our motivation to
              produce something unseen at the time.
            </p>
            <div className="flex justify-end mt-4">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="xl:px-16 px-5  flex-col flex gap-10 justify-center items-center">
          {imageData.map((data, index) => (
            <motion.div
              key={index}
              className="flex xl:h-[90vh]  h-[23vh] justify-center items-center w-full xl:w-[80%]" // Center the image card
            >
              <BottomToTopScreenOpenAnimation
                className="h-full w-full shadow-xl rounded-3xl"
                backgroundColor={data.backgroundColor}
                imageUrl={data.imageUrl}
              />
            </motion.div>
          ))}
        </div>
        <BottomToTopScreenOpenAnimation
          className="xl:h-screen h-[50%] w-full"
          backgroundColor={"#0000"}
          imageUrl={
            "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <div className="xl:px-36 px-5  flex flex-col  ">
          <div className="xl:w-[60%] flex flex-col gap-10 w-full">
            <button className="border border-[#16a249] text-[#16a249] rounded-full px-4 py-2  w-full xl:w-[30%]">
              DESCRIPTION
            </button>
            <p className="text-2xl leading-relaxed">
              Case 3D is a{" "}
              <span className="font-bold text-[#16a249]">proptech company</span>{" "}
              from Serbia, Novi Sad, which provides technology that makes home
              buying intelligent and seamless. We were asked to create a new{" "}
              <span className="font-bold text-[#16a249]">
                presentation website
              </span>
              . From the start of the project, we knew we wanted to create an
              absolutely stunning website. Our client’s willingness to give us
              total creative freedom was crucial, and boosted our motivation to
              produce something unseen at the time.
            </p>
            <div className="flex justify-end mt-4">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="xl:px-16 px-5  flex-col flex gap-14 justify-center items-center">
          {imageData.map((data, index) => (
            <motion.div
              key={index}
              className="flex xl:h-[90vh]  h-[23vh] justify-center items-center w-full xl:w-[80%]" // Center the image card
            >
              <BottomToTopScreenOpenAnimation
                className="h-full w-full shadow-xl rounded-3xl"
                backgroundColor={data.backgroundColor}
                imageUrl={data.imageUrl}
              />
            </motion.div>
          ))}
        </div>
        <BottomToTopScreenOpenAnimation
          className="xl:h-screen h-[50%] w-full"
          backgroundColor={"#16a249"}
          imageUrl={
            "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />

        <div className="xl:px-36 px-5  flex flex-col  ">
          <div className="xl:w-[60%] flex flex-col gap-10 w-full">
            <button className="border border-[#16a249] text-[#16a249] rounded-full px-4 py-2  w-full xl:w-[30%]">
              DESCRIPTION
            </button>
            <p className="text-2xl leading-relaxed">
              Case 3D is a{" "}
              <span className="font-bold text-[#16a249]">proptech company</span>{" "}
              from Serbia, Novi Sad, which provides technology that makes home
              buying intelligent and seamless. We were asked to create a new{" "}
              <span className="font-bold text-[#16a249]">
                presentation website
              </span>
              . From the start of the project, we knew we wanted to create an
              absolutely stunning website. Our client’s willingness to give us
              total creative freedom was crucial, and boosted our motivation to
              produce something unseen at the time.
            </p>
            <div className="flex justify-end mt-4">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-start justify-start xl:px-36 px-5">
          <button className="border border-[#16a249] text-[#16a249] rounded-full px-4 py-2  w-[50%] xl:w-[15%]">
            NEXT WORK{" "}
          </button>
        </div>
        <div className="xl:px-5 px-5 w-full  flex-col flex gap-14 justify-center items-center">
          <motion.div
            className="flex xl:h-[110vh]  h-[23vh] justify-center items-center w-full xl:w-[90%]" // Center the image card
          >
            <BottomToTopScreenOpenAnimation
              className=" h-full w-full rounded-2xl"
              backgroundColor={"#16a249"}
              imageUrl={
                "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </motion.div>
        </div>
      </div>

      <GetInTouch bgColor="bg-[#16a249]" />
    </div>
  );
};

export default SriViswaCharityTrust;