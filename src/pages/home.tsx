import { useState, useEffect } from "react";
import CircleAnimation from "../components/Animatecomponets/splashSCcreen/main";
import TextAnimation from "../components/Animatecomponets/textAnimation/main";
import ColosseumComponent from "../components/imageCarousel/main";
import { wholePageContent } from "../utils/pageContent";


export const Home = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Set a timer to show the main content after the circle animation completes
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 200); // Adjust this duration to match your CircleAnimation duration

        return () => clearTimeout(timer);
    }, []);

    return (
        <div id='home' className={`relative md:h-[120vh] sm:h-[140vh] lg:h-screen  xl:h-screen`}>
                <div className='absolute   h-full w-full' >
                <CircleAnimation />
                </div>
            {showContent && (
                <div className="flex relative z-0 flex-col lg:flex-col  gap-10 xl:flex-row justify-center items-center w-full min-h-full pt-32 px-0 lg:px-1 md:px-10 xl:px-28">
                    <div className='xl:w-[65%] w-full md:px-0 px-6 text-md'>
                        <span className='flex  justify-start flex-col items-start font-serif w-full overflow-hidden'>
                            <span className='md:text-[90px] text-5xl text-black font-bold'>
                                {wholePageContent.home.text1}
                            </span>
                            <TextAnimation texts={wholePageContent.home.animateText} />
                            <span className='md:text-[90px] text-5xl text-black font-bold'>
                                {wholePageContent.home.text2}
                            </span>
                        </span>
                    </div>
                    <div className='xl:w-[35%] w-full h-full xl:px-0 px-3'>
                        <ColosseumComponent />
                    </div>
                </div>
            )}
        </div>
    );
}

