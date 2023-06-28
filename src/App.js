import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import Testimonial from "./components/Testiminial/Testimonial";
import Vartual from "./components/Virtual/Vartual";

function App() {
  const transition = { duration : "3" , type : "spring" }
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Slider></Slider>
      <Vartual transition={transition}></Vartual>
      <Feature></Feature>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
}

export default App;
