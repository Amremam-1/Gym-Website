import "../../styles/exercise.css"
import lunges from "../../assets/img/lunges.png"
import yoga from "../../assets/img/yoga-pose.png"
import extended from "../../assets/img/extended.png"

const Excrises = () => {
  return (
    <section id="schedule">
      <div className="container container-exercise">
        <div className="exercise-top">
          <h2 className="section-title">
            Benefits of <span className="highlights">Exercise</span>
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
            Voluptas dolorem inventore ea pariatur unde odio?
          </p>
        </div>

        <div className="exercise-wrapper">
          <div
            className="exercise-item one"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise-icon">
              <img src={lunges} alt="" />
            </span>

            <div className="exercise-content">
              <h4>Healthy Life</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <div
            className="exercise-item two"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise-icon">
              <img src={yoga} alt="" />
            </span>

            <div className="exercise-content">
              <h4>Increased Flexibility</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <div
            className="exercise-item three"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise-icon">
              <img src={extended} alt="" />
            </span>

            <div className="exercise-content">
              <h4>Reducing Blood Pressure</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Excrises
