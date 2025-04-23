import { productDetails } from "../../data";
import AddCardBtn from "./AddCardBtn";
import { useGlobal } from "../context/globalContext";

const DessertSection = () => {
  const { selectedItems, setSelectedItems } = useGlobal();

  const addToCart = (name: string, price: number, image: string) => {
    setSelectedItems((prevItem) => [
      ...prevItem,
      { name, price, quantity: 1, image },
    ]);
  };

  const quantity = (name: string) => {
    const itemQuantity =
      selectedItems.find((item) => item.name === name)?.quantity || 0;

    return itemQuantity;
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-Rose-900 mb-6">Desserts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {productDetails.map((product) => (
          <div key={product.name} className="mb-2">
            <div
              className={`${
                quantity(product.name) > 0 &&
                "border-[3px] border-red rounded-md"
              }`}
            >
              <picture>
                <source
                  media="(max-width: 567px)"
                  srcSet={product.image.mobile}
                />
                <source
                  media="(min-width: 568px)"
                  srcSet={product.image.tablet}
                />
                <source
                  media="(min-width: 1024px)"
                  srcSet={product.image.desktop}
                />
                <img src={product.image.desktop} className="rounded-md" />
              </picture>
            </div>
            <AddCardBtn
              addToCart={addToCart}
              name={product.name}
              price={product.price}
              image={product.image.thumbnail}
            />
            <p className="mt-3.5 text-sm font-medium text-Rose-400">
              {product.category}
            </p>
            <p className="font-semibold text-Rose-900">{product.name}</p>
            <p className="font-semibold text-red">
              ${product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DessertSection;
