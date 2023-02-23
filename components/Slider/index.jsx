import "./index.css";
import React from "react";
import SliderDet from "./Sliderdet";

const Slider = () => {
  const images = [
    "../../../images/modern-bus-design-for-travel-and-tour-with-isolated-background-KPA7R0.jpg",
    "../../../images/taxi-in-the-rain-at-night-cologne-north-rhine-westphalia-germany-DWNMHR.jpg",
    "../../../images/close-up-of-a-white-coach-bus-facing-beautiful-morning-sky-with-rising-sun-2DP79P7.jpg",
    "../../../images/modern-high-speed-train-interior-DTMTP7.jpg",
    "../../../images/family-travelling-in-minivan-to-airport-people-on-public-transport-bus-or-van-are-travelling-to-airport-for-vacation-aerodrome-transfer-service-vehi-REMA69.jpg",
    "../../../images/black-pontiac-bonneville-4-door-hardtop-mid-1960s-and-people-enjoying-the-ride-on-salon-maisema-cruising-2019-salo-finland-may-18-2019-2DC39PJ.jpg",
    "../../../images/passengers-sitting-in-minibus-view-from-seat-behind-2G3CE11.jpg",
    "../../../images/yellow-taxi-new-york-city-DW58FN.jpg",
    '../../../images/beautiful-green-ford-f1-v8-pickup-truck-early-1950s-and-people-enjoying-the-ride-on-salon-maisema-cruising-2019-salo-finland-may-18-2019-2DC7H11.jpg',
    '../../../images/interior-of-modern-european-train-new-empty-railway-carriage-KCBC8W.jpg',
    '../../../images/isuzu-grand-toro-intercity-bus-presented-at-the-hannover-iaa-transportation-motor-show-germany-september-20-2022-2K3HXJF.jpg',
    '../../../images/london-black-cab-taxi-at-a-pedestrian-crossing-on-greys-inn-road-holborn-KN351W.jpg',
    '../../../images/white-coach-bus-on-the-road-at-summer-KNM886.jpg'
  ];

  const render = images.map((image) => (
    <div className="slider-image">
      <img src={image} alt="...loading..." />
    </div>
  ));
  return <SliderDet>{render}</SliderDet>;
};

export { Slider };
