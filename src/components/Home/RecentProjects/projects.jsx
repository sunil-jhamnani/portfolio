import React from "react";
import "./projects.css";
import devProjects from "./devProjects";
import npmProjects from "./npmPackages";
import { Link } from "react-router-dom";

function createCard(element) {
  return (
    <Card
      key={element.id}
      title={element.title}
      back={element.back}
      subtitle={element.subtitle}
      image={element.image}
      height={element.height}
      link={element.link}
      width="450px"
    />
  );
}
function ConditionalLink({ children, condition, ...props }) {
  return !!condition && props.to ? (
    <Link {...props}>{children}</Link>
  ) : (
    <>{children}</>
  );
}

function Card(props) {
  return (
    <div
      className="m-5 col-lg-5 col-xs-12"
      ontouchstart="this.classList.toggle('hover');"
    >
      <ConditionalLink
        condition={props.link}
        to={{ pathname: `${props.link}` }}
        target="_blank"
      >
        <div class="p-3 container ">
          <div
            class="front"
            style={{ backgroundImage: props.image, minHeight: props.height }}
          >
            <div class="inner">
              <p>{props.title}</p>
              <span>{props.subtitle}</span>
            </div>
          </div>
          <div class="back" style={{ minHeight: props.height }}>
            <div class="inner">
              <h2>{props.back}</h2>
            </div>
          </div>
        </div>
      </ConditionalLink>
    </div>
  );
}

export const projects = () => {
  return (
    <>
      <div class="container text-center">
        <h2 className="title" id="dev1">
          Some Things I've Built
        </h2>
      </div>
      <div className="row ">{devProjects.map(createCard)}</div>
      <div class="container text-center">
        <h2 className="title" id="dev1">
          Couple of NPM packages published
        </h2>
      </div>
      <div className="row ">{npmProjects.map(createCard)}</div>
    </>
  );
};
