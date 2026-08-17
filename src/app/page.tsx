import About from "@/components/pages/home/about";
import Banner from "@/components/pages/home/banner";
import Blogs from "@/components/pages/home/blogs";
import Experiences from "@/components/pages/home/experiences";
import NewsTicker from "@/components/pages/home/newsTicker";
import ProjectIdea from "@/components/pages/home/projectIdea";
import Projects from "@/components/pages/home/projects";
import Qualifications from "@/components/pages/home/qualifications";
import Questions from "@/components/pages/home/questions";
import Services from "@/components/pages/home/services";
import SoftSkills from "@/components/pages/home/softSkills";
import TechnicalSkills from "@/components/pages/home/technicalSkills";
import Testimonials from "@/components/pages/home/testimonials";

export default function Home() {
  return (
    <>
      <Banner />
      <NewsTicker />
      <About />
      <Services />
      <Projects />
      <TechnicalSkills />
      <SoftSkills />
      <ProjectIdea />
      <Testimonials />
      <Experiences />
      <Qualifications />
      <Questions />
      <Blogs />
    </>
  );
}
