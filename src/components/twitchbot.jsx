import React from 'react'
import TwitchBot from '../assets/chatbot.png'
export default function twitchbot() {
  return (
    <div>
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={TwitchBot}/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Python Twitch Chat Bot</h1>
      <p class="leading-relaxed mb-8">A Python-based Twitch chat bot that elevates user engagement by introducing a virtual points gambling system, seamlessly integrated with Twitch IRC for real-time interaction. The bot efficiently manages user data through AWS RDS MySQL, ensuring reliable storage and retrieval of virtual points and statistics. To streamline deployment, I containerized the bot using Docker and pushed the images to Elastic Container Registry (ECR). The entire system runs on AWS EC2 instances, combining scalability and reliability. This project underscores my proficiency in Python, Twitch integration, AWS services, Docker containerization, and effective deployment on AWS infrastructure, resulting in an interactive and dynamic Twitch chat experience for users.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"><a href='https://twitch.tv/popout/kianchatbot/chat?popout=' target='_blank'>Try for Yourself!</a></button>
        </div>
    </div>
  </div>
</section>
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={TwitchBot}/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">AWS Architecture</h1>
      <p class="leading-relaxed mb-8">A React TypeScript application designed to enhance Korean language learning through engaging quizzes. The project seamlessly integrates AWS Polly to incorporate authentic Korean pronunciation, providing users with a comprehensive language-learning experience.Utilizing the power of React and TypeScript, the quiz application offers a responsive and interactive interface, ensuring an enjoyable and educational journey for users. AWS Amplify serves as the deployment platform, guaranteeing a scalable and reliable hosting solution.</p>
      <div class="flex justify-center">
        </div>
    </div>
  </div>
</section>
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={TwitchBot}/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Documentation</h1>
      <p class="leading-relaxed mb-8">How I made it:</p>
      <div class="flex justify-center">
        </div>
    </div>
  </div>
</section>
    </div>
  )
}
