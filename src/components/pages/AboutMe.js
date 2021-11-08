import React from 'react'
import headshot from '../assets/'

export default function AboutMe() {
  return (
    <div>
      <h1>Hello, There!</h1>
      <p>
      <img src={headshot}/>
      </p>
      <p>
        I am a scientist transitioning my career into web developement. I have worked with animals for over 10 years.
      </p>
      <p>I have been learning to code for the past 5 months with UC Irvine's Full Stack Flex Developement bootcamp. This journey has been wild! Web Developement has opened so many curiosities for me, and I can't wait to explore them. My dream would be using my coding skills to bridge my love for animals and science to this exciting world of web development.</p>
    </div>
  );
}
