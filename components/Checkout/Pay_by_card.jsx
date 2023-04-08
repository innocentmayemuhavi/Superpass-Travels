import {useState } from "react";

const Pay_By_Card = () => {
  const [Details, setdetails] = useState({});

  const Check = (event) => {
    const { name, value } = event.target;
    setdetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submit = (event) => {
    event.preventDefault();
    console.log(Details);
  };

  return (
    <form className="payment-modal" onSubmit={submit}>
      <p>Paying via Card</p>
      <hr />
      <section className="payment-modal-input">
        <fieldset className="payment-modal-input">
          <legend>Payment Details</legend>
          <label>Card Number:</label>
          <input
            type={"number"}
            required={true}
            name="cardnumber"
            onChange={Check}
            maxLength={14}
          />
          <label>Card CVV :</label>
          <input
            type={"number"}
            required={true}
            name={"src"}
            onChange={Check}
            maxLength={3}
          />
          <label>Card Expiry Date:</label>
          <input
            type={"date"}
            required={true}
            name={"expdate"}
            onChange={Check}
          />
          <label>User Id Number:</label>
          <input
            type={"number"}
            required={true}
            name="userid"
            onChange={Check}
            maxLength={6}
          />
        </fieldset>
      </section>
   <div className="form-button">
   <button>Submit</button>
   </div>
    </form>
  );
};
export { Pay_By_Card };
