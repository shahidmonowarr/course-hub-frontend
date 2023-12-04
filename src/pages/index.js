import Banner from "@/components/Banner/Banner";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
import FeedbackForm from "@/components/FeedbackForm/FeedbackForm";
import ProductFeed from "@/components/Product/ProductFeed";

export default function Home({ products }) {
  return (
    <>
      <Banner />
      <ProductFeed products={products} />
      <ChooseUs />
      <FeedbackForm />
    </>
  );
}
