import React from 'react'

function ParameterOptions ({letShowCletchatka, letShowProtein, letShowBev, letShowUglevod, onAddParameter, parTitle, id, letAddCletchatka})  {

    function handlePlusPar () {
        onAddParameter({parTitle, id})
        letShowCletchatka({id})  
        letShowProtein({id})
        letShowBev({id})
        letShowUglevod({id})
    }

   
    
    return (
        <li>
            <i className="fas fa-plus-circle" onClick={handlePlusPar}></i>
            <div>{parTitle}</div>
        </li>)
        
    

};

export default ParameterOptions;