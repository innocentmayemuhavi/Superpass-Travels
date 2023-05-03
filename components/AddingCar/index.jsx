import React, { useContext, useState } from "react";
import { Header } from "../Header/Header";
import { nanoid } from "nanoid";

import { AuthContext } from "../../src/Assets/Context";

const AddingCars = () => {
  const { cars } = useContext(AuthContext);
  const [data, setData] = useState({
    picture: "",
    id: nanoid(),
    name: "",
    description: "",
    available: 30,
    price: 0,
    category: "coach",
    trips: 1,
    offer: 0,
  });

  const handleData = (event) => {
    const { name, value } = event.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submit = (event) => {
    event.preventDefault();
    const img = data.picture.split("C:\\fakepath\\").join("./image/");
const saved =cars
saved.push(data)
setData(saved)

   

    console.log(data);
  };
  return (
    <main fade>
      <Header />
      <section>
        <form className="adding-form" onSubmit={submit}>
          <div className="page-input1">
            <label>Car Name:</label>
            <input
              type={"text"}
              placeholder="Name"
              required={true}
              name="name"
              value={data.name}
              onChange={handleData}
            />
          </div>
          <div className="page-input">
            <label>Car Image:</label>
            <input
              type="file"
              placeholder="Add Image"
              accept="image/png, image/jpeg,image/jpg"
              name="picture"
              value={data.picture}
              onChange={handleData}
            />
          </div>
          <div className="page-input1">
            <label>Car Description:</label>
            <input
              type={"text"}
              placeholder="Description"
              required={true}
              name="description"
              value={data.description}
              onChange={handleData}
            />
          </div>
          <div className="page-input1">
            <label>Price:</label>
            <input
              type={"number"}
              placeholder="Price"
              required={true}
              name="price"
              value={data.price}
              onChange={handleData}
            />
          </div>
          <div className="page-input1">
            <label>Discount:</label>
            <input
              type={"number"}
              placeholder="Discount"
              required={true}
              name="offer"
              value={data.offer}
              onChange={handleData}
            />
          </div>
          <div className="page-input">
            <label>Category:</label>
            <select name="category" value={data.category} onChange={handleData}>
              <option>coach</option>
              <option>bike</option>
              <option>vintage</option>
              <option>van</option>
              <option>transist</option>
              <option>caravan</option>
              <option>cab</option>
            </select>
          </div>
          {data.category === "coach" && (
            <div className="page-input">
              <label>Trips:</label>
              <select name="trips" value={data.trips} onChange={handleData}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          )}

          <button>Add</button>
        </form>
      </section>
    </main>
  );
};

export default AddingCars;
