import CardProducts from "../components/products/CardProduct";

interface listProduct {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Products = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const dataProducts: listProduct[] = await response.json();
  return (
    <>
      <section className="px-4">
        <h1 className="text-center mt-3">LIST PRODUCT</h1>
        {dataProducts.map((item) => {
          return (
            <CardProducts
              key={item.id}
              userId={item.userId}
              id={item.id}
              title={item.title}
              body={item.body}
            />
          );
        })}
      </section>
    </>
  );
};
export default Products;
