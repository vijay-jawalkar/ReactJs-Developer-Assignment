import { Link } from "react-router-dom";

export const DropdownLogOut = ({setShowDropdown}) => {
  return (
    <div
      id="dropdownAvatar"
      className="select-none	absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-black  dark:divide-gray-600"
    >
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownUserAvatarButton"
      >
        <li>
          <Link
            onClick={() => setShowDropdown(false)}
            to="/login"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
             onClick={() => setShowDropdown(false)}
            to="/registration"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};
