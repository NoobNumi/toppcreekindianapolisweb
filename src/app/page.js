import Home from "./Pages/home";
import Property from "./Pages/properties";
import Amenities from "./Pages/ammenities";
import AOSWrapper from "./components/AOSWrapper";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Reviews from "./Pages/reviews";
import Footer from "./components/footer";

export default function Page() {
  return (
    <div>
      <AOSWrapper>
        <div className="css-79elbk">
          <div
            style={{ borderRadius: "50% 200% 40% 80%" }}
            className="css-1ueqzyg"
          ></div>
          <div
            style={{ borderRadius: "50% 200% 40% 80%" }}
            className="css-10gqqxt"
          ></div>
          <div
            className="chakra-stack css-3agdq8"
            style={{ backdropFilter: "blur(10px) saturate(1.1)" }}
          ></div>
        </div>
        <Home />
        <Amenities />
        <Property />
        <About />
        <Reviews />
        <Contact />
        <Footer></Footer>
      </AOSWrapper>
    </div>
  );
}
