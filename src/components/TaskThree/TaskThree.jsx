import React, { useState } from 'react'

const TaskThree = () => {
    const OrignalPrice = 100;
    const [storeAllPrice ,setStoreAllPrice]= useState([]);
    const [userBet , setUserBet]= useState('');
    const [error,setError]=useState(false);

    const onClickHandlera = ()=>{
        if(userBet>OrignalPrice){
            setError(false)
            setStoreAllPrice((pre)=>{
                return(
                    [...pre, Number(userBet)]
                )
            })
            setUserBet('');

        }else{
            setError(true); 
        }
    }
    const totalSold = storeAllPrice.reduce((acc,curr)=>acc+=curr,0)
    const profit = storeAllPrice.length === 0 ?  0 : totalSold - OrignalPrice;
     
  return (
    <div>
         <div className=" max-w-screen-lg mx-auto my-2 ">
      <h1 className=" text-4xl font-bold my-4">Task Three </h1>
      <p className=" text-xl my-4">
      Storing input textbox value into an array, displaying that array list, then calculating total sale price & total profit using Javascript
      </p>
      <p>Product Original Price: 100</p>
      <div className=" flex flex-col my-4">
        <label htmlFor="" className=" text-xl ">Sale Price *</label>
        <input
          type="number"
          className=" border outline-none w-72 rounded p-1"
          value={userBet}
          onChange={(e) => setUserBet(e.target.value)}
        />
        {error && <p className=" text-red-500" >The Sale Price field must be greater than or eqaul to 100.</p> }
      </div>
     
      <button className=" bg-blue-600 text-white p-2 rounded-md" onClick={onClickHandlera}>Submit</button>

      <div className=" mt-16 text-3xl font-medium">Output Result</div>
      <div className=" text-xl font-medium my-4">
      Sold Price List
        <ul>
          {storeAllPrice.map((item) => {
            return <li >{item}</li>;
          })}
        </ul>
      </div>
      <div className=" text-xl font-medium my-4">
      Total Sold Price
        <ul>{totalSold}</ul>
      </div>
      <div className=" text-xl font-medium my-4">
      Total Profit
        <ul>{profit}</ul>
      </div>
    </div>
    </div>
  )
}

export default TaskThree