import heroImg from "../../assets/img/AVATAR.png"
import dumbleImg from "../../assets/img/dumble.png"
import "../../styles/hero.css"

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h2
              className="section-title"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Exercise is the key to a
              <span className="highlights"> Healthy</span> Lifestyle
            </h2>
            <p data-aos="fade-up" data-aos-deley="100" data-aos-duration="1800">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              <br />
              Laudantium aliquid voluptas maiores eos nesciunt repellat!
            </p>

            <div
              className="hero-btns"
              data-aos="fade-up"
              data-aos-deley="200"
              data-aos-duration="2000"
            >
              <button className="register-btn">Get Started</button>
              <button className="watch">
                <span>
                  <i className="ri-play-fill"></i>
                </span>
                Watch Video
              </button>
            </div>
          </div>

          <div className="hero-img">
            <div className="hero-img-wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box-img">
                      <img src={heroImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="heart-rate"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <h5>Heart Rate</h5>
                <span>
                  <i className="ri-heart-pulse-fill"></i>
                </span>
                <h6>2567 BPM</h6>
              </div>

              <div
                className="gym-location"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <span>
                  <i className="ri-map-pin-2-fill"></i>
                </span>
                <h5>
                  Find a new gym <br />
                  near you
                </h5>
              </div>

              <div
                className="dumple-icon"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                <img src={dumbleImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
