import checkmark from "../assets/images/icon-order-confirmed.svg";
import { useGlobal } from "../context/globalContext";

const OrderDetails = () => {
  const { selectedItems, setSelectedItems, setConfirmedOrder } = useGlobal();
  const totalPrice = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const restartOrder = () => {
    setConfirmedOrder(false);
    setSelectedItems([]);
  };

  return (
    <div className="w-[550px] py-8 px-6 cm:px-8 rounded-lg bg-white">
      <img src={checkmark} />
      <h1 className="text-4xl font-bold mt-6 text-Rose-900">Order Confirmed</h1>
      <p className="mt-2 mb-7 text-Rose-500">We hope you enjoy your food!</p>
      <div className="px-6 pt-2 pb-5 bg-Rose-50 rounded-md">
        <div className="overflow-y-auto scrollbar-hidden max-h-[250px]">
          {selectedItems.map((s) => (
            <div
              key={s.name}
              className="flex items-center justify-between pb-4 border-b-2 mt-4 border-Rose-100"
            >
              <div className="flex gap-4">
                <img src={s.image} className="size-14 rounded" />
                <div>
                  <p className="font-semibold text-Rose-900 mb-1.5">{s.name}</p>
                  <div className="flex items-center gap-4">
                    <p className="font-semibold text-red">{s.quantity}x</p>
                    <p className="font-medium text-Rose-400">
                      @ ${s.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              <p className="font-semibold text-Rose-900">
                ${(s.price * s.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-6">
          <p className="text-Rose-500 font-medium">Order Total</p>
          <p className="text-xl font-bold text-Rose-900">
            ${totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
      <button
        className="w-full py-3.5 rounded-full bg-red text-Rose-50 mt-8 font-medium hover:bg-redHover transition-colors duration-150 ease-in"
        onClick={restartOrder}
      >
        Start New Order
      </button>
    </div>
  );
};

export default OrderDetails;
