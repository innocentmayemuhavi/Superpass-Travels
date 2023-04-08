import { useState } from "react";

const Pay_By_Mpesa = () => {
  const [Details, setdetails] = useState({
  });

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
      <p>Paying via Mpesa</p>
      <hr />
      <section className="payment-modal-input">
        <fieldset className="payment-modal-input">
          <legend>Payment Details</legend>
          <label>Phone Number:</label>
          <input
            type={"number"}
            required={true}
            name="phone"
            onChange={Check}
            maxLength={14}
          />
          <label>user Name:</label>
          <input
            type={"text"}
            required={true}
            name={"username"}
            onChange={Check}
            maxLength={20}
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

export { Pay_By_Mpesa };
