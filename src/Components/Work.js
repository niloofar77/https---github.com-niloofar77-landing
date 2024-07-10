import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
export const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "PickMeals",
      text: "kkkkkk",
    },
    {
      image: ChooseMeals,
      title: "ChooseMeals",
      text: "kkkkkk",
    },
    {
      image: DeliveryMeals,
      title: "DeliveryMeals",
      text: "kkkkkk",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">work</p>
        <h1 className="primary-heading"> how it works</h1>
        <p className="primary-text">loooooo</p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image}></img>
            </div>
            <h2>{data.title}</h2>
            <h2>{data.text}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
