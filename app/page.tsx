import Image from "next/image";
import LeftIntro from "./sections/LeftIntro";
import Backdrop from "./components/Backdrop";
import RightSection from "./sections/RightSection";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import { links, heroData, experiencesData, projectsData, contactData, educationsData } from "@/lib/data";

export default function Home() {
  const rightSectionData = {
    heroData,
    experiencesData,
    educationsData,
    projectsData,
    contactData,
  };
  return (
    <main className="overflow-x-hidden">
      <Backdrop />
      <div className="flex h-screen">
        <div className="w-2/5 px-[50px] h-full overflow-y-hidden pt-1">
          <LeftIntro data={links} contactData={contactData} />
        </div>
        <div className="w-3/5 px-[50px] h-full overflow-y-auto overflow-x-hidden">
          <RightSection data={rightSectionData}/>
        </div>
      </div>
    </main>
  );
}
