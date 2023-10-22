import { ProductList, FilterDropdown } from "../components";

export const HomePage = () => {
  return (
    <main>
      <div className="mx-auto max-w-screen-xl text-center p-2 my-5">
        <h1 className="font-sans font-extrabold text-4xl tracking-wide mb-5 dark:text-white">
          {" "}
          "Your Fashion, Your Way, Your Time!"{" "}
        </h1>
        <p className="my-4  file:font-extralight text-2xl dark:text-slate-300">
          {" "}
          "Celebrate Every Moment, Elevate Your Lifestyle with Unparalleled
          Convenience: Your Trusted Destination for All Your Online Shopping
          Needs."{" "}
        </p>
      </div>


     {/* Product filter section */}
      <div className="flex justify-center">
        <FilterDropdown />
      </div>

      {/* Product List section */}
      <div>
        <ProductList className="z-0" />
      </div>
    </main>
  );
};
