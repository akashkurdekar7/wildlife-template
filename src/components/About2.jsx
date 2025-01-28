import React from "react";
import About2Image from "../assets/about/about2.jpg";

const About2 = () => {
  return (
    <section className="about2 section" id="about2">
      <div className="about2__container container">
        <h2 className="section__title-1">
          50 Years of Wildlife Photographer of the Year
        </h2>
        <p className="about2__description">
          Natural History Museum's new book released on Wednesday marks five
          decades of the WPY competition, celebrating the art of wildlife
          photography. Started in the 1960s, the 160 prize-winning and commended
          images represent 50 years of different times, styles and specialisms -
          showcasing some of the iconic images of wildlife on planet Earth, part
          of an exhibition in London from 24 October.
        </p>

        <div className="about2__perfil">
          <div className="about2__image">
            <img src={About2Image} alt="image" className="about2__img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
