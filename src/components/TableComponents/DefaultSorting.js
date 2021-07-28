import React from 'react'

function DefaultSorting ({addToTable, showCletchatka, showProtein, showBev, showUglevod, onDelete} ) {
    return (
        addToTable.map((obj) => {
            return (
            <tbody>
                <td>
                    <span>{obj.foodTitle}</span>
                    <i className="far fa-times-circle" onClick={()=>onDelete(obj.id)}></i>
                </td>
                    <td className={showCletchatka ? 'Cletchatka active': 'Cletchatka'}>{showCletchatka ? `${obj.cletchatkaValue}` : `${obj.cletchatkaValue}`}</td>
                    <td className={showProtein ? 'Protein active': 'Protein'}>{showProtein ? `${obj.proteinValue}` : `${obj.proteinValue}`}</td>
                    <td className={showBev ? 'Bev active': 'Bev'}>{showBev ? `${obj.BevValue}` : null}</td>
                    <td className={showUglevod ? 'Uglevod active': 'Uglevod'}>{showUglevod ? `${obj.UglevodValue}` : null}</td>
            </tbody>
            )})
    )
}

export default DefaultSorting;