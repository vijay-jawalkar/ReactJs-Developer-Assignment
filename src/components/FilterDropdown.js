import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortBy, categories, initialProducts } from "../redux/filterSlice";

export const FilterDropdown = () => {
  const [showDropdownOne, setShowDropdownOne] = useState(false);
  const [showDropdownTwo, setShowDropdownTwo] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.filterState);


  // function to set product list to low - high (ascending) order
  function handleSortLowToHigh(products) {
    dispatch(setSortBy("lowtohigh"));
    setShowDropdownOne(!showDropdownOne);
  }


  // function to set product list to high - low (descending) order
  function handleSortHighToLow(products) {
    dispatch(setSortBy("hightolow"));
    setShowDropdownOne(!showDropdownOne);
  }

  function setMenCategory(products) {
    dispatch(categories("men's clothing"));
    setShowDropdownTwo(!showDropdownTwo);
  }

  function setWomenCategory(products) {
    dispatch(categories("women's clothing"));
    setShowDropdownTwo(!showDropdownTwo);
  }

  function setJeweleryCategory(products) {
    dispatch(categories("jewelery"));
    setShowDropdownTwo(!showDropdownTwo);
  }

  function setElectronicCategory(products) {
    dispatch(categories("electronics"));
    setShowDropdownTwo(!showDropdownTwo);
  }

  function clearFilter() {
    dispatch(initialProducts());
  }

  return (
    <div className="flex gap-4">
      <section>
        <button
          onClick={() => setShowDropdownOne(!showDropdownOne)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Sorted By{" "}
          <svg
            class="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {showDropdownOne && (
          <div className="bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute left-18 z-40">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              <li onClick={() => handleSortLowToHigh(state.productList)}>
                <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Price - Low To High
                </span>
              </li>
              <li onClick={() => handleSortHighToLow(state.productList)}>
                <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Price - High To Low
                </span>
              </li>
            </ul>
          </div>
        )}
      </section>

      <section>
        <button
          onClick={() => setShowDropdownTwo(!showDropdownTwo)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Category
          <svg
            class="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {showDropdownTwo && (
          <div className="bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute left-18 z-40">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              <li onClick={() => setMenCategory(state.productList)}>
                <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Men's Cloth
                </span>
              </li>
              <li onClick={() => setWomenCategory(state.productList)}>
                <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Women's Cloth
                </span>
              </li>
              <li onClick={() => setJeweleryCategory(state.productList)}>
                <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Jewelery
                </span>
              </li>
              <li onClick={() => setElectronicCategory(state.productList)}>
                <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Electronics
                </span>
              </li>
            </ul>
          </div>
        )}
      </section>
      <section>
        <button
          onClick={() => clearFilter()}
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
          type="button"
        >
          {" "}
          Clear Filter{" "}
        </button>
      </section>
    </div>
  );
};
