import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

let url = "https://fakestoreapi.com/products";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <div className="contenedor-principal">
        {data.map((product, i) => (
          <div key={i} className="contenedor-producto">
            <img src={product.image} alt=""></img>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
