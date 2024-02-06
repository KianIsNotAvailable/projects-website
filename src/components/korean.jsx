import React from 'react'
import Korean from '../assets/korean_quiz.png'
import Diagram from '../assets/korean-diagram.jpg'
export default function korean() {
  return (
    <div>
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={Korean}/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Korean Learning Quiz</h1>
      <p class="leading-relaxed mb-8">A React TypeScript application designed to enhance Korean language learning through engaging quizzes. The project seamlessly integrates AWS Polly to incorporate authentic Korean pronunciation, providing users with a comprehensive language-learning experience.Utilizing the power of React and TypeScript, the quiz application offers a responsive and interactive interface, ensuring an enjoyable and educational journey for users. AWS Amplify serves as the deployment platform, guaranteeing a scalable and reliable hosting solution.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"><a href='https://main.dap1sc8szkgil.amplifyapp.com/' target='_blank'>Try for Yourself</a></button>
        
      </div>
    </div>
  </div>
</section>
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={Diagram}/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">AWS Architecture</h1>
      <p class="leading-relaxed mb-8">I leveraged AWS Amplify to host my React application seamlessly. As part of enhancing user experience, I integrated AWS Polly to facilitate the pronunciation of Korean words. The streamlined deployment process is automated through a simple Git push, ensuring the latest version is promptly deployed on AWS Amplify.For secure communication with the AWS Polly API, I configured environment variables within AWS Amplify. This strategic setup includes storing IAM credentials, ensuring a secure and efficient interaction between the application and AWS Polly for language pronunciation functionalities.</p>
      <div class="flex justify-center">
        </div>
    </div>
  </div>
</section>

    </div>
  )
}
