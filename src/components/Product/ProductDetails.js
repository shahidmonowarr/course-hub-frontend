import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";

const ProductDetails = ({
  id,
  productName,
  price,
  description,
  category,
  status,
  image,
  reviews,
  keyFeatures,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className="px-6 py-12 pb-20 heightFix lg:py-32 md:py-28">
      <div className="flex items-center max-w-screen-xl mx-auto">
        <div className="flex flex-col w-full gap-8 md:flex-row md:justify-between md:gap-4">
          {router.isFallback ? (
            <Skeleton width={400} height={400} />
          ) : (
            <div className="mx-auto">
              <Image
                src={image}
                alt=""
                width={400}
                height={400}
                objectFit="contain"
              />
            </div>
          )}
          <div className="flex-grow xl:max-w-2xl lg:max-w-xl md:max-w-md">
            {router.isFallback ? (
              <Skeleton count={12} />
            ) : (
              <>
                <h3 className="mb-2 text-2xl font-bold capitalize xl:text-4xl lg:text-3xl">
                  {productName}
                </h3>
                <div className="flex items-center mt-4 gap-x-5">
                  <div className="font-normal bg-[#dddddd] p-2 rounded-full px-4 ">
                    <span className="inline-block font-semibold text-black rounded-full">
                      Status:
                    </span>
                    <span>{enrollmentStatus}</span>
                  </div>
                  <div className="font-normal bg-[#dddddd] p-2 rounded-full px-4">
                    <span className="inline-block font-semibold text-black rounded-full">
                      Category:
                    </span>
                    <span>{category}</span>
                  </div>
                </div>
                <div>
                  <h3 className="mt-6 mb-4 text-xl font-semibold">
                    Key Features
                  </h3>
                  <ul className="list-decimal list-inside">
                    {keyFeatures.map((feature, i) => (
                      <li key={i}>
                        <span className="font-semibold">
                          {feature.keyName}:
                        </span>
                        <span className="font-normal">{feature.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="my-6 text-sm text-justify lg:text-base">
                  {description}
                </p>
                <p className="text-2xl font-semibold text-gray-700">
                  $ {price}
                </p>
                <div className="mt-5 text-xs text-gray-500 line-clamp-2 link">
                  {...Array(reviews)
                    .fill()
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        className="inline-block h-5 text-yellow-500"
                      />
                    ))}
                </div>
                <div className="flex flex-col gap-6 mt-5 xs:flex-row sm:gap-8">
                  <button
                    className="flex items-center justify-center px-10 py-2 button"
                    onClick={addItemToBuild}
                  >
                    <ShoppingCartIcon className="w-4" />
                    <span className="ml-2">Add to Build </span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
