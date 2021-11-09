import React from "react";
import Card from './Card'

const projects = [
    {
        id:1,
        name: "Project1",
        description: "pint and pixels"
    },
    {
        id:2,
        name: "Project2",
        description: "Prestige World Wide"
    },
    {
        id:3,
        name: "Project3",
        description: "A Wheel Good Time"
    },
];



export default function Projects() {
    return (
      <div>
        {projects.map((project) => (
          <Card name={project.name} description={project.description} key={project.id} />
        ))}
      </div>
    );
  }