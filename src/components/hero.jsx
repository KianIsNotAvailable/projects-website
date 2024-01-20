import React from 'react'
import Image from '../assets/undraw_code_review_l1q9.svg'
export default function hero() {
  return (
    <div>
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={Image}/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Hi, I'm Kian! Welcome to my Portfolio!</h1>
      <p class="leading-relaxed mb-8">Versatile developer passionate about crafting cutting-edge solutions. From dynamic React applications to engaging Twitch chat bots with Python, I blend technology seamlessly. Experienced in AWS integration, CI/CD pipelines, and cloud deployment.</p>
      
    </div>
  </div>
</section>
    </div>
  )
}
