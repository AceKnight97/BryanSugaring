import Carousel from "antd/es/carousel";
import landing1 from "../../images/landing1.jpg";
import landing10 from "../../images/landing10.jpg";
import landing2 from "../../images/landing2.jpg";
import landing4 from "../../images/landing4.jpeg";
import landing6 from "../../images/landing6.jpg";
import landing7 from "../../images/landing7.jpg";
import landing8 from "../../images/landing8.jpg";
import "./_home.scss";

function HomeLanding() {
  return (
    <Carousel autoplay className="home-landing-1">
      <img src={landing1} alt="Landing 1"></img>
      <img src={landing2} alt="Landing 2"></img>
      <img src={landing4} alt="Landing 4"></img>
      <img src={landing6} alt="Landing 6"></img>
      <img src={landing7} alt="Landing 7"></img>
      <img src={landing8} alt="Landing 8"></img>
      <img src={landing10} alt="Landing 10"></img>
    </Carousel>
  );
}

export default HomeLanding;
