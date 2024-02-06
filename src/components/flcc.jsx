import React from 'react'
import Flcc from '../assets/freeleetcodecamplogo3.png'
import Diagram from '../assets/FLCCdiagram.jpg'
export default function flcc() {
  return (
    <div>
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={Flcc}/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">"Freeleetcodecamp" interactive Leetcode learning platform</h1>
      <p class="leading-relaxed mb-8">A React-based FreeCodeCamp clone with a focus on implementing the classic LeetCode problem 'Two Sum.' Leveraged CodeMirror to seamlessly integrate a user-friendly code editor, providing an enhanced coding experience. Implemented the Judge0 API to facilitate code compilation, ensuring accurate and efficient assessment.Implemented a robust CI/CD pipeline using Docker and GitHub Actions, streamlining the development process. Deployed the application seamlessly to AWS Elastic Beanstalk, optimizing scalability and performance.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"><a href='http://freeleetcodecamp.eu-north-1.elasticbeanstalk.com/' target='_blank'>Try for Yourself</a></button>
        
      </div>
    </div>
  </div>
</section>
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={Diagram}/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">AWS Architecture</h1>
      <p class="leading-relaxed mb-8">I developed a React application and orchestrated its deployment using GitHub Actions. The CI/CD pipeline involves building a Docker image and pushing it to Docker Hub. The deployment process is facilitated by an S3 bucket, housing the Dockerrun.aws.json file essential for Elastic Beanstalk.Within the AWS infrastructure, I configured the Elastic Beanstalk environment within a Virtual Private Cloud (VPC), specifically in the eu-north-1a availability zone. The environment is set up within a public subnet, ensuring accessibility, and an Internet Gateway is employed to facilitate interactions with the Judge0 API for code compilation purposes. Additionally, I ensured secure management of configuration parameters by setting up environment variables within the Elastic Beanstalk environment. This includes sensitive information such as API keys, providing a robust and secure configuration for the application.</p>
      <div class="flex justify-center">
        </div>
    </div>
  </div>
</section>

    </div>
  )
}
