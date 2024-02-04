import React from 'react'
import Freeleetcodecamp from '../assets/freeleetcodecamplogo3.png';
import Chatbot from '../assets/chatbot.png';
import Korean from '../assets/korean_quiz.png';
import { Link } from 'react-router-dom';
export default function Page() {
  return (
    <div>
        <section class="text-gray-400 body-font bg-gray-900">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div className='flex flex-col justify-center items-center m-auto'>
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="experience sm:text-3xl text-2xl font-medium title-font mb-2 text-white">My Experience</h1>
      </div>
      <div className='flex flex-col justify-center items-center py-5'>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">Skills:</p>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">HTML | CSS | JavaScript | NodeJS | React | Typescript | TailwindCSS | Python | AWS EC2 | AWS Elastic Beanstalk | AWS RDS | AWS Polly | AWS Amplify | AWS S3 | AWS VPC | AWS ECR | Docker | mySQL | Git | Github | Github Actions</p>
      </div>
      </div>
    </div>
    <div class="flex flex-wrap -m-4 justify-center">
      <div class="xl:w-1/4 md:w-1/2 p-4 ">
        <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-center object-contain mb-6" src={Freeleetcodecamp} alt="content"/>
          <h3 class="tracking-widest text-green-400 text-xs font-medium title-font">"Freeleetcodecamp" interactive Leetcode learning platform</h3>
          <h2 class="text-lg text-white font-medium title-font mb-4">With CI/CD Deployment</h2>
          <p class="leading-relaxed text-base">Built a React FreeCodeCamp clone with a LeetCode 'Two Sum' focus. Integrated CodeMirror for an enhanced code editing experience, used Judge0 API for code compilation. Implemented CI/CD pipeline with Docker and GitHub Actions, deploying to AWS Elastic Beanstalk for optimal scalability.</p>
          <div className='flex flex-col py-5'>
          <button className='text-white hover:text-green-400'><Link to='/freeleetcodecamp'>Learn more...</Link></button>
          <button className='text-white hover:text-green-400' ><a href='https://github.com/KianIsNotAvailable/freeleetcodecamp' target='_blank'>View on Github</a></button>
          </div>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-contain object-center mb-6" src={Korean} alt="content"/>
          <h3 class="tracking-widest text-green-400 text-xs font-medium title-font">Korean Learning Quiz</h3>
          <h2 class="text-lg text-white font-medium title-font mb-4">With AWS Polly Integration</h2>
          <p class="leading-relaxed text-base">Developed a React TypeScript Korean learning quiz featuring AWS Polly for authentic Korean pronunciation. Deployed with AWS Amplify, showcasing proficiency in modern front-end technologies and cloud deployment.</p>
          <div className='flex flex-col py-5'>
          <button className='text-white hover:text-green-400'><Link to='/korean-quiz'>Learn more...</Link></button>
          <button className='text-white hover:text-green-400' ><a href='https://github.com/KianIsNotAvailable/learn-korean' target='_blank'>View on Github</a></button>
          </div>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-contain object-center mb-6" src={Chatbot} alt="content"/>
          <h3 class="tracking-widest text-green-400 text-xs font-medium title-font">Python Twitch Chat Bot</h3>
          <h2 class="text-lg text-white font-medium title-font mb-4">With EC2, Docker, ECR and RDS</h2>
          <p class="leading-relaxed text-base">I designed a Python Twitch chat bot enabling users to gamble virtual points in real-time using Twitch IRC. The bot efficiently manages data with AWS RDS MySQL, and for seamless deployment, it's Dockerized and hosted on AWS EC2 instances after being pushed to Elastic Container Registry (ECR).</p>
          <div className='flex flex-col py-5'>
          <button className='text-white hover:text-green-400'><Link to='/twitch-bot'>Learn more...</Link></button>
          <button className='text-white hover:text-green-400' ><a href='https://github.com/KianIsNotAvailable/twitch-bot' target='_blank'>View on Github</a></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
