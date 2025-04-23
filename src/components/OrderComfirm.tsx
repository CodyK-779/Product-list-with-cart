import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const OrderComfirm = ({ children }: Props) => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
      {children}
    </div>
  );
};

export default OrderComfirm;
