import Image from "next/image";
import LeftIntro from "./sections/LeftIntro";
import Backdrop from "./components/Backdrop";
import RightSection from "./sections/RightSection";
import Footer from "./sections/Footer";
import { links, heroData, experiencesData, projectsData, contactData, educationsData, skillsData } from "@/lib/data";
import MyIntro from "./sections/MyIntro";
import OneScreen from "./sections/OneScreen";
import SlidingPanel from "./components/SlidingPanel";

export default function Home() {
  const rightSectionData = {
    heroData,
    experiencesData,
    educationsData,
    projectsData,
    contactData,
    skillsData,
  };
  return (
    <main className="overflow-x-hidden">
      <Backdrop />
      <SlidingPanel />

      {/* Mobile */}
      <div className="lg:hidden h-screen w-full overflow-y-auto overflow-x-hidden">
        <div className="mx-auto">
          <OneScreen data={rightSectionData}/>
        </div>
        <Footer contactData={contactData} />
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex h-screen">
        <div className="w-2/5 h-full overflow-y-hidden">
          <LeftIntro data={links} />
        </div>
        <div className="w-3/5 h-full overflow-y-auto overflow-x-hidden">
          <RightSection data={rightSectionData}/>
          <Footer contactData={contactData} />
        </div>
      </div>

    </main>
  );
}
