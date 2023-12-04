import { useAddToCartProductMutation } from "@/redux/features/addToCard/addToCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Loader from "../Loader/Loader";
import KeyFeatures from "./KeyFeatures";

const Card = ({ item }) => {
  const router = useRouter();
  const [user, setUser] = useState(false);
  const [addToCartProduct, resInfo] = useAddToCartProductMutation();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      setUser(user);
    }
  }, [router]);
  const buyNowProduct = async () => {
    if (user) {
      const data = {
        id: item._id,
        quantity: 1,
      };
      await addToCartProduct(data);
      toast.success("The product add successfully in you cart..!");
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <div>
      <div className="flex-1 w-full p-8 mt-20 shadow-2xl rounded-xl">
        <div className="grid w-full grid-cols-1 px-10 lg:grid-cols-2">
          <div className="">
            <div>
              <img
                src={item?.image}
                alt={item?.image}
                width="500"
                height="500"
                draggable={false}
              />
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <h4 className="">
              <div className="py-10 text-3xl text-center uppercase bold">
                {item?.name}
              </div>
            </h4>

            <div className="text-lg">
              {item?.keyFeatures?.map((feature, featureIndex) => (
                <KeyFeatures key={featureIndex} item={feature} />
              ))}
            </div>
            <div className="py-3 pb-5 text-center text-md">
              <span>{item?.dis}</span>
            </div>
            <div className="py-3 pb-5 text-xl text-center text-red-600">
              <span>Price: ${item?.price}</span>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between text-center text-red-600 text-md">
                <span>Status: {item?.instructor}</span>
              </div>
              <div className="flex items-center justify-between text-center text-red-600 text-md">
                <span>Status: {item?.enrollmentStatus}</span>
              </div>
              <div className="flex items-center justify-between text-center text-red-600 text-md">
                <span>Schedule: {item?.location}</span>
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-20 rounded">
              {resInfo.isLoading ? (
                <button
                  onClick={buyNowProduct}
                  className="flex items-center justify-center gap-2 px-4 py-3 border"
                  type="button"
                >
                  <Loader />
                </button>
              ) : (
                <button
                  onClick={buyNowProduct}
                  className="flex items-center justify-center gap-2 px-4 py-3 border"
                  type="button"
                >
                  Buy Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
