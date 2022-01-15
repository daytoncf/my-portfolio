import React from 'react'
import './projects.css'
import Thumbnail from './Thumbnail'
import pokeball from '../../assets/pokeball.svg';
import goob from '../../assets/goobla_academy1.JPG'



export default function Projects(props) {
    const projects = [
      {
        image: goob,
        title: "Goobla Academy API",
        link: "https://github.com/jacksonwelsh/goobla-server",
        description: "In collaboration with a teammate of mine at HackDFW 2021, we developed a REST API integrated with AWS' NoSQL service DynamoDB to serve data to our Vue app."
      },
      {
        image: pokeball,
        title: "pokemon-tcg-bot",
        link: "https://github.com/daytoncf/pokemon-tcg-bot",
        description: "woahhh also pokemon :)"
      },
      {
        image: pokeball,
        title: "pokemon-tcg-bot",
        link: "https://github.com/daytoncf/pokemon-tcg-bot",
        description: "Yeah this is pokemon"
      },
    ];

    return (
        <section id='projects'>
          <div className='projects__title'>
            <h2>Here are some things I've built</h2>
          </div>
          <div className="projects__container">
            {projects.map((project) => <Thumbnail project={project} key={project.image} />)}
          </div>  
        </section>
    )
}
