import React, { useState } from "react";
import data from "./carInfo";
import { Outlet,NavLink ,Link}from "react-router-dom";



function Header() {
console.log(data,"data")
    const [showMenu, setShowMenu] = useState(false);
    return <header className="fixed z-10 my-4 w-[100%] flex justify-evenly items-center space-x-4 p-4 ">
        <div className="w-[30%] sm:w-[20%] lg:w-[10%] ml-3">
            <Link to="/"><img src="/assets/tesla.svg" alt="logo" className="cursor-pointer"/></Link>
        </div>
        <nav className="w-[50%] grow flex justify-end ">
            <ul className="hidden lg:block w-[90%] lg:flex justify-center items-center space-x-6">
            {data.map((car,index) => car.title != "Accessories"  ? <NavLink 
             to={`/${car.route}`} key={car.id} className={`border-0 hover:border-b-[1px] hover:border-black ${({ isActive }) =>
              isActive ? 'text-white border-b-white' : ""
            }`}>{car.title}</NavLink> : "")}
                <Outlet />
                
            </ul>

        </nav>
        <nav className="w-[20%] flex justify-evenly items-center">
            <span  className="hidden lg:block">Shop</span>
            <span  className="hidden lg:block">Account</span>
            <span  className="mr-3 hover:bg-gray-200 p-2 rounded-full" onClick={() => setShowMenu(true)}>Menu</span>
        </nav>

        <nav className={showMenu ? "fixed block top-0 right-0 bottom-0 bg-white w-[40%] md:w-[25%] z-40 flex flex-col items-start justify-start space-y-4 p-4" : `fixed hidden top-0 right-0 bottom-0 bg-white w-[40%] z-40 flex flex-col items-start justify-start space-y-4 p-4`}>
            <button className="self-end w-12 h-12 hover:bg-gray-200 p-2 hover:rounded-full" onClick={() => setShowMenu(false)}>X</button>
            {data.map(car => car.title != "Accessories" ? <NavLink to={`/${car.route}`} key={car.id} className="w-[80%] p-2 rounded-full hover:bg-gray-200"> {car.title}</NavLink>:"")}
            <Outlet />
            
        
        </nav>
    </header>;
}

export default Header;