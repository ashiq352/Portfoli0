import React from 'react'
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import styled from "styled-components"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import LanguageIcon from '@material-ui/icons/Language';
// projects
import bcl from "../../Images/project/theory..png";
import practo from "../../Images/project/Practo.png"
import chintubot from "../../Images/project/pharmeasy.png"



function Index({ secRef }) {
    const Projects = {
        all: [
            { name: 'Theory.com', image: bcl, github: 'https://github.com/ashiq352/Theory.com-clone', link: 'https://backend-theory.herokuapp.com/' },
            { name: 'Practo.com', image: practo , github: 'https://github.com/ashiq352/Practo-React-Clone', link: 'https://practo-pranavdalvi9.vercel.app/' },
            { name: 'PharmEasy', image: chintubot, github: 'https://github.com/ashiq352/PharmEasy-Clone', link: 'https://hardcore-kirch-79db84.netlify.app/' }
        ]
    }
    return (
        <section id="projects" className=" h-full text-gray-900" ref={secRef}>
            <div>
                <div className="p-10 lg:pb-10  text-center">
                    <Bounce top>
                        <div className=" center text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                            <h1 className="block xl:inline">Projects</h1>

                        </div>
                    </Bounce>
                </div>
                <div className="container mx-auto  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-10 items-center">
                    {Projects.all.map((ele) => {
                        return <Card name={ele.name} image={ele.image} github={ele.github} link={ele.link} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Index


const Card = (props) => {
    return <div className={props.name}><Slide bottom><div className="card">

        <div className="imgBx">
            <img src={props.image} alt={props.name} />
        </div>
        <div className="details">
            <h2>{props.name}<br /><span  > <a href={props.github} target="_blank" ><GitHubIcon />  </a> <a target="_blank" href={props.link}> <LanguageIcon /></a> </span> </h2>
        </div>
    </div></Slide> </div>
}