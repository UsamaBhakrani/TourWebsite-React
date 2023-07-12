import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About";
import GivenService from "./components/GivenService";
import Tours from "./components/Tours";
import Footer from "./components/Footer";
import { pageLinks, socialLinks } from "./Data";
import "./styles.css";

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <GivenService />
      <Tours />
      <Footer value={pageLinks} social={socialLinks} />
    </div>
  );
};

export default App;
