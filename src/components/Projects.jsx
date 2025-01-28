import React from "react";
import Tiger from "../assets/projects/Project-Tiger.jpg";
import Elephant from "../assets/projects/Project-Elephant.jpg";
import Crocodile from "../assets/projects/Project-Crocodile.jpg";
import Dolphin from "../assets/projects/project-Dolphin.jpg";
import Rhino from "../assets/projects/project-Rhino.jpg";
import Vulture from "../assets/projects/project-vulture.jpg";
import Turtle from "../assets/projects/project-turtle.jpg";
import { RiArrowRightUpLine, RiGithubLine } from "react-icons/ri";

const Projects = () => {
  const projectsData = [
    {
      title: "Project Tiger",
      description:
        "One of the most successful wildlife conservation ventures, Project Tiger was initiated in 1972 to conserve tigers and their habitats.",
      image: Tiger,
      link: "https://en.wikipedia.org/wiki/Project_Tiger", // Wikipedia link for Project Tiger
    },
    {
      title: "Project Elephant",
      description:
        "Initiated in 1992 by the Government of India, Project Elephant focuses on elephant conservation, welfare, and habitat protection.",
      image: Elephant,
      link: "https://en.wikipedia.org/wiki/Project_Elephant", // Wikipedia link for Project Elephant
    },
    {
      title: "Crocodile Conservation Project",
      description:
        "A project launched to conserve the endangered crocodile species in India, with initiatives like captive breeding and sanctuary establishment.",
      image: Crocodile,
      link: "https://en.wikipedia.org/wiki/Crocodile_Conservation_Project", // Wikipedia link for Crocodile Conservation Project
    },
    {
      title: "UNDP Sea Turtle Project",
      description:
        "Launched in 1999 to conserve Olive Ridley Turtles, focusing on their breeding sites, migratory routes, and preventing turtle mortality.",
      image: Turtle,
      link: "https://en.wikipedia.org/wiki/Olive_Ridley_turtle", // Wikipedia link for Olive Ridley Turtle
    },
    {
      title: "Vulture Conservation Project",
      description:
        "An underrated initiative aimed at preserving the vulture population in India, focusing on habitat protection and reducing poisoning threats.",
      image: Vulture,
      link: "https://en.wikipedia.org/wiki/Vulture_conservation_in_India", // Wikipedia link for Vulture Conservation
    },
    {
      title: "Indian Rhino Vision (IRV) 2020",
      description:
        "An ambitious project with the goal of increasing the population of the Indian rhino in Assam’s Kaziranga National Park and surrounding areas.",
      image: Rhino,
      link: "https://en.wikipedia.org/wiki/Indian_Rhino_Vision_2020", // Wikipedia link for IRV 2020
    },
    {
      title: "Gangetic Dolphin Conservation Project",
      description:
        "A lesser-known initiative focused on protecting the endangered Gangetic dolphin, a symbol of the river ecosystem in India.",
      image: Dolphin,
      link: "https://en.wikipedia.org/wiki/Gangetic_dolphin", // Wikipedia link for Gangetic Dolphin Conservation
    },
  ];

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title-1">
        <span>Projects.</span>
      </h2>

      <div className="projects__container">
        {projectsData.map((project, index) => (
          <article className="projects__card" key={index}>
            <div className="projects__image">
              <img
                src={project.image}
                alt={project.title}
                className="projects__img"
                loading="lazy"
              />
              <a
                href={project.link}
                target="_blank"
                className="projects__button button"
              >
                <RiArrowRightUpLine size={24} />
              </a>
            </div>

            <div className="projects__content">
              <h2 className="projects__title">{project.title}</h2>
              <p className="projects__description">
                {project.description.substring(0, 60)}...
              </p>
            </div>

            {/* Button to view project */}
            <div className="projects__buttons">
              <a href={project.link} target="_blank" className="projects__link">
                <RiGithubLine size={24} />
                View on Wikipedia
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
