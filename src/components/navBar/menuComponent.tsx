import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { wholePageContent } from "../../utils/pageContent";
import useCounterStore from "../../store/animateScreen";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const MenuComponent:React.FC<{bgColor_:string}> = ({bgColor_}) => {
  const navigate = useNavigate();

  const { setHovered,setActive} = useCounterStore();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [bgColor, setBgColor] = useState(wholePageContent.themeColor.primary);

  const handleScroll = () => {
    if (isExpanded) {
      setIsExiting(true);
      setTimeout(() => {
        setIsExpanded(false);
        setIsExiting(false);
        setBgColor(bgColor);
      }, 1000);
    }
  };
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isExpanded]);

  const menuOptions = ["Home","Projects", "Process", "Team", "Contact"];

  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(() => {
        setBgColor("#ffffff");
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [isExpanded]);
  return (
    <div className="transition-all duration-100">
      {isExpanded ? (
        <div>
          {/* Mobile Menu */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full  md:hidden h-full bg-primary shadow-lg z-50 flex-col justify-center items-center  p-4"
          >
            <button
              onClick={() => {
                setIsExiting(true);
                setTimeout(() => {
                  setIsExpanded(false);
                  setIsExiting(false);
                }, 500);
              }}
              className="w-full justify-end flex text-white rounded"
            >
              <MdClose className="h-10 w-10" />
            </button>
            {menuOptions.map((option, index) => (
              <motion.div
              onClick={() => {
                setActive();
                  navigate(`/${option.toLowerCase()}`);
              }} 
                key={option}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                }}
                className="font-bold  flex flex-col items-center justify-center  py-4   text-white hover:text-black cursor-pointer mb-10 text-2xl relative group"
              >
                <span   className="relative z-10 ">{option}</span>
                <span className="absolute left-0  h-full rounded-full z-0 w-0 bg-white transition-all duration-300 ease-in-out origin-left group-hover:w-[100%]" />
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ width: 0, backgroundColor: bgColor_ }}
            animate={{
              width: isExiting ? 10 : "auto",
              backgroundColor: isExiting
                ? wholePageContent.themeColor.primary
                : bgColor,
            }}
            exit={{ width: 0, backgroundColor: "#ffffff" }}
            transition={{ duration: isExiting ? 0.6 : 0.5 }}
            className={`overflow-hidden ${
              isExiting ? "px-8" : "px-14"
            } hidden xl:flex py-4 gap-12 shadow-lg items-center justify-center whitespace-nowrap rounded-full text-left`}
            style={{ transformOrigin: "left", backgroundColor: bgColor_ }}
          >
            {menuOptions.map((option, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? 10 : 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.2,
                  delay: !isExiting ? 1 + index * 0.1 : 0,
                }}
                className="font-bold group relative text-black cursor-pointer mb-2"
              >
                <span
                  onClick={() => {
                    setActive();
                    option=="Home"?navigate('/'):navigate(`/${option.toLowerCase()}`);
                  }}
                  className="relative z-10"
                >
                  {option}
                </span>
                <span className="absolute left-0 bottom-1 h-2 rounded-full z-0 w-0 bg-primary transition-all duration-300 ease-in-out origin-left group-hover:w-full" />
              </motion.span>
            ))}
          </motion.div>
        </div>
      ) : (
        <span
        onMouseEnter={() =>setHovered(true)}
        onMouseLeave={() => setHovered(false)}
          onClick={() => setIsExpanded(true)}
          className={`h-16 w-16 rounded-full transition-all duration-500 shadow-lg cursor-pointer flex justify-center  items-center ${bgColor_} `}
        >
          <RxHamburgerMenu className="text-gray-800 font-thin h-9 w-10" />
        </span>
      )}
    </div>
  );
};

export default MenuComponent;
