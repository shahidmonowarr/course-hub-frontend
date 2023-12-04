// import ProductDetails from "@/components/Product/ProductDetails";
// import Head from "next/head";

// const ProductInfo = ({ product }) => {
//   return (
//     <>
//       {product?.productName && (
//         <Head>
//           <title>PC Builder | {product?.productName}</title>
//         </Head>
//       )}
//       <ProductDetails
//         id={product?.id}
//         productName={product?.productName}
//         price={product?.price}
//         description={product?.description}
//         image={product?.image}
//         instructor={product?.instructor}
//         thumbnail={product?.thumbnail}
//         enrollmentStatus={product?.enrollmentStatus}
//         duration={product?.duration}
//         schedule={product?.schedule}
//         location={product?.location}
//       />
//     </>
//   );
// };

// export default ProductInfo;

// export const getStaticPaths = async () => {
//   const res = await fetch(
//     "https://pc-builder-assignment-server.vercel.app/products"
//   );
//   const products = await res.json();
//   const paths = products.map((product) => ({
//     params: { productId: product.id.toString() },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// };

// export const getStaticProps = async (context) => {
//   try {
//     const res = await fetch(
//       `https://pc-builder-assignment-server.vercel.app/products/${context.params.productId}`
//     );
//     const product = await res.json();

//     return {
//       props: {
//         product,
//       },
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       notFound: true,
//     };
//   }
// };
