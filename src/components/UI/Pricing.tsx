import "../../styles/pricing.css"

const Pricing = () => {
  return (
    <section id="princing">
      <div className="container">
        <div className="pricing-top">
          <h2 className="section-title">
            Gym <span className="highlights">Pricing</span> Plan
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Incidunt blanditiis necessitatibus sapiente reiciendis
            quaerat optio!
          </p>
        </div>

        <div className="pricing-wrapper">
          <div className="pricing-item">
            <div className="pricing-card-top">
              <h2 className="section-title">Regular Member</h2>
              <h2 className="section-title pricing">
                $50 <span>/month</span>
              </h2>
            </div>

            <div className="services">
              <ul>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Personal trainer
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  5 classes per week
                </li>
              </ul>

              <button className="register-btn">Join Now</button>
            </div>
          </div>

          <div className="pricing-item pricing-item-02">
            <div className="pricing-card-top">
              <h2 className="section-title">Premium Member</h2>
              <h2 className="section-title pricing">
                $70 <span>/month</span>
              </h2>
            </div>

            <div className="services">
              <ul>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Personal trainer
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  5 classes per week
                </li>
              </ul>

              <button className="register-btn">Join Now</button>
            </div>
          </div>

          <div className="pricing-item">
            <div className="pricing-card-top">
              <h2 className="section-title">Standard Member</h2>
              <h2 className="section-title pricing">
                $100 <span>/month</span>
              </h2>
            </div>

            <div className="services">
              <ul>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Personal trainer
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  5 classes per week
                </li>
              </ul>

              <button className="register-btn">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
