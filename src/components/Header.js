import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { DropdownLogOut } from "./DropdownLogOut";
import { DropdownLogIn } from "./DropdownLogIn";

import Logo from "../images/logo.jfif"

export const Header = () => {
  const[darkMode, setDarkMode] = useState(JSON.parse(sessionStorage.getItem("dark")) || false);
  const[showDropdown, setShowDropdown] = useState(false);

  const products = useSelector((state) => state.cartState.cartList);

  const accessToken = JSON.parse(sessionStorage.getItem("token"))

 useEffect( () => {
  sessionStorage.setItem("dark", JSON.stringify(darkMode))
  if(darkMode){
  document.documentElement.classList.add("dark");

  }else{
  document.documentElement.classList.remove("dark");
  
  }
 }, [darkMode])

//  function handleDropdown(){

//  }



  return (
    <header>
      <nav class="bg-white dark:bg-gray-900">
        <div class="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" class="flex items-center">
            <img src={Logo} class="mr-3 h-10" alt="Job Finder Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Shop Online
            </span>
          </Link>
          <div class="flex items-center relative">
            <span
              onClick={() => setDarkMode(!darkMode)}
              class="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"
            ></span>

            <Link to="/carts" class="text-gray-700 dark:text-white mr-5">
              <span class="text-2xl bi bi-card-checklist relative">
                <span class="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  {products.length}
                </span>
              </span>
            </Link>

            <span
            onClick = {() => setShowDropdown(!showDropdown)} 
            class="bi bi-person-square cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
          </div>
        </div>
      </nav>

      {
        showDropdown && (
          accessToken ? (<DropdownLogIn setShowDropdown = {setShowDropdown} />) :  (<DropdownLogOut setShowDropdown = {setShowDropdown} />) 
        )
          
            
         
           
          
          
        
      }
    </header>
  );
};
