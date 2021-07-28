import React from 'react'




function Table({ final, onRozh, ovesInput, onOves, lugovayaInput, onLugovaya, pshenkaInput, onPshenka,
    maxCletch, maxProt, maxBv, maxUgl, arr, sortByCletch, sortByProtein, sortByBev, sortByUglevod, onDelete, showCletchatka, showMelol,
    showProtein, showBev, showUglevod, cletchPlaces, protPlaces, bevPlaces, uglevodPlaces }) {



    const foodInputs = (foodTitle, index) => {
        if (foodTitle === 'Рожь') {
            return (<input type='text' onChange={onRozh} />)
        }
        if (foodTitle === 'Овес') {
            return (<input type='text' onChange={onOves} />)
        }
        if (foodTitle === 'Луговая трава') {
            return (<input type='text' onChange={onLugovaya} />)
        }
        if (foodTitle === 'Пшеница') {
            return (<input type='text' onChange={onPshenka} />)
        }
    }


    const Multiply = (foodTitle, item, index) => {


        if (foodTitle === 'Рожь') {
            return (item).toFixed(2)
        }
        if (foodTitle === 'Луговая трава') {
            return (item).toFixed(2)
        }
        if (foodTitle === 'Пшеница') {
            return (item).toFixed(2)
        }

        if (foodTitle === 'Овес') {
            return (item).toFixed(2)
        }
    }



    const showPlaces = () => {
        cletchPlaces()
        protPlaces()
        bevPlaces()
        uglevodPlaces()
    }



    return (
        <table>
            <thead>
                <tr>
                <th className='calculatePlaces'>
                        <span>Рассчитать места</span>
                        <i class="fas fa-calculator"></i>
                    </th>
                    <th className='showPlaces'>
                        <span onClick={() => showPlaces()}>Показать места</span>
                        <i className="fas fa-trophy"></i>
                    </th>
                    <th className={showCletchatka ? 'showCletchatka active' : 'showCletchatka'} onClick={sortByCletch}>
                        <div className='clecthatkaTitle'>Клетчатка <small>{maxCletch}</small></div>
                    </th>
                    <th className={showProtein ? 'showProtein active' : 'showProtein'} onClick={sortByProtein}>Протеин <small>{maxProt}</small></th>
                    <th className={showBev ? 'showBev active' : 'showBev'} onClick={sortByBev}>БЭВ <small>{maxBv}</small></th>
                    <th className={showUglevod ? 'showUglevod active' : 'showUglevod'} onClick={sortByUglevod}>Углеводы <small>{maxUgl}</small></th>
                </tr>
            </thead>
            <tbody>
                {arr.map((item, index) => {
                    return (
                        <tr key={item.id}>
                            <td>
                                <div>{item.CletchatkaNums+item.ProtNums+item.BevNums+item.UglevodNums}</div>
                            </td>
                            <td className='foodIndicator'>
                                <div className='inFoodTitle'>
                                    <div>{item.foodTitle}</div>
                                    <div><small className='freeField'>Урожайность ц/га</small>{foodInputs(item.foodTitle, index)}</div>
                                </div>
                            </td>
                            <td className={showCletchatka ? 'showCletchatka active' : 'showCletchatka'}>
                                <div className='cletchRating'>{item.CletchatkaNums}</div>
                                <div>{Multiply(item.foodTitle, item.sence1)}</div>
                            </td>
                            <td className={showProtein ? 'showProtein active' : 'showProtein'}>
                                <div className='protRating'>{item.ProtNums}</div>
                                {Multiply(item.foodTitle, item.sence2)}
                            </td>
                            <td className={showBev ? 'showBev active' : 'showBev'}>
                                <div className='bevRating'>{item.BevNums}</div>
                                {Multiply(item.foodTitle, item.sence3)}
                            </td>
                            <td className={showUglevod ? 'showUglevod active' : 'showUglevod'}>
                                <div className='bevRating'>{item.UglevodNums}</div>
                                {Multiply(item.foodTitle, item.sence4)}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )

};

export default Table;