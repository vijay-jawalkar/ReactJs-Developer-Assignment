import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
    const [product, setProduct] = useState([]);
    const [rate, setRate] = useState("");
    const {id} = useParams();

    useEffect( () => {
        async function getProduct(){
        const reponse = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await reponse.json();
        setProduct(data);
        setRate(data.rating.rate)
        }

        getProduct()
    }, [id])

   

    return(
        <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
          {/* The Complete Guide to Backend Development */}

         {product.title}
        </h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">
          Lorem lorem lorem lorem
        </p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-md my-3">
            <img className="rounded" src={product.image} alt={product.title} />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">₹</span>
              <span className=""> {product.price}</span>
            </p>
           
            <p className="my-4 select-none">
              
           

            <span className="font-semibold text-orange-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
             {`${rate} Out Of 5`}
              </span>
           
              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
             {product.category}
              </span>
            </p>
            <p className="my-3">
              

        
    

          <  button 
       
         className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
          Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
         </button>
        


              {/* <button className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}  disabled={ product.in_stock ? "" : "disabled" }>Remove Item <i className="ml-1 bi bi-trash3"></i></button> */}
            </p>
            <p className="text-lg text-gray-900 dark:text-slate-200">
             {product.description}
            </p>
          </div>
        </div>
      </section>
    </main>
    )
}