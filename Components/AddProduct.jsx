import axios from 'axios';
import React, { useState } from 'react'
const initialstate = {
    title:"",
    description:"",
    price:"",
    image:"",
    category:""
}

const AddProduct = () => {
    const [product, setProduct] = useState(initialstate)
    const {title,description,price,image,category}=product
    const handleChange=(e)=>{
        setProduct({...product,[e.target.name]:[e.target.value]})
    }
    const handleForm = (e)=>{
        e.preventDefault();
        console.log(product)
        axios.post("http://localhost:3000/posts",product)
        .then((res)=>{
            alert("Dekho Woh aa gaya")
            
        })
        .catch((err)=>{
            alert("Kuch to gadbad hai")
        })
    }
    return (
        <div style={{
          maxWidth: '500px',margin: '50px auto',padding: '20px',border: '1px solid #ddd',borderRadius: '10px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',fontFamily: 'Arial, sans-serif',backgroundColor: '#fff'}}>
          <h1 style={{textAlign: 'center',color: '#333',marginBottom: '20px'}}>Add Product</h1>

        <form action="" onSubmit={(e)=>handleForm(e)} style={{display: 'flex',flexDirection: 'column',gap: '15px'}}>

            <input type="text" name="title" value={title} onChange={(e)=>handleChange(e)} placeholder="Product Name" style={{padding: '10px',borderRadius: '5px',border: '1px solid #ddd',fontSize: '1em'}} />

            <input name="price" value={price} onChange={(e)=>handleChange(e)} type="text" placeholder="Product Price" style={{padding: '10px',borderRadius: '5px',border: '1px solid #ddd',fontSize: '1em'}} />

            <input name="description" value={description} onChange={(e)=>handleChange(e)} type="text" placeholder="Product Description" style={{padding: '10px',borderRadius: '5px',border: '1px solid #ddd',fontSize: '1em'}} />

            <input name="image" value={image} onChange={(e)=>handleChange(e)} type="text" placeholder="Product Image" style={{padding: '10px',borderRadius: '5px',border: '1px solid #ddd',fontSize: '1em'}} />

            <select name="category" value={category} onChange={(e)=>handleChange(e)} style={{padding: '10px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '1em'}}>
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
              <option value="beauty">Beauty</option>
              <option value="sports">Sports</option>
            </select>

            <input type="submit" value="Add Product" style={{padding: '10px',borderRadius: '5px',border: 'none',backgroundColor: '#009688',color: '#fff',fontSize: '1em',cursor: 'pointer'}} />
          </form>
        </div>
      );
    };
    

export default AddProduct