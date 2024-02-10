import React from "react";
import img from "../assets/img/about.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-custom-bg">
      <h1 className="font-sans font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">About Us</h1>

      <div className=" flex flex-col lg:flex-row items-center gap-5">
        <div className=" w-full lg:w-2/4">
          <img className=" rounded-lg" src={img} alt="img" />
        </div>
        <div className=" w-full lg:w-2/4 p-4 space-y-3">
          <h2 className=" font-semibold text-3xl font-sans">
            What's special in QuickBite
          </h2><br />
          <p>
            Introducing QuickBite, your go-to solution for fast and delicious meals on the fly.
            At QuickBite, we pride ourselves on delivering convenient dining options without compromising on taste or quality.
            Whether you're craving a hearty sandwich, a fresh salad, or a flavorful bowl, we've got you covered.

          </p>
          <p>
            Our diverse menu features a variety of options to suit every palate,
            all prepared with the freshest ingredients and served with speed and efficiency. With QuickBite,
            you can satisfy your hunger cravings without the long waits, ensuring you have more time to enjoy life's moments.
            Experience the ultimate convenience in dining with QuickBite today!
          </p><br />

          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
