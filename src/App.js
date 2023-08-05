import logo from "./assets/images/logo.svg";
import dollar from "./assets/images/dollar.svg";
import person from "./assets/images/person.svg";

function App() {
  return (
    <div className="">
      <header className="p-2 text-center mt-5 mb-4">
        <img src={ logo } alt={logo} className="img-fluid"/>
      </header>
      <div className="wrapper">
        <div className="row g-4">
          <div className="col-md-6">

            <div className="form-group mb-4">
              <label for="bill">Bill</label>
              <div className="input-group">
                <div className="input-group-prepend p-2 px-3">
                  <img src={dollar} alt={dollar + " icon"} className="img-fluid"/>
                </div>
                <input type="text"  placeholder="0" className="form-control"/>
              </div>
            </div>

            <div className="form-group mb-4">
              <label for="tip">Select Tip %</label>
              <div className="row g-3">
                <div className="col-6 col-md-4">
                  <button type="button" className="btn custom-btn">5%</button>
                </div>
                <div className="col-6 col-md-4">
                  <button type="button" className="btn custom-btn">10%</button>
                </div>
                <div className="col-6 col-md-4">
                  <button type="button" className="btn custom-btn">15%</button>
                </div>
                <div className="col-6 col-md-4">
                  <button type="button" className="btn custom-btn">25%</button>
                </div>
                <div className="col-6 col-md-4">
                  <button type="button" className="btn custom-btn">50%</button>
                </div>
                <div className="col-6 col-md-4">
                  <input type="text" placeholder="Custom" className="custom-form"/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label for="people">Number of People</label>
              <div className="input-group">
                <div className="input-group-prepend p-2 px-3">
                  <img src={person} alt={person + " icon"} className="img-fluid"/>
                </div>
                <input type="text"  placeholder="0" className="form-control"/>
              </div>
            </div>

          </div>
          <div className="col-md-6 p-4 card-wrapper">
            <div className="d-flex mb-3 justify-content-between">
              <div className="header-wrapper">
                <h6>Tip Amount</h6>
                <p>/ person</p>
              </div>
              <div className="price-wrapper">
                $<span>0.00</span>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="header-wrapper">
                <h6>Total</h6>
                <p>/ person</p>
              </div>
              <div className="price-wrapper">
                $<span>0.00</span>
              </div>
            </div>
            <button type="button"
            className="btn custom-reset-btn text-uppercase">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
Bill

  Select Tip %
  5%
  10%
  15%
  25%
  50%
  Custom

  Number of People

  Tip Amount
  / person

  Total
  / person

  Reset

  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
    Coded by <a href="#">Your Name Here</a>.
  </div>
*/

export default App;
