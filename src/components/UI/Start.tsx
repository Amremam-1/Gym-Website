import "../../styles/start.css"
import trainer from "../../assets/img/45.png"
const Start = () => {
  return (
    <section id="classes">
      <div className="container">
        <div className="start-wrapper">


          
          <div className="box-01 box-1">
            <div className="box-02" >
              <div className="box-03">
                <div className="start-img">
                  <img
                    src={trainer}
                    alt=""
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="start-img">
            <img
              src={trainer}
              alt=""
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div> */}

          <div
            className="start-content"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="section-title">
              Ready to make a <span className="highlights">change?</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              labore aliquid rerum hic architecto exercitationem, eius esse
              maxime earum eligendi repellat enim voluptates deleniti! Mollitia
              nesciunt reiciendis amet rerum sint!.
            </p>

            <button className="register-btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Start
