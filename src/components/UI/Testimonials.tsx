import "../../styles/testimonials.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-cards"
import { EffectCards } from "swiper/modules"
import avatar01 from "../../assets/img/898.png"
import avatar02 from "../../assets/img/979.png"
import avatar03 from "../../assets/img/646.png"

const Testimonials = () => {
  return (
    <section>
      <div className="container sliders">
        <h2 className="section-title">Testimonials</h2>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide-item">
              <div className="slide-img-01">
                <img src={avatar01} alt="" />
              </div>

              <h3>Jesica Fernandes</h3>
              <p>
                A specialized trainer demonstrates a high level of
                professionalism and integrity in dealing with clients and
                trainees
                <br />
                Possesses extensive experience in their field, contributing to
                effective guidance and training.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-item">
              <div className="slide-img-02">
                <img src={avatar02} alt="" />
              </div>

              <h3>Emily Strong</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                deserunt natus libero nulla architecto nisi quia laudantium
                adipisci nemo asperiores repudiandae, maxime tempore labore
                neque ad. Consectetur amet ducimus voluptatum!
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-item">
              <div className="slide-img-03">
                <img src={avatar03} alt="" />
              </div>

              <h3>Jesica Fernandes</h3>
              <p>
                Has effective communication skills to clearly convey concepts
                and knowledge to trainees. Can motivate and encourage trainees
                to reach their goals and inspire them to achieve their best
                performance.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
