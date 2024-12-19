import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import useCounterStore from "../store/animateScreen";
import { Popup } from "../components/common/popup";
import MarqueeText from "../components/Animatecomponets/MarqueeText/main";
import { wholePageContent } from "../utils/pageContent";
import ParallaxHorizontalScroll from "../components/Animatecomponets/ParalexScrollHorizontal/main";
import { GetInTouch } from "./getInTouch";
import ServiceCard from "../components/Animatecomponets/ServiceCard/main";
import IndustryWeServe from "../components/Animatecomponets/WhyInventOG/industryWeServe";

export const OurServicePage = () => {
  const { setCrossTextAnimation, crossTextAnimation } = useCounterStore((state) => state);
  

  return (
    <InView
      as="div"
      id="service"
      className="h-screen"
      onChange={(inView) => {
        if (inView) {
          setCrossTextAnimation(true); // Trigger the effect when in view
        }
      }}
      threshold={0.1} // Adjust the threshold as needed
    >
      <ParallaxHorizontalScroll
        childClassName="w-screen"
        className="px-0 justify-start flex"
        width={5750}
      >
        <div className="relative h-screen w-full text-center flex justify-center items-center">
          <motion.h2 className="xl:text-[100px] text-2xl absolute font-[600]">
            INVENTOG CREATE
          </motion.h2>
          <motion.h2
            className="xl:text-[100px] text-2xl absolute font-[600]"
            initial={{ opacity: 1, y: -100 }} // Start off-screen
            animate={
              !crossTextAnimation
                ? { opacity: 1, y: 0 }
                : { opacity: 1, y: 100 } // Change to 100 to move down
            }
            transition={{ duration: 0.5 }}
          >
            INVENTOG CREATE
          </motion.h2>
          <motion.h2
            className="xl:text-[100px] text-2xl absolute font-[600]"
            initial={{ opacity: 1, y: 100 }} // Start off-screen
            animate={
              !crossTextAnimation
                ? { opacity: 0, y: 0 }
                : { opacity: 1, y: 200 } // Change to 200 to move down
            }
            transition={{ duration: 0.5 }}
          >
            INVENTOG CREATE
          </motion.h2>
        </div>
        <div className="flex xl:flex-row relative flex-col xl:h-screen h-full xl:py-28 px-5 xl:px-0 justify-center xl:w-[185%] w-full gap-8">
          {wholePageContent.whyInventog.service.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              // scrollX={scrollX} // Pass scrollY to ServiceCard
            />
          ))}
        </div>
      </ParallaxHorizontalScroll>

      {crossTextAnimation ? (
        <Popup className="h-screen w-screen"
          onClose={() => setCrossTextAnimation(false)}
        >
          <MarqueeText
            navigatePage="service"
            texts={wholePageContent.whyInventog.crossTexts}
            duration={700}
          />
        </Popup>
      ) : null}
      <IndustryWeServe/>

      <GetInTouch />

    </InView>
  );
};