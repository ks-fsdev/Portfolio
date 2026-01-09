import React, { useState } from "react";
import { TypingAnimation } from "@/components/ui/typing-animation";
import photo from "./assets/cropped.png";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MarqueeDemo } from "@/components/ui/MarqueeDemo";
import Project from "@/components/ui/Project";

function App() {
  return (
    <div>
      <div className="max-w-4xl my-10 mx-auto py-4 px-7 flex flex-col">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between sm:items-center gap-3">
          <img
            src={photo}
            alt=""
            className="sm:order-1 rounded-full max-h-25 max-w-25 sm:max-h-35 sm:max-w-35 object-cover mb-5 sm:mb-0"
          />
          <div className="">
            <p className="text-3xl sm:text-4xl font-bold">Hi, I'm Khushi👋</p>

            <TypingAnimation
              words={[
                "UI/UX Designer ",
                "Full Stack Developer ",
                "Freelancer ",
              ]}
              blinkCursor={true}
              pauseDelay={2000}
              loop
              className="text-2xl sm:text-3xl mt-0 font-bold text-neutral-700">
              Blinking cursor
            </TypingAnimation>

            <p className="my-4 sm:text-medium text-sm font-medium">
              Self-taught Full Stack Developer specializing in frontend
              excellence with knowledge of CSS5, Tailwind, JS6, ReactJS,
              Firebase, hosting, CDN, GitHub version control, etc.
            </p>

            <div className="flex w-60 my-5 items-center justify-start gap-4">
              <a target="blank" href="https://github.com/ks-fsdev">
                <img
                  src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000"
                  alt=""
                  className="h-6"
                />
              </a>

              <a
                target="blank"
                href="https://www.linkedin.com/in/khushi-srivastava-171820275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <img
                  src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
                  alt=""
                  className="h-6"
                />
              </a>
              <a
                target="blank"
                href="mailto:khushisriv0203@gmail.com"
                className="">
                <img
                  src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
                  alt=""
                  className="h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Separator></Separator>
      <div className="max-w-4xl my-10 mx-auto py-4 px-7 flex flex-col">
        <p className="text-2xl sm:text-3xl font-bold">About me</p>
        <p className="my-4 text-sm sm:text-medium font-medium">
          Master of React, Tailwind CSS, and pixel-perfect UIs that captivate
          users. From Kanpur, I transform complex challenges into responsive,
          animated web experiences using Node.js, Firebase, and modern stacks.
          Passionate about clean code and innovation, ready to elevate your
          team. <br />
          <br /> In late 2024, I discovered a passion for web development. What
          started as a simple curiosity quickly became a deep dive down the
          rabbit hole of coding and building websites. Now, I’m fully immersed
          and excited to keep learning and growing in this field. Here are the
          skills I developed:
        </p>
        <MarqueeDemo />
      </div>
      <Separator></Separator>
      <div className="max-w-4xl my-10 mx-auto py-4 px-7 flex flex-col">
        <p className="text-2xl sm:text-3xl font-bold">Projects</p>

        <p className="my-4 text-sm sm:text-medium font-medium">
          Here are some of the my projects on display:
        </p>

        <Project />
      </div>
      <Separator></Separator>
      <div className="max-w-4xl my-10 mx-auto py-4 px-7 flex flex-col text-center mb-20">
        <p className="text-3xl font-bold">Get in touch</p>
        <p className="my-4 text-medium font-medium">
          Want to connect? You choose how.
        </p>

        <div className="flex w-60 my-5 mx-auto items-center justify-around">
          <a target="blank" href="https://github.com/ks-fsdev">
            <img
              src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000"
              alt=""
              className="h-8"
            />
          </a>

          <a
            target="blank"
            href="https://www.linkedin.com/in/khushi-srivastava-171820275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <img
              src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
              alt=""
              className="h-8"
            />
          </a>
          <a target="blank" href="mailto:khushisriv0203@gmail.com" className="">
            <img
              src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
              alt=""
              className="h-8"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
