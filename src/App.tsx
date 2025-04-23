import CartSection from "./components/CartSection";
import DessertSection from "./components/DessertSection";
import OrderComfirm from "./components/OrderComfirm";
import OrderDetails from "./components/OrderDetails";
import { useGlobal } from "./context/globalContext";

const App = () => {
  const { confirmedOrder } = useGlobal();

  return (
    <>
      <div className="bg-Rose-50 min-h-screen">
        <div className="flex flex-col cm:flex-row items-start gap-8 max-w-7xl mx-auto px-6 py-10 cm:py-20">
          <DessertSection />
          <CartSection />
        </div>
      </div>
      {confirmedOrder && (
        <OrderComfirm>
          <OrderDetails />
        </OrderComfirm>
      )}
    </>
  );
};

export default App;
