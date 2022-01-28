import React from 'react'
import './about.css'
import me from '../../assets/me_zoomed.jpg'

export default function About(props) {

    let borderColor = (props.darkMode) ? "border-dark" : "border-light";
    return (
        <div className='about'>
            <div className={`about__container ${borderColor}`}>
                <div className='img__container'>
                    <img src={me} className="about__img" alt='Me at a flooded park with a hoodie placed awkwardly around my shoulders'/>
                </div>
                <div className='text__container'>
                    <h1 className="about__title">
                    About me
                    </h1>
                    <p className="about__desc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                    <p className="about__desc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </div>     
            </div>
        </div>
    )
}
