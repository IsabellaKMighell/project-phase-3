import React, {useState} from "react";

function ArtCard({art}) {
  const[inStock,setInStock]=useState(true)
  const{name, image, price}= art

  function handleInStock(){
    setInStock(!inStock)
  }

  return (
    <li className="card">
      <img src={image} alt={"art name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleInStock}>Available</button>
      ) : (
        <button onClick={handleInStock}>Sold</button>
      )}
    </li>
  );
}

export default ArtCard;