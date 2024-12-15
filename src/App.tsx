import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import NavBar from "./components/navBar/main";
import CursorFollower from "./components/CurssorFollower/main";
import LogoAnimation from "./components/Animatecomponets/LogoAnimation/main";
import AnimatedPage from "./components/Animatecomponets/AnimatePage/main";
import useCounterStore from "./store/animateScreen";
import About from "./components/pages/about";
import Work from "./components/pages/work";
import ProcessAndApproach from "./components/pages/process&approch";
import GetInTouch from "./components/pages/getInTouch";
import WorkHeader from "./components/pages/workHeader";
import useScrollBackgroundColor from "./hook/useScrollBgColor";
import ProcessPage from "./components/pages/processPage";
import TeamPage from "./components/pages/teamPage";
import ContactPage from "./components/pages/contactPage";
import ProjectPage from "./components/pages/projectPage";

function App() {
  const [showContent, setShowContent] = useState(false);
  const { active, setActive, deActive } = useCounterStore((state) => state);
  const sections = [
    { id: "home", color: "bg-white" },
    { id: "about", color: "bg-white" },
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
    { id: "getInTouch", color: "bg-white" },
  ];const nav2 = [
    { id: "home", color: "bg-transparent" },
    { id: "getInTouch", color: "bg-transparent" },
  ];
  const bgColor = useScrollBackgroundColor(sections);
  const navIconBgColor = useScrollBackgroundColor(nav1);
  const navBgColor = useScrollBackgroundColor(nav2);
  return (
    <Router>
      {active ? (
  <AnimatedPage
  colors = {[ '#3559E0']}
    duration={1900}
/>      ) : (
        <div className="h-full bg-white">
          {showContent ? (
            <>
              <CursorFollower />
              <NavBar bgColor={navBgColor} bgColorForMenu={navIconBgColor}/>
              <Routes>
                <Route
                  path="/"
                  element={
                    <div
                      className={`flex flex-col xl:gap-2 ${bgColor} gap-6 transition-all duration-500`}
                    >
                      <Home />
                      <About />

                      <div>
                        <div id="work-header">
                          <WorkHeader />
                        </div>{" "}
                        <Work />
                      </div>
                      <div id="process">
                        <ProcessAndApproach />
                      </div>
                      <GetInTouch />
                    </div>
                  }
                />
                <Route
                  path="/projects"
                  element={<div className=" bg-white">
                    <ProjectPage/>
                    <GetInTouch/>
                  </div>}
                />
                <Route
                  path="/process"
                  element={<div className=" bg-black">
                    <ProcessPage/>
                    <GetInTouch />
                  </div>}
                />
                <Route
                  path="/team"
                  element={<div className="h-screen bg-white">
                    <TeamPage/>
                  </div>}
                />
                <Route
                  path="/contact"
                  element={<div className=" bg-white"><ContactPage/></div>}
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
