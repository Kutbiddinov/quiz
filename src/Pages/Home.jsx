import { Header } from "../Components/Header";
import { Sectionone } from "../Components/Sectionone";
import { SectionTwo } from "../Components/SectionTwo";
import { Hero } from "../Components/Hero";
import { SectionThree } from "../Components/SectionThree";
import { SectionFour } from "../Components/SectionFour";

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Sectionone />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </main>
    </>
  );
}
