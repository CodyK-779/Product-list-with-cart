import removeIcon from "../assets/images/icon-remove-item.svg";
import carbonIcon from "../assets/images/icon-carbon-neutral.svg";
import { useGlobal } from "../context/globalContext";

const FilledCart = () => {
  const { selectedItems, setSelectedItems, setConfirmedOrder } = useGlobal();

  const removeFromCart = (name: string) => {
    setSelectedItems((prevItem) =>
      prevItem.filter((item) => item.name !== name)
    );
  };

  const totalPrice = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-5">
      {selectedItems.map((s) => (
        <div
          key={s.name}
          className="flex items-center justify-between pb-4 border-b-2 mt-4 border-Rose-100"
        >
          <div>
            <p className="mb-1.5 text-sm font-semibold text-Rose-900">
              {s.name}
            </p>
            <div className="flex items-center">
              <p className="font-semibold text-red mr-4">{s.quantity}x</p>
              <p className="text-sm font-medium text-Rose-400 mr-2.5">
                @ ${s.price.toFixed(2)}
              </p>
              <p className="text-sm font-semibold text-Rose-500">
                ${(s.price * s.quantity).toFixed(2)}
              </p>
            </div>
          </div>
          <div
            className="border-2 border-Rose-300 p-0.5 rounded-full cursor-pointer"
            onClick={() => removeFromCart(s.name)}
          >
            <img src={removeIcon} />
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between mt-8">
        <p className="text-Rose-500 font-medium">Order Total</p>
        <p className="text-2xl font-bold text-Rose-900">
          ${totalPrice.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center justify-center gap-2 mt-6 bg-Rose-50 py-4 rounded-lg">
        <img src={carbonIcon} />
        <p className="font-medium text-sm text-Rose-500">
          This is a <span className="font-bold">carbon-neutral</span> delivery
        </p>
      </div>
      <button
        className="w-full py-3.5 rounded-full bg-red text-Rose-50 mt-6 font-medium hover:bg-redHover transition-colors duration-150 ease-in"
        onClick={() => setConfirmedOrder(true)}
      >
        Confirm Order
      </button>
    </div>
  );
};

export default FilledCart;
