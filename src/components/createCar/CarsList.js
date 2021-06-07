import React, { useContext, useState, useEffect } from "react";
import { ApiContext } from "../../context/Context";
import { ApiContext as  ApiContext2} from "../../context/ContextId";
import Cars from './Cars';
import './carsList.scss'


export default function CarsList(props) {
    const context = useContext(ApiContext);
    const context2 = useContext(ApiContext2);

     const deleteItem =async (id) => {
        console.log ( id)

         await fetch (`http://localhost:3001/garage/${id}`,{
            method: 'DELETE',

        })
    };


   const findItem = (arr, id) => arr.find((el) => el.id === id);
    const selectItem = (id) => {

        let element = findItem(context.state, id);
        context2.setId(element.id );
    };
    console.log (context2)
    // const findItem = (arr, id) => arr.find((el) => el.id === id);
    // const deleteItem = (id) => {
    //     console.log ( id)
    //      let element = findItem(context.state, id);

    //      const index = context.state.indexOf(element);
    //      let copyOfItems = [...context.state];
    //      copyOfItems.splice(index, 1);
    //      context.setState(copyOfItems);
    // };
    // console.log(context.state)
    return (
        <div className="carsList">
        <h3>Garage ({context.state.length})</h3>
       { context.state.map(el=> <Cars key={el.id} data={el} deleteItem={deleteItem} selectItem={selectItem}/>) }

        </div>
    )
}
