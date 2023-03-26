import { updateLocale } from "moment/moment";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../src/Assets/Context";

const BookingCard = (props) => {

    const{setServiceData}=useContext(AuthContext)

    const updatedata=()=>{

        setServiceData(prev=>{
            return{
                ...prev,
                from:'Kapsabet',
                to:'Mombasa',
                seat:'1a',
                time:'Morning: 07:00',
                cost:3000,
                toBePaid:3000- 3000*(prev.offer*0.01)

            }
        })

    }
  return (
    <section className="booking-card" onClick={()=>{
        setServiceData({...props})
        updatedata()
    }}>
      <div className="booking-card-image">
        <Link to={'/servicepage'}><img src={props.picture}></img></Link>
      </div>

      <div className="booking-card-data">
        <h3>{props.name}</h3>
      </div>
    </section>
  );
};

export { BookingCard };
