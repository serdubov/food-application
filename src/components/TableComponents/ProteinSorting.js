import React from 'react'

function ProteinSorting ({addToTable, showCletchatka, showProtein, showBev, showUglevod, onDelete} ) {
    return (
        addToTable.sort((a,b)=>b.proteinValue-a.proteinValue).map((obj) => {
            return (
            <tbody>
                <td>
                    <span>{obj.foodTitle}</span>
                    <i className="far fa-times-circle" onClick={()=>onDelete(obj.id)}></i>
                </td>
                    <td className={showCletchatka ? 'Cletchatka active': 'Cletchatka'}>{showCletchatka ? `${obj.cletchatkaValue}` : null}</td>
                    <td className={showProtein ? 'Protein active': 'Protein'}>{showProtein ? `${obj.proteinValue}` : null}</td>
                    <td className={showBev ? 'Bev active': 'Bev'}>{showBev ? `${obj.BevValue}` : null}</td>
                    <td className={showUglevod ? 'Uglevod active': 'Uglevod'}>{showUglevod ? `${obj.UglevodValue}` : null}</td>
            </tbody>
            )})
    )
}

export default ProteinSorting;