import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const DropdownLogIn = ({ setShowDropdown }) => {
  const [email, setEmail] = useState("");

  const token = JSON.parse(sessionStorage.getItem("token"));
  const id = JSON.parse(sessionStorage.getItem("user_id"));

  function handleLogout() {
    sessionStorage.clear();
    setShowDropdown(false);
  }

  useEffect(() => {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const id = JSON.parse(sessionStorage.getItem("user_id"));
    async function getUserEmail() {
      const requestOption = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer: ${token}`,
        },
      };

      const response = await fetch(
        `http://localhost:3000/users/${id}`,
        requestOption
      );
      const data = await response.json();
      setEmail(data.email);
    }

    getUserEmail();
  }, []);

  return (
    <div
      id="dropdownAvatar"
      className="select-none	absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-black shadow dark:bg-black dark:divide-gray-600"
    >
      <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
        <div className="font-medium truncate">{email}</div>
      </div>

      <div onClick={handleLogout} className="py-1">
        <span className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
          Log out
        </span>
      </div>
    </div>
  );
};
