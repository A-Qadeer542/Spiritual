import "./App.css";
import SectionOne from "./components/homePage/sectionOne";
import SectionTwo from "./components/homePage/sectionTwo";
import SectionThree from "./components/homePage/sectionThree";
import SectionFour from "./components/homePage/sectionFour";
import SectionFive from "./components/homePage/sectionFive";
import Footer from "./components/homePage/footer";

function App() {
  return (
    <div className="absolute ">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </div>
  );
}

export default App;
