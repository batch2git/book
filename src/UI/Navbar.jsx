import React, { useContext } from "react";
import { pages } from "../consents/data";
import Button from "../component/Button";
import { NavLink } from "react-router";
import { GlobalContext } from "../context/GlobalContext";

const Navbar = () => {


  
  return <div className=" shadow-md ">
    <nav className="flex items-center justify-between py-5 max-w-6xl mx-auto px-3 md:px-0">
      <h2 className="text-2xl font-bold">Book Poka</h2>
      <ul className="flex items-center gap-4 text-sm">
        {
          pages.map((page)=> <NavLink className={({isActive})=> isActive ? "text-green-500 " : ''}  to={page.path} key={page.id}>{page.pageValue}</NavLink>)
        }
      </ul>
      <div className="flex items-center gap-4">
        <Button type={'button'} text={"Sign In"}/>
        <Button type={'button'} text={"Sign Up"}/>
      </div>
    </nav>
  </div>;
};

export default Navbar;
