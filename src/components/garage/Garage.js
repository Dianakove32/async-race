import React,{ useContext } from 'react'
import CarsList from '../createCar/CarsList';
import CreateCar from '../createCar/CreateCar';
import Navbar from '../navbar/Navbar';
import RaseResetGenerate from '../race-recet-generate/RaseResetGenerate';
import UpdateCar from '../updateCar/UpdateCar';


export default function Garage() {
     return (
        <div>
            <Navbar isActiveLinkGarage={true} />
            <div className="wrapper">
            <CreateCar />
            <UpdateCar />
            <RaseResetGenerate />
            {/* <h3>Garage ({context.state.length})</h3> */}
            <CarsList />
        </div></div>
    )
}
