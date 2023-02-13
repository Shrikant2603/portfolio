import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-lg mt-10 mb-5">
        I am a Mechanical engineer who has recently ventured into the world of web development. After enrolling in a comprehensive program at AccioJobs.com, I have honed my frontend development skills and successfully completed the frontend portion of the course. My expertise in HTML, CSS, and JavaScript, as well as my experience working with React, Bootstrap, and TailWind libraries, make me a well-rounded and capable frontend developer.
        </p>

        <br />

        <p className="text-lg">
        I bring a unique perspective to web development as a result of my background in mechanical engineering, which has taught me the importance of attention to detail and the ability to bring ideas to life. I am eager to use my skills and experience to create engaging and user-friendly websites for clients and users. My portfolio website is an opportunity for me to showcase my work and demonstrate my abilities to the world. I am continuously seeking new challenges and growth opportunities in the field of web development, and I am confident in my ability to make a valuable contribution to any project I undertake.
        </p>
      </div>
    </div>
  );
};

export default About;