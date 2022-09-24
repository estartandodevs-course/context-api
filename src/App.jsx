import { useState } from "react";
import { useContext } from "react";
import { Card } from "./components/Card";
import { Modal } from "./components/Modal";
import { ProductsContext } from "./contexts/ProductsContext";

function App() {
  const { products } = useContext(ProductsContext);
  const [productView, setProductView] = useState(null);

  const productsSelected = products.find(
    (product) => product.id === productView
  );
  return (
    <>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            onClick={() =>
              setProductView((prev) =>
                prev === product.id ? null : product.id
              )
            }
          >
            {product.title}
          </li>
        ))}
      </ul>
      {productView && (
        <Modal>
          <Card product={productsSelected}>{productsSelected?.title}</Card>
        </Modal>
      )}
    </>
  );
}

export default App;
