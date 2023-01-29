import React from "react";
import HeroImage from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div name="home" className="w-full h-auto pt-20 bg-gradient-to-b from-black via-black to-gray-800 text-white">
      <div className="h-full w-full mx-auto flex flex-col items-center justify-center px-4 sm:flex-row">
        <div className="h-full flex flex-col justify-center sm:w-1/2">
          <h2 className="flex justify-center items-center text-4xl sm:text-7xl font-bold text-white">Matias Flores</h2>
          <p className="text-gray-500 py-4 mx-auto max-w-md text-center">
            SQL | Data Analyst | Power BI | Azure | Product Owner |
            Scrum Master | Business Analyst I Functional Analyst
          </p>
          <div className="flex justify-center">
            <Link
              to="Experience"
              smooth
              duration={500}
              className="group cursor-pointer w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  text-white"
            >
              Experience
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center sm:w-1/2">
          <img src={HeroImage} alt="my profile" className="rounded-3xl w-full sm:w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default Home;
