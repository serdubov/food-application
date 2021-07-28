import React from 'react'



function FoodOptions({plusIcon,foodTitle, id,  cletchatkaTitle, cletchatkaValue, proteinTitle, proteinValue, BevTitle, BevValue, UglevodValue, onAdd}) {

 
    function handlePlus () {
        onAdd({foodTitle, id,  cletchatkaTitle, cletchatkaValue, proteinTitle, proteinValue, BevTitle,BevValue, UglevodValue})
    }

    return (     
        <li>
            <i onClick={handlePlus} className={plusIcon}></i>
            <div>{foodTitle}</div>
        </li>
    )
};

export default FoodOptions;