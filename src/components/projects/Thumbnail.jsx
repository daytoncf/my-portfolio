import React from 'react'
import './thumbnail.css'
import { FiExternalLink } from 'react-icons/fi/';

const Thumbnail = (props) => {
  return (
    <div className='project__card grow'>

      <img className="project__img" src={props.project.image} alt="gallery"/>
      <div className='project__content'>
        <a href={props.project.link} target="_blank">
          <h2 className='project__content_title'>{props.project.title} </h2>
          <FiExternalLink size={24}/>
        </a>
        <p className='project__content_desc'>{props.project.description}</p> 
      </div>
        
       
    </div>
  )
}

export default Thumbnail
