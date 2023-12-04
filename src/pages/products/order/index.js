import Order from "@/components/Product/Order";
import { useGetOrderProductQuery } from "@/redux/features/addToCard/addToCard";

const Index = () => {
  const { data, isLoading, isError } = useGetOrderProductQuery();
  return (
    <div>
      <div className="flex flex-col justify-center mt-32">
        {data?.data.map((data, i) => (
          <>
            <Order item={data} i={i} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Index;
