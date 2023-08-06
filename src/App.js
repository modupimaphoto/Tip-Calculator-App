import logo from "./assets/images/logo.svg";
import dollar from "./assets/images/dollar.svg";
import person from "./assets/images/person.svg";

import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const tips = [5, 10, 15, 25, 50];

  let billError = document.getElementById("bill-error");
  let peopleError = document.getElementById("people-error");
  let billInput = document.getElementById("bill");
  let peopleInput = document.getElementById("people");

  const handleTip = (tip) => {

    if(bill === "" || people === ""){
      if(bill === ""){
        billError.innerHTML = "Can't be zero";
        billInput.classList.add("border-error");
      }else {
        billError.innerHTML = "";
        billInput.classList.remove("border-error");
      }
      if(people === ""){
        peopleError.innerHTML = "Can't be zero";
        peopleInput.classList.add("border-error");
      }else {
        peopleError.innerHTML = "";
        peopleInput.classList.remove("border-error");
      }
    }else{
      let tip_amount = (parseFloat(bill) / people) * (tip / 100);
      setTipAmountPerPerson(tip_amount.toFixed(2));

      let total_per_person = bill / parseInt(people) + tip_amount;
      setTotalPerPerson(total_per_person.toFixed(2));

      billError.innerHTML = "";
      peopleError.innerHTML = "";

      peopleInput.classList.remove("border-error");
      billInput.classList.remove("border-error");
    }
  }
  const handleCustomTip = (tip) => {
    if(tip !== ""){
      let tip_amount = (parseFloat(bill) / people) * (parseInt(tip) / 100);
      setTipAmountPerPerson(tip_amount.toFixed(2));

      let total_per_person = bill / parseInt(people) + tip_amount;
      setTotalPerPerson(total_per_person.toFixed(2));
    }
    if(isNaN(tip)){
      setTipAmountPerPerson(0.00);
      setTotalPerPerson(0.00);
    }
  }
  const handleReset = () => {
    setBill("");
    setPeople("");
    setTotalPerPerson(0);
    setTipAmountPerPerson(0);
  };
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
              <span className="error" id="bill-error"></span>
              <div className="input-group" id="bill">
                <div className="input-group-prepend p-2 px-3">
                  <img src={dollar} alt={dollar + " icon"} className="img-fluid"/>
                </div>
                <input type="text"  placeholder="0" className="form-control"
                  value={ bill } onChange={(e) => setBill(e.target.value)}/>
              </div>
            </div>

            <div className="form-group mb-4">
              <label for="tip">Select Tip %</label>
              <div className="row g-3">
                {
                  tips.map((tip) => {
                    return(
                      <div className="col-6 col-md-4">
                        <button type="button" onClick={ () => handleTip(tip)}
                          className="btn custom-btn p-2">{tip}%</button>
                      </div>
                    )
                  })
                }
                <div className="col-6 col-md-4">
                  <input type="text"
                  onChange={(e) => handleCustomTip(e.target.value)}
                    placeholder="Custom" className="custom-form p-2"/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label for="people">Number of People</label>
              <span className="error" id="people-error"></span>
              <div className="input-group" id="people">
                <div className="input-group-prepend p-2 px-3">
                  <img src={person} alt={person + " icon"} className="img-fluid"/>
                </div>
                <input type="text"  placeholder="0" className="form-control"
                  value={ people } onChange={(e) => setPeople(e.target.value)} />
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
                $<span>{tipAmountPerPerson}</span>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="header-wrapper">
                <h6>Total</h6>
                <p>/ person</p>
              </div>
              <div className="price-wrapper">
                $<span>{totalPerPerson}</span>
              </div>
            </div>
            <button type="button" onClick={ handleReset }
            className="btn custom-reset-btn p-2 text-uppercase">
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
