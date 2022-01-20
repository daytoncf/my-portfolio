import React from 'react'
import {Header, Projects} from './components'

const Home = (props) => {
    return (
        <>
        <Header darkMode={props.darkMode}/>
        <Projects darkMode={props.darkMode}/>
        </>
    )
}

export default Home
