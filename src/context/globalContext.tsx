import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface Props {
  children: ReactNode;
}

export interface SelectedItems {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface GlobalContextValues {
  confirmedOrder: boolean;
  setConfirmedOrder: (confirmedOrder: boolean) => void;
  selectedItems: SelectedItems[];
  setSelectedItems: Dispatch<SetStateAction<SelectedItems[]>>;
}

const GlobalContext = createContext<GlobalContextValues | undefined>(undefined);

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("Global context is invalid");
  }
  return context;
};

const GlobalContextProvider = ({ children }: Props) => {
  const [confirmedOrder, setConfirmedOrder] = useState(false);
  const [selectedItems, setSelectedItems] = useState<SelectedItems[]>([]);

  return (
    <GlobalContext.Provider
      value={{
        confirmedOrder,
        setConfirmedOrder,
        selectedItems,
        setSelectedItems,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
