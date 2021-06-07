import React,{  useState, useContext } from 'react';
import { ApiContext } from "../../context/Context";
import CarsList from './CarsList'


export default function CreateCar() {
    const context = useContext(ApiContext);
    // const [color, setColor] = useState('')
    // const [model, setModel] = useState('')
    const [data,setData] = useState({color:'', name:''})
    function setCarColor(e) {
        let color = e.target.value
        if(!color)return
        setData({
            ...data,
            color:color})
    }
    // function setCarColor(e) {
    //     let color = e.target.value
    //     setColor(color)
    // }
    function setCarModel(e) {
        let model = e.target.value
        if(!model)return
        setData({
            ...data,
            name:model})
    }

 async function  createCar(){
    console.log('cars')
      await fetch ('http://localhost:3001/garage',{
         method: 'POST',
         headers:{
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
     })
    //  const cars=await res.json()
    //  console.log(cars)
    //  return cars
  }


    return (
        <div>
            <input type='text' onChange={(e) => setCarModel(e)}/>
            <input type="color" value={data.color} onChange={(e) => setCarColor(e)} />
            <button className="btn" onClick={createCar}  >Create car</button>
            {/* <CarsList data={state}/> */}
        </div>
    )
}
