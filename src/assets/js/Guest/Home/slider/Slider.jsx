import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "./Slider.css";

// ✅ Import images properly
import slide1 from "../../../../img/slider/slide1.png";
import slide2 from "../../../../img/slider/slide2.png";
import slide3 from "../../../../img/slider/slide3.png";
import slide4 from "../../../../img/slider/slide4.png";
import slide5 from "../../../../img/slider/slide5.png";

function Slider() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <React.Fragment>
      <AutoplaySlider
        className="slider_Setting"
        play={true}
        cancelOnInteraction={false}
        interval={6000}
      >
        {/* Card1 */}
        <div>
          <div className="left-content" data-aos="fade-right">
            <div className="left-content-title">
              <p>The Best</p>
              <h1>
                Education <p>Experience</p>
              </h1>
            </div>
            <div>
              <p>
                “ There is no end to education...” —{" "}
                <span className="color-red">Vishal</span>
              </p>
            </div>
          </div>
          <div className="right-content" data-aos="fade-left">
            <img src={slide1} alt="slide 1" loading="lazy" />
          </div>
        </div>

        {/* Card2 */}
        <div>
          <div className="left-content" data-aos="fade-right">
            <div className="left-content-title">
              <p>The Leader in online Learning</p>
              <h1>
                Build in <p>Learning</p>
              </h1>
            </div>
            <div>
              <p>
                “One hour per day...” —{" "}
                <span className="color-red">Arun</span>
              </p>
            </div>
          </div>
          <div className="right-content" data-aos="fade-left">
            <img src={slide2} alt="slide 2" loading="lazy" />
          </div>
        </div>

        {/* Card3 */}
        <div>
          <div className="left-content" data-aos="fade-right">
            <div className="left-content-title">
              <p>Welcome to New</p>
              <h1>
                Way to <p>Education</p>
              </h1>
            </div>
            <div>
              <p>
                “Research shows...” —{" "}
                <span className="color-red">Siva</span>
              </p>
            </div>
          </div>
          <div className="right-content" data-aos="fade-left">
            <img src={slide3} alt="slide 3" loading="lazy" />
          </div>
        </div>

        {/* Card4 */}
        <div>
          <div className="left-content" data-aos="fade-right">
            <div className="left-content-title">
              <p>here you can review some</p>
              <h1>
                college 2023 <p>center</p>
              </h1>
            </div>
            <div>
              <p>
                “True teachers...” —{" "}
                <span className="color-red">Ithalyaa</span>
              </p>
            </div>
          </div>
          <div className="right-content" data-aos="fade-left">
            <img src={slide4} alt="slide 4" loading="lazy" />
          </div>
        </div>

        {/* Card5 */}
        <div>
          <div className="left-content" data-aos="fade-right">
            <div className="left-content-title">
              <p>take the first step</p>
              <h1>
                to knowledge <p>with us</p>
              </h1>
            </div>
            <div>
              <p>
                “You can teach...” —{" "}
                <span className="color-red">Nagul</span>
              </p>
            </div>
          </div>
          <div className="right-content" data-aos="fade-left">
            <img src={slide5} alt="slide 5" loading="lazy" />
          </div>
        </div>
      </AutoplaySlider>
    </React.Fragment>
  );
}

export default Slider;