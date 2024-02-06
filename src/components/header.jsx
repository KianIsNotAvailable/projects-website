import React from 'react'
import cv from '../assets/tech cv.pdf'
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

export default function header() {
  return (
    <div>
        <header class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
      <a class="mr-5 hover:text-white"><RouterLink to='/'>Home</RouterLink></a>
      <a class="mr-5 hover:text-white"><Link to='experience' spy={true} smooth={true} offset={-70} duration={500}><RouterLink to='/'>Projects</RouterLink></Link></a>
      <a class="mr-5 hover:text-white" href={cv} target='_blank'>PDF CV</a>
    </nav>
  </div>
</header>

    </div>
  )
}
