import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex justify-center bg-rose-300">
      <div className="flex flex-col justify-evenly items-center rounded-lg shadow-xl mt-36 bg-amber-500 h-56 w-[340px]">
        <Link to="/manageItems">
          <div className="hover:shadow-2xl hover:bg-cyan-500 transition-shadow duration-200 rounded-lg bg-cyan-600 px-11 py-5">
            Manage Items
          </div>
        </Link>
        <Link to="/viewItems">
          <div className="hover:shadow-2xl hover:bg-cyan-500 transition-shadow duration-200 rounded-lg bg-cyan-600 px-11 py-5">
            View Items
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
