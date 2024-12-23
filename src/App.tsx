import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/main";
import CursorFollower from "./components/CurssorFollower/main";
import LogoAnimation from "./components/Animatecomponets/LogoAnimation/main";
import AnimatedPage from "./components/Animatecomponets/AnimatePage/main";
import useCounterStore from "./store/animateScreen";
import useScrollBackgroundColor from "./hook/useScrollBgColor";
import {
  Home,
  About,
  WorkHeader,
  Work,
  ProcessAndApproach,
  GetInTouch,
  ProjectPage,
  ProcessPage,
  TeamPage,
  ContactPage,
  OurServicePage,
} from "./pages";
import StickyCards from "./components/Animatecomponets/StickyParallaxCardAnimation/main";
import GameOnSolution from "./pages/projects/gameOnSolution";

function App() {
  const [showContent, setShowContent] = useState(false);
  const { active, setActive, deActive } = useCounterStore((state) => state);

  const sections = [
    { id: "home", color: "bg-white" },
    { id: "about", color: "bg-white" },
    { id: "service", color: "bg-white" },
    
    { id: "WhyInventOGBefore", color: "bg-gray-950" },
    { id: "WhyInventOGAfter", color: "bg-gray-950" },
    { id: "work-header", color: "bg-gray-100" },
    { id: "work", color: "bg-gray-200" },
    { id: "process", color: "bg-gray-950" },

  ];
  const nav1 = [
    { id: "home", color: "bg-primary" },
    { id: "about", color: "bg-primary" },
    { id: "work-header", color: "bg-primary" },
    { id: "work", color: "bg-primary" },
    { id: "process", color: "bg-primary" },
    { id: "WhyInventOGBefore", color: "bg-white" },
    { id: "WhyInventOGAfter", color: "bg-white" },
    { id: "getInTouch", color: "bg-white" },
    { id: "gameOnSolution", color: "bg-[#febc12]" },

  ];
  const nav2 = [
    { id: "home", color: "bg-transparent" },
    { id: "getInTouch", color: "bg-transparent" },
    

  ];
  const bgColor = useScrollBackgroundColor(sections);
  const navIconBgColor = useScrollBackgroundColor(nav1);
  const navBgColor = useScrollBackgroundColor(nav2);

  return (
    <Router>
      {active ? (
        <AnimatedPage colors={["#1D4ED8"]} duration={1900} />
      ) : (
        <div className="h-full bg-white">
          {showContent ? (
            <>
              <CursorFollower />
              <NavBar bgColor={navBgColor} bgColorForMenu={navIconBgColor} />

              <Routes>
                <Route
                  path="/"
                  element={
                    <div
                      className={`flex flex-col xl:gap-2 h-full ${bgColor} gap-6 transition-all duration-500`}
                    >
                      <Home />
                      <About />

                      <div className="h-20 text-transparent" id="WhyInventOGBefore">
                        sssss
                      </div>

                      <StickyCards />
                      <div className="h-40 text-transparent" id="WhyInventOGAfter">
                        sssss
                      </div>
                      {/* <WhyInventOG /> */}
                      <div>
                        <div id="work-header">
                          <WorkHeader />
                        </div>{" "}
                        <Work />
                      </div>
                      <div id="process">
                        <ProcessAndApproach />
                      </div>
                      <OurServicePage />

                    </div>
                  }
                />
                <Route
                  path="/projects"
                  element={
                    <div className=" bg-white">
                      <ProjectPage />
                      <GetInTouch />
                    </div>
                  }
                />
                <Route
                  path="/process"
                  element={
                    <div className=" bg-black">
                      <ProcessPage />
                      <GetInTouch />
                    </div>
                  }
                />
                <Route
                  path="/team"
                  element={
                    <div className="h-screen bg-white">
                      <TeamPage />
                    </div>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <div className=" bg-white">
                      <ContactPage />
                    </div>
                  }
                />

                <Route
                  path="/projects/game-on-solution"
                  element={
                  <GameOnSolution/>
                  }
                />
              </Routes>
            </>
          ) : (
            <LogoAnimation
              onComplete={() => {
                window.location.pathname != "/" ? setActive() : deActive();
                setShowContent(true);
              }}
            />
          )}
        </div>
      )}
    </Router>
  );
}

export default App;
