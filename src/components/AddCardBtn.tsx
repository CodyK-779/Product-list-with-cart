import { useMemo } from "react";
import cartIcon from "../assets/images/icon-add-to-cart.svg";
import plusIcon from "../assets/images/icon-increment-quantity.svg";
import minusIcon from "../assets/images/icon-decrement-quantity.svg";
import { useGlobal } from "../context/globalContext";

interface Props {
  addToCart: (name: string, price: number, image: string) => void;
  name: string;
  price: number;
  image: string;
}

const AddCardBtn = ({ addToCart, name, price, image }: Props) => {
  const { selectedItems, setSelectedItems } = useGlobal();

  const incrementQuantity = (name: string) => {
    setSelectedItems((prevItems) => {
      const updatedItem = prevItems.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      );

      return updatedItem;
    });
  };

  const decrementQuantity = (name: string) => {
    setSelectedItems((prevItem) => {
      const updatedItem = prevItem.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity - 1 } : item
      );

      return updatedItem.filter((item) => item.quantity > 0);
    });
  };

  const itemQuantity = useMemo(
    () => selectedItems.find((item) => item.name === name)?.quantity,
    [selectedItems, name]
  );

  const quantity =
    selectedItems.find((item) => item.name === name)?.quantity || 0;

  return (
    <div className={`-mt-5 relative z-10 ${quantity > 0 && "mb-4"}`}>
      {quantity > 0 ? (
        <button className="flex items-center justify-between mx-auto bg-red px-3 py-2.5 w-40 rounded-full">
          <div
            className="border border-white px-0.5 py-1.5 rounded-full cursor-pointer"
            onClick={() => decrementQuantity(name)}
          >
            <img src={minusIcon} />
          </div>
          <p className="text-sm text-Rose-50">{itemQuantity}</p>
          <div
            className="border border-white px-0.5 py-0.5 rounded-full cursor-pointer"
            onClick={() => incrementQuantity(name)}
          >
            <img src={plusIcon} className="w-2.5" />
          </div>
        </button>
      ) : (
        <button
          className="flex items-center gap-2 px-6 py-2.5 rounded-full mx-auto bg-Rose-50 border border-Rose-400 hover:border-red text-sm font-semibold text-rose-900 hover:text-red transition-colors duration-100 ease-in"
          onClick={() => addToCart(name, price, image)}
        >
          <img src={cartIcon} />
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default AddCardBtn;
