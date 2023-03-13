import { Button } from "../Button/Index";
import { QuickNav } from "../QuickNavigation";
import "./index.css";
const Content = () => {

  const View=()=>{
    console.log("Clicked")
  }
  return (
    <section className="main">
      <div className="content">
        <h1>WELCOME TO SUPERPASS TRAVELS</h1>
      </div>
      <div className="ourservices">
        <div className="card-image">
          <img src="../../../images/vehicle-caio-apache-vip-v-volksbus-17-230-od-euro-v-2022-on-display-at-the-latbus-2022-show-held-in-the-city-of-so-paulo-2K8W9C9.jpg" alt="Image" />
        </div>
        <div>
        <h2>OUR SERVICES</h2>
        <hr />
        <p>Super pass travels is a travelling agency that offers booking and travelling services.</p>
        <p>It also provides delivery services.</p>
        <Button text='View Services' onClick={View}/>
        </div>
      </div>
      <div className="ourservices">
      <div>
        <h2>WHAT WE DO</h2>
        <hr />
  <p>Under Current technology, our company decided to place this project with the mind of having direct impact on peoples lives.</p>
  <p>We offer different services to users at a convinient cost.</p>
  <p>some of the services are...</p>
 
        <Button text='Expolore' onClick={View} type='button'/>
        </div>
        <div className="card-image">
          <img src="../../../images/a-modern-inzar-scania-single-deck-tourism-coach-parked-beside-the-canal-in-devizes-wiltshire-england-uk-MAX008.jpg" alt="Image" />
        </div>
        
      </div>
    <QuickNav/>
    </section>
  );
};

export { Content };
