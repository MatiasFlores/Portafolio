import React from "react";
import HeroImage from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-auto w-auto bg-gradient-to-b pt-20 from-black via-black to-gray-800">
      <div className="h-auto w-auto mx-auto flex flex-col items-center justify-center px-4 md:flex-row">

        <div className="h-full flex flex-col justify-center ">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">Matias Flores</h2>
          <p className="text-gray-500 py-4 max-w-md">
          SQL | Data Analyst | Power BI | Azure | Product Owner |
          Scrum Master | Business Analyst I Functional Analyst
          </p>

          <div class="flex justify-center">
            <Link to="Experience" smooth duration={500} className="group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Experience
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mb-1">
          <img src={HeroImage} alt="my profile" className="rounded-3xl mx-auto w-2/3 md:w-full ml-10"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
