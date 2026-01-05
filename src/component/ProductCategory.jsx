import all_products from "./Assets/all_product.js";
import FooterSection from "./FooterSection.jsx";
import Item from "./Item/Item.jsx";

const ProductCategory = (props) => {
  return (
    <div className="bg-sky-100 relative top-15 right-5 bottom-0 max-w-1xl lg:max-w-7xl pr-2 ">
      <div className="p-1">
        <img
          src={props.banner}
          alt="banner Image"
          className="size-full object-cover"
        />
      </div>
      <div className="mt-2 px-10 grid  gap-y-5 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-10 " >
        {all_products.map((item, i) => {
          if (item.category === props.category)
            return <Item key={i} id={item.id}  name={item.name} image={item.image} description={item.description} price={item.price} actual={item.actualPrice} rating={item.rating} badge={item.badge}/>;
        })}
      </div>
      <FooterSection />
    </div>
  );
};

export default ProductCategory;
