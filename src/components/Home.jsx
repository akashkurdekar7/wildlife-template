import React from "react";
import home1 from "../assets/Home/home2.jpg";
import { RiArrowDownSLine } from "react-icons/ri";

const Home = () => {
  return (
    <section className="home__section section" id="home">
      <div className="home__container container grid">
        <div className="home__image">
          <img
            src={home1}
            className="home__img"
            alt="Wildlife photography showcasing beautiful animals in their natural habitat"
          />
        </div>

        <h1 className="home__name">
          the best of the <b>Wildlife</b> photography
        </h1>
        <h3 className="home__description">
          winning images from national and international wildlife photography
          competitions of the years
        </h3>

        <a href="#about" className="home__scroll">
          <div className="home__scroll-box">
            <RiArrowDownSLine size={30} />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Home;
