import React from 'react'
import './projects.css'
import Thumbnail from './Thumbnail'
import pokeball from '../../assets/pokemon.JPG';
import goob from '../../assets/goobla_academy1.JPG'



export default function Projects(props) {
    const projects = [
      {
        image: goob,
        title: "Goobla Academy API",
        link: "https://github.com/jacksonwelsh/goobla-server",
        description: "In collaboration with my group at HackDFW 2021, we developed a REST API integrated with AWS' NoSQL service DynamoDB to serve data to our Vue app. Built with Flask, a Python micro web framework."
      },
      {
        image: pokeball,
        title: "pokemon-tcg-bot",
        link: "https://github.com/daytoncf/pokemon-tcg-bot",
        description: "A bot that uses the Pokemon TCG API to provide quick display of any printed pokemon card in a discord server. Running in the cloud on an AWS' EC2 Ubuntu instance. Built with Discord.js, Pokemon TCG API, and Axios."
      },
    ];

    let titleClass = (props.darkMode) ? "projects__title" : "projects__title projects_title-light";

    return (
        <section id='projects'>
          <div className={titleClass}>
            <h1>Here are some things I've built</h1>
          </div>
          <div className="projects__container">
            {projects.map((project) => <Thumbnail project={project} key={project.image} />)}
          </div>  
        </section>
    )
}
