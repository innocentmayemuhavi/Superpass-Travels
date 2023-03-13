import { Link } from "react-router-dom";
import { Button } from "../Button/Index";
import "./index.css";
const QuickNav = () => {
  return (
    <>
      <section className="navbody fade">
        <div
          className="nav-card"
          style={{
            backgroundImage: `url('../../../images/salo-finland-may-18-2019-black-1940s-oldsmobile-among-ca-450-vintage-cars-gathering-to-salo-market-square-for-salon-maisema-cruising-2019-TA897H.jpg')`,
          }}
        >
          <div className="card-content">
            <h1>CAR HIRING</h1>
            <hr />
            <Link to={"/carhire"}>
              <Button text="Car hiring" type="button" class="btn" />
            </Link>
          </div>
        </div>
        <div
          className="nav-card fade"
          style={{
            backgroundImage: `url('../../../images/isuzu-grand-toro-intercity-bus-presented-at-the-hannover-iaa-transportation-motor-show-germany-september-20-2022-2K3HXJF.jpg')`,
          }}
        >
          <div className="card-content">
            <h1>CAR BOOKING</h1>
            <hr />
            <Link to={"/carbooking"}>
              <Button text="Car BOOKING" type="button" class="btn" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export { QuickNav };
