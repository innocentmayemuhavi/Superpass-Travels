import React, { useContext, useState } from "react";
import { Header } from "../Header/Header";
import { nanoid } from "nanoid";

import "./index.css";
import { FirebaseContext } from "../../src/Assets/Context/firebaseContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../src/Assets/Context";
const AddingCars = () => {
  const {
    cars,
    setCars,
    ref,
    mediaDb,
    uploadBytesResumable,
    getDownloadURL,
    isLoading,
  } = useContext(FirebaseContext);
  const { setShowNotification, showNotification, setNotification } =
    useContext(AuthContext);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const navigate = useNavigate();

  const [data, setData] = useState({
    picture: "",
    id: nanoid(50),
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

  const submit = async (event) => {
    event.preventDefault();

    const newCars = Object.values(cars).slice();
    newCars.unshift(data);
    setCars(() => {
      return {
        ...newCars,
      };
    });
    setNotification(() => (
      <p>
        You Have Added <strong>{data.name}</strong> Car Succesfully
      </p>
    ));
    navigate("/");
    setShowNotification(true);
  };

  const handlePostImage = async (data, id) => {
    const imgref = ref(mediaDb, `images/${id}`);
    const upload_pic = uploadBytesResumable(imgref, data);

    upload_pic.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setShowProgress(true);
        setUploadProgress(Math.floor(progress));
      },
      (error) => {
        console.log(error.code);
      },
      () => {
        setShowProgress(false);
        setUploadProgress(0);
        getDownloadURL(upload_pic.snapshot.ref).then((imageUrl) => {
          console.log("File available at", imageUrl);
          setData((prev) => {
            return {
              ...prev,
              picture: imageUrl,
            };
          });
        });
      }
    );
  };

  return (
    <main fade>
      <Header />
      <section>
        <div className="addingcarpage">
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
                accept="image/png,image/jpeg,image/jpg"
                name="picture"
                onChange={async (event) => {
                  console.log(event.target.files[0]);
                  await handlePostImage(event.target.files[0], data.id);
                }}
              />
            </div>
            <div className="carimage">
              {showProgress ? (
                <p>{uploadProgress} % uploaded</p>
              ) : data.picture.length > 3 ? (
                <img src={data.picture} />
              ) : (
                <></>
              )}
            </div>
            <div className="page-input1">
              <label>Car Description:</label>
              <textarea
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
              <select
                name="category"
                value={data.category}
                onChange={handleData}
              >
                <option>coach</option>
                <option>SUV</option>
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

            <button>
              {isLoading ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="20"
                  height="20"
                  className="rotate"
                >
                  <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-1.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm5.657-8.157a.75.75 0 0 1 0 1.061l-1.061 1.06a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.06-1.06a.75.75 0 0 1 1.06 0Zm-9.193 9.193a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.061 0ZM8 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 8 0ZM3 8a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 3 8Zm13 0a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 16 8Zm-8 5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 13Zm3.536-1.464a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 0-1.061ZM2.343 2.343a.75.75 0 0 1 1.061 0l1.06 1.061a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-1.06-1.06a.75.75 0 0 1 0-1.06Z"></path>
                </svg>
              ) : (
                "Upload Car"
              )}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AddingCars;
