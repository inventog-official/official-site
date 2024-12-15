
import useCounterStore from "../../store/animateScreen";
import Button1 from "../common/button1";
import MenuComponent from "./menuComponent";
import {useNavigate} from "react-router-dom"
const NavBar:React.FC<{bgColor:string,bgColorForMenu:string}> = ({bgColor,bgColorForMenu}) => {
  const navigate =  useNavigate()
  const {setActive,setHovered} = useCounterStore((state) => state)
  
  return (
    <div className={`z-40  bg-white xl:bg-transparent transition-all duration-500  shadow-xl xl:shadow-none fixed ${bgColor} w-full  py-2 xl:py-9 flex items-center  justify-center px-3 md:px-16`}>
      <div className="justify-between   w-full flex items-center">
        <div className="h-full w-full flex   justify-start items-start">
          <span
           onMouseEnter={() =>setHovered(true)}
           onMouseLeave={() => setHovered(false)}
          onClick={() =>{
            setActive()
            navigate('/')
          }} className=" h-16 w-16 cursor-pointer flex shadow-lg justify-center items-center text-white text-4xl font-bold font-serif  rounded-full uppercase bg-black ">
            I
          </span>
       <MenuComponent bgColor_={bgColorForMenu}/>
        </div>
       <Button1 />
      </div>
    </div>
  );
};

export default NavBar;
