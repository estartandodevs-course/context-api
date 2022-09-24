import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { MOCK_PRODUCTS } from "../mocks";

const delay = new Promise((resolve) => setTimeout(resolve, 1000));

export const ProductsContext = createContext();

const { Provider } = ProductsContext;

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      await delay;
      setProducts(MOCK_PRODUCTS);
    })();
  }, []);

  return <Provider value={{ products, setProducts }}>{children}</Provider>;
};
