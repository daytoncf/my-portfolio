import React from 'react'
import './projects.css'
import Thumbnail from './Thumbnail'
import { SiDiscord } from 'react-icons/si'



export default function Projects() {
    const projects = [
      {
        image: {SiDiscord},
        title: "pokemon-tcg-bot",
        link: "https://github.com/daytoncf/pokemon-tcg-bot",
        description: "gs"
      },
      {
        image: {SiDiscord},
        title: "pokemon-tcg-bot",
        link: "https://github.com/daytoncf/pokemon-tcg-bot",
        description: "gs"
      },
      {
        image: {SiDiscord},
        title: "pokemon-tcg-bot",
        link: "https://github.com/daytoncf/pokemon-tcg-bot",
        description: "gs"
      },
    ];

    return (
        <div id='projects'>
          <div className="projects__container">
            <Thumbnail  
                          
            />
            <Thumbnail
              
            />
            <Thumbnail 
              
            />
          </div>  
        </div>
    )
}
