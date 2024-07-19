import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Product = () => {
  const [product, setproduct] = useState([]);

  const fetchData = () => {
    axios(" http://localhost:3000/posts")
      .then((res) => {
        setproduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = () => {};
  const handleDelete = (id) => {
    axios
      .delete(` http://localhost:3000/posts/${id}`)
      .then((res) => {
        setproduct((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );

        alert("deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        padding: "20px",
        
      }}
    >
      {product.map((el) => (
          <div
          key={el.id}
           style={{
            boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            alignItems:"center",
            textAlign:"center"
           }} 
          >
            <Link
              style={{ textDecoration: "none" }}
              to={`/description/${el.id}`}
            >
            <h2 style={{ fontSize: "18px", margin: "10px 0" }}>{el.title}</h2>
            <img
              src={el.image}
              alt={el.title}
              height={150}
              width={200}
            />
            <p style={{ fontSize: "16px", margin: "10px 0" }}>${el.price}</p>
            </Link>
            <div>
              <button onClick={() => handleEdit(el.id)}>
                <Link to={`/editpage`}>
                Edit
                </Link>
              </button>
              <button
                onClick={() => handleDelete(el.id)}>
                Delete
              </button>
            </div>
          </div>
      ))}
    </div>
  );
};

export default Product;
