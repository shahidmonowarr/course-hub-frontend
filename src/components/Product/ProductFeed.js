import { useGetAllProductQuery } from "@/redux/features/productFeather/products";
import { useEffect, useState } from "react";
import HomePageCard from "../Shared/Card/HomePageCard";
import LoadingSpinner from "../Shared/Loading/LoadingSpinner";
function ProductFeed() {
  const { data, isLoading, refetch } = useGetAllProductQuery();
  const [randomProducts, setRandomProducts] = useState([]);
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  useEffect(() => {
    if (data) {
      const shuffledProducts = shuffleArray(data.data).slice(0, 20);
      setRandomProducts(shuffledProducts);
    }
  }, [data]);

  return (
    <div className="">
      <div className="w-full py-20 mt-10 bg-gray-100" id="products-feed">
        <div className="pt-20">
          <h2 className="text-2xl font-semibold text-center capitalize ">
            Featured Products
          </h2>
          <p className="mb-10 text-center text-gray-500">
            Check & Get Your Desired Product!
          </p>
          <div>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <div className="grid max-w-screen-xl grid-flow-row-dense grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-8">
                {randomProducts?.map((item) => (
                  <>
                    <HomePageCard item={item} />
                  </>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFeed;
