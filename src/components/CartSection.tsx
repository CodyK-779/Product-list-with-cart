import { useGlobal } from "../context/globalContext";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";

const CartSection = () => {
  const { selectedItems } = useGlobal();

  const totalQuantity = selectedItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="w-full cm:w-[680px] bg-white p-6 rounded-xl">
      <h1 className="text-2xl font-bold text-rose-600">{`Your Cart (${totalQuantity})`}</h1>
      {selectedItems.length > 0 ? <FilledCart /> : <EmptyCart />}
    </div>
  );
};

export default CartSection;
