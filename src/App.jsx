import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="bg-[#977ef2] h-auto w-full overflow-hidden">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
