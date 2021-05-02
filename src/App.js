import "./App.css";
import MyCarousal from "./components/my-carousal/my-carousal";
import MyNavbar from "./components/my-navbar/mynavbar";
import TitleMessage from "./components/TitleMessage/TitleMessage";
import About from "./pages/About/About";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Slide from "react-reveal/Slide";
import Skills from "./pages/Skills/Skills";
import Resume from "./pages/Resume/Resume";
import Projects from "./components/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Particles from "react-particles-js";
import { particlesOption } from "./particlesOption";
import Blogs from "./pages/Blogs/Blogs";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar></MyNavbar>
      <MyCarousal></MyCarousal>
      <TitleMessage></TitleMessage>
      <Particles
        className="particles particles-box"
        params={particlesOption}/>
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <Container className="container-box rounded">
            <Slide duration={500}>
              <About />
            </Slide>
          </Container>
        </Parallax>
      </div>
      <div>
        <Container className="container-box rounded">
          <Slide duration={500}>
            <Skills></Skills>
          </Slide>
        </Container>
      </div>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Resume></Resume>
          </Fade>
        </Container>
      </div>
      <div>
        <Container className="container-box rounded">
          <Slide duration={500}>
            <Projects></Projects>
          </Slide>
        </Container>
      </div>
      <div>
        <Container className="container-box rounded">
          <Slide duration={500}>
            <Blogs></Blogs>
          </Slide>
        </Container>
      </div>
      <div>
        <Container className="container-box rounded">
          <Slide duration={500}>
            <Contact></Contact>
          </Slide>
        </Container>
      </div>
      <div>
        
          <Footer></Footer>
          
      </div>
    </div>
  );
};

export default App;
