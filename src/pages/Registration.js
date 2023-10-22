import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Registration = () => {
  const navigate = useNavigate();

  async function handleRegistration(event) {
    event.preventDefault();

    const authDetail = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    const requestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(authDetail),
    };

    const response = await fetch(
      "http://localhost:3000/register",
      requestOption
    );
    const data = await response.json();

    console.log(data);

    data.accessToken && navigate("/");

    if (data.accessToken) {
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("user_id", JSON.stringify(data.user.id));
    }
  }

  return (
    <main>
      <div className="p-8 dark:bg-gray-800 dark:border-gray-700">
        <section>
          <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
            Create Your Account
          </p>
        </section>
        <form onSubmit={handleRegistration}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-300"
            >
              Your name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Vijay Jawalkar"
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-left  font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="vijay@gmail.com"
              required
              autoComplete="off"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm text-left  font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              minLength="7"
            />
          </div>
          <button
            type="submit"
            className="text-white text-left  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>

          <div className="text-lg font-medium text-gray-500 dark:text-gray-300 my-4">
            Have an account already?{" "}
            <Link
              to="/login"
              className="text-blue-700 hover:underline dark:text-orange-400"
            >
              Login To Your account
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};
