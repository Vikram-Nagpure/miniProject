import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Description = () => {
    const [description,setdescription] = useState({});

    const params=useParams()
    const descriptiondata=()=>{
        axios.get(` http://localhost:3000/posts/${params.id}`)
        .then((res)=>{
           setdescription(res.data)
        })
        .catch((err)=>{console.log(err)})
    }
    useEffect(()=>{
        descriptiondata()
    },[])
    return (
        <div className="main-container" style={{
          border: '1px solid #ddd',
          borderRadius: '10px',
          padding: '20px',
          maxWidth: '400px',
          margin: '20px auto',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div className="sub-one" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <img src={description.image} alt="" style={{
              width: '100%',
              borderRadius: '10px'
            }} />
            <div style={{
              padding: '20px',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontSize: '1.8em',
                color: '#333',
                margin: '10px 0'
              }}>{description.title}</h2>
            </div>
          </div>
          <div className="sub-two" style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px'
          }}>
            <h3 style={{
              fontSize: '1.5em',
              color: '#e91e63',
              margin: '10px 0'
            }}><span style={{color:'black'}}>Price:</span><br/> ${description.price}</h3>
            <p style={{
              fontSize: '1em',
              color: '#666',
              margin: '10px 0',
              lineHeight: '1.6'
            }}>{description.description}</p>
            <h4 style={{
              fontSize: '1.2em',
              color: '#009688',
              margin: '10px 0'
            }}>{description.category}</h4>
          </div>
        </div>
  )
}

export default Description