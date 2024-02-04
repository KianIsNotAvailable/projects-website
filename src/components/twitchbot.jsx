import React from 'react'
import TwitchBot from '../assets/chatbot.png'
import Diagram from '../assets/bot-diagram.jpg'
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
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={Diagram}/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">AWS Architecture</h1>
      <p class="leading-relaxed mb-8">I developed a Python-based Twitch chat bot using the Twitch API and Twitch IRC, deploying it with a robust setup on AWS. The infrastructure consists of a Virtual Private Cloud (VPC) equipped with an Internet Gateway, facilitating access on port 3306 for MySQL and port 6667 for Twitch IRC. In a public subnet, an AWS RDS MySQL database is set up to efficiently store user data such as points and usernames.To streamline deployment, I containerized my Python code into a Docker image and deployed it to AWS Elastic Container Registry (ECR). The deployment process involved configuring an EC2 instance, placed in a public subnet for accessibility. Accessed via PuTTY SSH, the instance was equipped with Docker, configured with AWS credentials, and connected to Elastic Container Registry. The final step included pulling the Python Twitch bot Docker image from Elastic Container Registry and running it on the EC2 instance, ensuring seamless and scalable operation, all within a public subnet for broader accessibility.</p>
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
