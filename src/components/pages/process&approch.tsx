import { useNavigate } from "react-router-dom";
import useCounterStore from "../../store/animateScreen";
import CardList, {
  Card,
} from "../Animatecomponets/AnimateCardRightToCenter/main";
import AnimatedText from "../Animatecomponets/AnimateText/main";
import SlideUp from "../Animatecomponets/SlideUpTextAnimation/main";

const ProcessAndApproach = () => {

  const navigate = useNavigate()
  const { setHovered,setActive, setLinkHovered } = useCounterStore();

  return (
    <div className="h-full flex flex-col justify-center items-center overflow-hidden   bg-transparent ">
      <span className="xl:py-64 py-32 animate-slideUp   flex   justify-center items-start w-full ">
        <span className="w-[50%] px-20">
          <p className="   xl:text-[100px] text-5xl font-[900]  text-white text-wrap text-center ">
            <SlideUp text={"Process & approach"} />
          </p>
        </span>
        <div className="w-[50%]"></div>
      </span>

      <div className=" flex flex-col w-full p-0 xl:p-10  gap-4 h-full ">
        <CardList>
          {[1, 2, 3, 4].map((card, index) => (
            <Card key={index}>
              {
                <button

                    onClick={() => {
                    setActive();
                      navigate(`/process`);
                  }}
                  onMouseEnter={() => {
                    setHovered(true);
                    setLinkHovered(true);
                  }}
                  onMouseLeave={() => {
                    setLinkHovered(false);
                    setHovered(false);
                  }}
                  className="relative group transition-all duration-200 border border-primary  w-full h-32 xl:h-72   overflow-hidden rounded-full p-[1px] focus:outline-none"
                >
                  <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-primary transition-all duration-200 group-hover:w-full"></span>
                  <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-primary transition-all duration-200 group-hover:h-full"></span>
                  <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-primary transition-all duration-200 group-hover:w-full"></span>
                  <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-primary transition-all duration-200 group-hover:h-full"></span>
                  <span className="flex  justify-items-center  h-full w-full cursor-pointer items-center justify-center rounded-full bg-transparent text-sm font-medium text-white backdrop-blur-3xl gap-32 px-32 ">
                    <div className="flex items-center justify-center w-[30%] space-x-4">
                      <span className="flex gap-5  items-center justify-center  ">
                        <span className="xl:text-[100px] text-5xl font-bold">
                          {" "}
                          {card}.
                        </span>
                        <span className="text-5xl text-center">Discover</span>
                      </span>
                    </div>
                    <div className=" hidden xl:flex items-start w-[70%] space-x-4 ">
                      <p className="text-sm max-w-xs text-left">
                        At this point we get to know your business, your goals
                        and your target audience. We conduct research and
                        analysis to gain insights that will be critical to the
                        rest of the project.
                      </p>
                    </div>{" "}
                  </span>
                </button>
              }
            </Card>
          ))}
        </CardList>
      </div>
    <div className="flex flex-col py-10 items-center  px-10 justify-center text-center">
    <span className="xl:text-[70px] text-white text-[40px] font-[800]   ">
        <SlideUp text={"For over a"} />
      </span>
      

<span className="flex ">
          <AnimatedText
            text="decade"
            className="xl:text-[70px]   justify-start items-start text-[40px] font-[800]   "
          />
        </span>
      
      <span className="xl:text-[70px] text-[40px] font-[800] text-white w-full text-center xl:px-32 px-5 ">

        <SlideUp
          text={"we've been delivering epic user experiences that will amaze  you."}
        />
        {/* <SlideUp text={"  you."} /> */}
      </span>
    </div>
   
    </div>
  );
};

export default ProcessAndApproach;
