import React from 'react'
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Dev from "../../Images/Background/Developer.svg"
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import FileCopy from '@material-ui/icons/FileCopy';
function About({ secRef }) {

    return (
        <section id="about" ref={secRef} className="bg-gray-900 lg:h-screen">

            <div className=" text-indigo-200 body-font p-2 md:p-5">
                <div id="about" className="mt-10 text-center">
                    <Bounce top>
                        <div className="center text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                            <h1 className="block xl:inline">About Me</h1>

                        </div>
                    </Bounce>
                </div>

                <div className="flex justify-center ">
                    <Slide left>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:block hidden md:ml-20">
                            <img className="object-cover object-center rounded" alt="hero" src={Dev} />
                        </div>
                    </Slide>
                    <div >
                        <div>
                            <div className="mx-auto flex  sm:flex-row flex-col items-center ">
                                <div className="flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
                                    <div className="pt-10 px-2 sm:px-6">

                                        <Slide right>
                                            <p className="lg:mt-10 text-indigo-200 text-base pb-6">
                                                Hi I am Ashiq Khan, An  enthusiastic  full-stack  web  developer  with  in-depthexperience in implementing diverse tech stacks. A highly flexibleteam  player  who  is  passionate  about  building  user-focusedproducts.  Looking  forward  to  working  as  a  developer  andenhancing my technical skills while creating challenging products.
                                            </p>
                                        </Slide>
                                        <Slide right>
                                            <p className="lg:mt-5 text-indigo-200 text-base pb-8">
                                                I am currently learning MERN Stack at Masai School, Bangaluru.
                                            </p>
                                        </Slide>
                                        <Slide bottom className="flex-column italic">
                                            <div className="lg:mt-10 flex-column lg:flex items-center justify-right lg:gap-14  text-white">
                                                <div className="">
                                                    <span className="text-pink-600"><ArrowRightIcon /> </span> Birthday : <span>24 sept 1999  </span>
                                                </div>
                                                <div>
                                                    <span className="text-pink-600"><ArrowRightIcon /> </span>Age : <span>22 </span>
                                                </div>
                                            </div>
                                            <div className="lg:flex items-center justify-right lg:gap-14  text-white">
                                                <div className="">
                                                    <span className="text-pink-600"><ArrowRightIcon /> </span> City : <span>Cuttack, Odisha          </span>
                                                </div>
                                                <div>
                                                    <span className="text-pink-600 "><ArrowRightIcon /> </span>Email : <span>khanashiq4494@gmail.com  </span>
                                                </div>
                                            </div>
                                            <div  className="lg:flex items-center justify-right lg:gap-14  text-white">
                                                <div className="">
                                                    <span className="text-pink-600"><ArrowRightIcon /> </span> <a href='https://drive.google.com/file/d/1BQFWilpa-sTkxcl9bks07hlARyLAB_vR/view?usp=sharing' target='_blank'>Resume </a>
                                                </div>
                                            </div>
                                        </Slide>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
