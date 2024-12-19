
import ParallaxHorizontalScroll from '../components/Animatecomponets/ParalexScrollHorizontal/main';
import { About } from './about';

const Test = () => {

  // Define the scale transformation based on scroll position

  return (
    <div className=''>
      
      <ParallaxHorizontalScroll
      scaleRange={[0.2,1]}
        childClassName="w-screen"
        className="px-0 justify-start flex"
        width={1440}
      >
        <div className='h-screen w-full'>
          <About />
        </div>
        <div
          className='h-screen w-full bg-red-50 flex justify-center items-center'
        >
          <img
          className='rounded-[80px]'
            // Start with a smaller scale
            src="https://bbbzdlyncfcnmzxxaubm.supabase.co/storage/v1/object/gms-api/public/banner-img/3f49feb424a78b862cc3.webp" // Replace with your image URL
            alt="Animated"
          />
        </div>
        
      </ParallaxHorizontalScroll>
      
    </div>
  );
};

export default Test;