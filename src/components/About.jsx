import React from "react";
import gallery1 from "../assets/about/gallery1.jpg"; // Import images
import gallery2 from "../assets/about/gallery2.jpg";
import gallery4 from "../assets/about/gallery4.jpg";
import { RiSendPlaneLine } from "react-icons/ri"; // Importing the icon

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <h2 className="section__title-1">
          <span>Explore The World.</span>
        </h2>
        <h3 className="about__description-1">
          Phasellus eget lacinia ipsum. Aliquam lectus tellus, cursus at
          fermentum id, hendrerit sollicitudin.
        </h3>

        <div className="about__image-cont">
          <div className="about__perfil">
            <div className="about__image">
              <p className="about__description">
                years of experience and many clients are happy with the projects
                carried out.
              </p>
              <img src={gallery1} alt="image" className="about__img" />
              <div className="about__border"></div>
            </div>
          </div>

          <div className="about__perfil">
            <div className="about__image">
              <p className="about__description">
                years of experience and many clients are happy with the projects
                carried out.
              </p>
              <img src={gallery2} alt="image" className="about__img" />
              <div className="about__border"></div>
            </div>
          </div>

          <div className="about__perfil">
            <div className="about__image">
              <p className="about__description">
                years of experience and many clients are happy with the projects
                carried out.
              </p>
              <img src={gallery4} alt="image" className="about__img" />
              <div className="about__border"></div>
            </div>
          </div>
        </div>

        <div className="about__info">
          <div className="about__buttons">
            <a href="#contact" className="button">
              <RiSendPlaneLine size={20} /> Subscribe Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
