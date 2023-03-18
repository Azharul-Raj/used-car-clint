import Advertise from "./Advertise/Advertise";
import Categories from "./Categories/Categories";
import Content from "./Content/Content";
import HeroSection from "./HeroSection/HeroSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Categories />
      <Advertise />
      <Content />
    </>
  );
};

export default HomePage;
