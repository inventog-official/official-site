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
import ImageCard from "./components/Animatecomponets/ImageScreenAnimation/main";
import WhyInventOG from "./components/Animatecomponets/WhyInventOG/main";

function App() {
  const [showContent, setShowContent] = useState(false);
  const { active, setActive, deActive } = useCounterStore((state) => state);

  const sections = [
    { id: "home", color: "bg-white" },
    { id: "about", color: "bg-white" },
    { id: "service", color: "bg-white" },
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
              <div></div>
              <Routes>
                <Route
                  path="/"
                  element={
                    <div
                      className={`flex flex-col xl:gap-2 h-full ${bgColor} gap-6 transition-all duration-500`}
                    >
                      <Home />
                      <About />
                      {/* <Test /> */}

                      <WhyInventOG />
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
                    <div className=" bg-green-400 h-screen">
                      <ImageCard
                        openScreenEnable={false}
                        description={
                          "Platform for court bookings at sports facilities"
                        }
                        category={[
                          "DESIGN",
                          "DEVELOPMENT",
                          "MOTION",
                          "STRATEGY",
                        ]}
                        className={`h-full w-full cursor-pointer`}
                        imageUrl={
                          "https://bbbzdlyncfcnmzxxaubm.supabase.co/storage/v1/object/gms-api/public/banner-img/3f49feb424a78b862cc3.webp"
                        }
                        backgroundColor={"#1D4ED8"}
                        title={"Game On Solution"}
                      />
                    </div>
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
