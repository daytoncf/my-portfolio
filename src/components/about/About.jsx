import React from 'react'
import './about.css'
import me from '../../assets/me_zoomed.jpg'

export default function About(props) {
    return (
        <div className='about'>
            <div className='about__container'>
                <div>
                    <h1 className="about__title">
                    About me
                    </h1>
                    <p className="about__desc">
                        computer science student
                    </p>
                </div>
                <div className='img__container'>
                    <img src={me} className="about__img" alt='Me at a flooded park with a hoodie placed awkwardly around my shoulders'/>
                </div>
                
                
            </div>
        </div>
    )
}
