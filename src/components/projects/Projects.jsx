import React from 'react'
import './projects.css'
import Thumbnail from './Thumbnail'
import pokeball from '../../assets/pokeball.svg';



export default function Projects(props) {
    const projects = [
      {
        image: pokeball,
        title: "pokemon-tcg-bot",
        link: "https://github.com/daytoncf/pokemon-tcg-bot",
        description: "shiitttt"
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
          <div className="projects__container">
            {projects.map((project) => <Thumbnail project={project} key={project.image} />)}
          </div>  
        </section>
    )
}
