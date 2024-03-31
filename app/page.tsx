import ButtonNavigation from "./components/root/ButtonNavigation";

const Page = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <ButtonNavigation text="GO TO PRODUCTS" href="/products" />
        </div>
      </section>
    </>
  );
};

export default Page;
