import React, { useState } from "react";

const Task = () => {
  const [data, setData] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const allPrice = data.reduce((acc, curr) => {
    return acc + parseFloat(curr.price);
  }, 0);

  const onClickHandler = () => {

   if(productName !== '' && price !== ""){
    const newEntry = {
        product: productName,
        price: price
      };
      setData(prevData => [...prevData, newEntry]);
      setProductName("");
      setPrice("");
   }
  };

  return (
    <div className=" max-w-screen-lg mx-auto my-2 ">
      <h1 className=" text-4xl font-bold my-4">Task Four </h1>
      <p className=" text-xl my-4">
        Storing the input data with Product Name and Product Price as an object
        into array, displaying that list data, calculating total Product Price
        using javascript
      </p>
      <div className=" flex flex-col my-4">
        <label htmlFor="" className=" text-xl ">Product Name *</label>
        <input
          type="text"
          className=" border outline-none w-72 rounded p-1"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        {!productName && <p className=" text-red-500" >The Product Name field is required.</p> }
      </div>
      <div  className=" flex flex-col mb-4">
        <label htmlFor="" className=" text-xl ">Price Name *</label>
        <input
          type="number"
          className=" border outline-none w-72 rounded p-1"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
         {!price && <p className=" text-red-500" >The Price Name field is required.</p> }
      </div>
      <button className=" bg-blue-600 text-white p-2 rounded-md" onClick={onClickHandler}>Submit</button>

      <div className=" mt-16 text-3xl font-medium">Output Result</div>
      <div className=" text-xl font-medium my-4">
        Sale Price
        <ul>
          {data.map((item, idx) => {
            return <li key={idx}>{item.product}</li>;
          })}
        </ul>
      </div>
      <div className=" text-xl font-medium my-4">
        Total Price
        <ul>{allPrice}</ul>
      </div>
    </div>
  );
};

export default Task;
