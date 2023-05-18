import React from "react";
import spider from "../../assets/Spidey-logo_200x.jpg";
import marvel from "../../assets/Marvel_Logo_200x.jpg";
import DC from "../../assets/DC_logo_200x.jpg";
import Disney from "../../assets/Disney.jpg";
import Anime from "../../assets/Anime.jpg";
import Avenger from "../../assets/Avenger.jpg";

const Sponsor = () => {
  return (
    <div className="my-container text-center my-16">
        <hr />
      <h2 className="text-4xl font-bold text-slate-900 uppercase relative inline tittle-design tracking-wider">
        Our Sponsor Brands
      </h2>
      <div className="carousel carousel-center rounded-box mt-10">
        <div className="carousel-item">
          <img
            src={spider}
            alt="Image"
          />
        </div>
        <div className="carousel-item">
          <img
            src={Anime}
            alt="Image"
          />
        </div>
        <div className="carousel-item">
          <img
            src={Disney}
            alt="Image"
          />
        </div>
        <div className="carousel-item">
          <img
            src={DC}
            alt="Image"
          />
        </div>
        <div className="carousel-item">
          <img
            src={marvel}
            alt="Image"
          />
        </div>
        <div className="carousel-item">
          <img
            src={Avenger}
            alt="Image"
          />
        </div>
        <div className="carousel-item">
          <img
            src={Anime}
            alt="Image"
          />
        </div>
        <div className="carousel-item">
          <img
            src={Disney}
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
