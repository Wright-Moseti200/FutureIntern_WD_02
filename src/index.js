import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import logo from "./edusity_assets/logo.png";

const App = () =>
{
  return (
    <div class="background h-full w-full ">
      <div class="background2 h-full w-full flex flex-col">
        <div class="flex flex-row items-center justify-around height2  mb-12">
          <img src={logo} class="h-12" alt="Graduation picture" />
          <div class="flex justify-around back items-center">
            <p className="text-white">Home</p>
            <p className="text-white">Progarm</p>
            <p className="text-white">About us</p>
            <p className="text-white">Testimonials</p>
            <button class="bg-white text-black border-none p-2 w-32 rounded-full">
              Contact Us
            </button>
          </div>
        </div>
        <div class="height1 flex flex-col justify-center items-center">
          <h1 class="font-serif text-center text-6xl text-white font-bold font-serif">
            We Ensure better education
            <br />
            for a better world
          </h1>
          <br />
          <p className="text-center text-white">
            Our cutting-edge curriculum is designed to empower students with the
            knowledge, skills,and
            <br />
            experiences needed to excel in the dynamic field of education
          </p>
          <br />
          <button class="bg-white p-3 rounded-full w-40 ">
            Explore more <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
 
const body = document.querySelector("body");
const root = createRoot(body);
root.render(<App />);