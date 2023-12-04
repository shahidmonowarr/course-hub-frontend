import {
  useConfirmProductMutation,
  useDeleteToCartMutation,
} from "@/redux/features/addToCard/addToCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Loader from "../Loader/Loader";

const Card = ({ item, refetch }) => {
  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState(0);
  const [deleteToCart, resInfo] = useDeleteToCartMutation();
  const [confirmProduct, resInfoOrder] = useConfirmProductMutation();
  useEffect(() => {
    const prices = item?.map((item) => parseFloat(item?.price));
    const total = prices?.reduce((acc, price) => acc + price, 0);
    setTotalPrice(total);
  }, [item]);

  const casedPage = () => {
    window.location.reload();
  };
  const deleteToCartItem = async (id) => {
    await deleteToCart(id);
    await refetch();
    toast.error("Yah..! Delete successfully");
  };
  const confirmOrder = async () => {
    await confirmProduct();
    await refetch();
    toast.success("Yah..! Your Order confirm successfully");
  };

  const continueShopping = () => {
    router.push("/");
  };

  return (
    <div
      className={`${
        item?.length === 0
          ? "shadow-2xl h-[calc(100vh-350px)]"
          : "shadow-2xl h-auto"
      }`}
    >
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold leadi">Invoices</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup></colgroup>
            <thead className="dark:bg-gray-700">
              <tr className="text-left">
                <th className="p-3 text-lg bg-gray-200">Photo</th>
                <th className="p-3 text-lg bg-gray-200">Product Name</th>
                <th className="p-3 text-lg bg-gray-200">Quantity</th>
                <th className="p-3 text-lg text-right bg-gray-200">
                  Unit Price
                </th>
                <th className="p-3 text-lg text-right bg-gray-200">Total</th>
              </tr>
            </thead>
            <tbody>
              {item?.map((data) => (
                <>
                  <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                    <td className="p-3">
                      <img
                        src={data?.img}
                        alt={data?.img}
                        width="70"
                        height="70"
                        draggable={false}
                      />
                    </td>
                    <td className="p-3">
                      <p>{data?.name}</p>
                    </td>
                    <td className="flex gap-2 p-3">
                      <input
                        name="email"
                        required
                        defaultValue={1}
                        type="email"
                        placeholder="Enter your email"
                        className="w-1/3 py-4 pl-6 pr-10 bg-transparent border rounded-lg outline-none border-stroke focus:border-primaryBlue focus-visible:shadow-none dark:border-form-primaryBlue dark:bg-form-input dark:focus:border-primaryBlue placeholder:text-white dark:placeholder-white dark:text-white"
                      />
                      <button onClick={casedPage}>
                        <i class="material-icons">cached</i>
                      </button>
                      <button onClick={() => deleteToCartItem(data?._id)}>
                        <i class="material-icons">clear</i>
                      </button>
                    </td>
                    <td className="p-3 text-right">
                      <p className="dark:text-gray-400">{data?.price}</p>
                    </td>
                    <td className="p-3 text-right">
                      <p>{data?.price}</p>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {item?.length !== 0 && (
        <div>
          <div className="flex flex-col items-end gap-5 px-24 py-10">
            <h3 className="w-1/4 py-2 text-lg border-b text-end">
              Sub-Total:{" "}
              <span className="ml-10 text-[#ef4a23] bold">${totalPrice}</span>
            </h3>
            <h3 className="w-1/4 py-2 text-lg border-b text-end">
              Total:{" "}
              <span className="ml-10 text-[#ef4a23] bold">${totalPrice}</span>
            </h3>
          </div>
          <div className="flex justify-between gap-5 px-24 py-10">
            <button
              onClick={continueShopping}
              className="flex items-center justify-center px-8 text-base button lg:px-10 lg:py-2 xl:text-xl lg:text-lg"
            >
              Continue Exploring
            </button>
            {resInfoOrder.isLoading ? (
              <button
                onClick={confirmOrder}
                className="flex items-center justify-center px-8 text-base button lg:px-10 lg:py-2 xl:text-xl lg:text-lg"
              >
                <Loader />
              </button>
            ) : (
              <button
                onClick={confirmOrder}
                className="flex items-center justify-center px-8 text-base button lg:px-10 lg:py-2 xl:text-xl lg:text-lg"
              >
                Confirm Order
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
