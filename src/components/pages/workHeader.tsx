import { wholePageContent } from '../../utils/pageContent'
import Button2 from '../common/button2'
import useOnScreen from '../../hook/useOnScreen';
import SlideUp from '../Animatecomponets/SlideUpTextAnimation/main';

const WorkHeader = () => {
    const [aboutRef, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div ref={aboutRef} className="xl:py-32 py-16 flex  flex-col md:flex-row justify-between w-full px-7 xl:px-32">
    <p className="w-full  flex h-full  justify-between xl:items-start xl:justify-start py-0 xl:py-2">
      <span
        className={`text-5xl md:text-[90px] font-serif ${
          isVisible ? "animate-slideIn" : ""
        }`}
      >
        <SlideUp text={wholePageContent.work.heading}/>
        
      </span>
      <span className='xl:hidden animate-slideIn md:flex lg:flex '>
      <button className=' flex   justify-center gap-5 text-white  items-center mx-auto shadow-xl text-lg bg-primary backdrop-blur-md lg:font-semibold isolation-auto border-primary before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-gray-50 hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-3 font-thin py-3 overflow-hidden  rounded-full group  '>
         <svg
              className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-primary text-gray-50 ease-linear duration-300 rounded-full border border-white group-hover:border-none p-2 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-white "
              ></path>
            </svg></button>
      </span>
    </p>
    <div
      className={` hidden xl:flex h-full items-end justify-end w-full mt-4 md:mt-0 ${
        isVisible ? "animate-slideIn" : ""
      }`}
    >
      <Button2 classNames='py-3 px-12' text={wholePageContent.work.buttonText} />
    </div>
  </div>
  )
}

export default WorkHeader
