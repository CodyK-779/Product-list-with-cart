import emptyIcon from "../assets/images/illustration-empty-cart.svg";

const EmptyCart = () => {
  return (
    <div className="mt-9 pb-4">
      <img src={emptyIcon} className="mx-auto mb-3.5" />
      <p className="text-center font-semibold text-Rose-500">
        Your added items will appear here
      </p>
    </div>
  );
};

export default EmptyCart;
