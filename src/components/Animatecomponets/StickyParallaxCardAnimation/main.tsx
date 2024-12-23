import { useScroll, motion, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Card from './card';
import { FaLaptopCode, FaCogs, FaSearch, FaRegClock, FaShieldAlt, FaUsers } from 'react-icons/fa';

const projects = [
    {
      icon: <FaLaptopCode className="text-indigo-500 h-28 w-28" />,
      title: "Cutting-Edge Technology",
      color: "#e2fdff", // Light Blue
      description:
        "We leverage the latest tools and frameworks to build solutions that are scalable, secure, and future-ready.",
    },
    {
      icon: <FaCogs className="text-green-500 h-28 w-28" />,
      title: "Tailored Solutions",
      color: "#bfd7ff", // Dark Blue
      description:
        "Our services are customized to meet your specific business objectives.",
    },
    {
      icon: <FaSearch className="text-red-500 h-28 w-28" />,
      title: "SEO-Optimized Development",
      color: "#9bb1ff", // Light Blue
      description:
        "Websites and apps designed to rank higher on search engines, driving organic traffic and visibility.",
    },
    {
      icon: <FaRegClock className="text-yellow-500 h-28 w-28" />,
      title: "Timely Delivery",
      color: "#788bff", // Dark Blue
      description:
        "Your time is valuable. We stick to deadlines without compromising on quality.",
    },
    {
      icon: <FaShieldAlt className="text-blue-500 h-28 w-28" />,
      title: "Enhanced Security",
      color: "#5465ff", // Light Blue
      description:
        "Our solutions are built with industry-leading security measures to protect your data and users.",
    },
    {
      icon: <FaUsers className="text-purple-500 h-28 w-28" />,
      title: "User -Centric Design",
      color: "#3559E0", // Dark Blue
      description:
        "Delivering intuitive and engaging user experiences tailored to your audience.",
    },
  ];

export default function StickyCards() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const width = useTransform(scrollYProgress, [0, 0.2], ['100%', '30%']);
  const radiusTop = useTransform(scrollYProgress, [0, 0.2], ['0%', '400px']);
  const radiusBottom = useTransform(scrollYProgress, [0, 0.2], ['0%', '300px']);

  return (
    <main  ref={container} className="relative w-full    h-[710vh]">
      {/* "Why Inventog" Section */}
      <motion.div
        className="h-[100vh] sticky top-2 px-5 bg-primary flex justify-center items-center"
        style={{
          width,
          borderTopRightRadius: radiusTop,
          borderBottomRightRadius: radiusBottom,
        }}
      >
        <p className="xl:text-[70px] text-2xl leading-relaxed text-white font-[900]">Why Inventog?</p>
      </motion.div>

      {/* Projects Section */}
      <div className="flex flex-col h-[600vh] justify-end items-end xl:items-end">
        {projects.map((project, i) => {
          const cardX = useTransform(scrollYProgress, [i * 0.15, (i + 1) * 0.15], ['-100%', '0%']);
          const cardOpacity = useTransform(scrollYProgress, [i * 0.15, (i + 1) * 0.15], [0, 1]);
          const targetScale = 1 - ((projects.length - i) * 0.05);
          const isVisible = scrollYProgress.get() > (i * 0.20);
          return (
            <Card
              style={{ x: cardX, opacity: cardOpacity }}
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.15, 1]}
              targetScale={targetScale}
              className={`card ${isVisible ? 'visible' : ''}`} // Apply the visible class
            />
          );
        })}
      </div>
    </main>
  );
}