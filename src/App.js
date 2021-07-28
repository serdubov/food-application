import './App.css';
import React from 'react'
import Header from './components/Header';
import FoodOptions from './components/FoodOptions';
import ParameterOptions from './components/ParameterOptions';
import Table from './components/Table';
import { Button } from 'antd';
import "antd/dist/antd.css";

const params = [
  { id: 1, parTitle: 'Клетчатка',  plusIcon: "fas fa-plus-circle"},
  { id: 2, parTitle: 'Протеин',  plusIcon: "fas fa-plus-circle"},
  { id: 3, parTitle: 'БЭВ', plusIcon: "fas fa-plus-circle"},
  { id: 4, parTitle: 'Углеводы',  plusIcon: "fas fa-plus-circle"}
];



function App() {
  
  // State для циклов (определение рейтинговых мест)
  const [inCletch, setInCletch] = React.useState ([]);
  const [inProt, setInProt] = React.useState ([]);
  const [inBev, setInBev] = React.useState([]);
  const [inUglevod, setInuglevod] = React.useState([]);
  //

  const [srchFood, setSrchFood] = React.useState('');
  const [addToTable, setAddToTable] = React.useState([]);
  const [paramsSearch, setParamsSearch] = React.useState('');
  const [addParToTable, setAddparToTable] = React.useState([]);
  const [showCletchatka, setShowCletchatka] = React.useState(false);
  const [showProtein, setShowProtein] = React.useState(false);
  const [showBev, setShowBev] = React.useState(false);
  const [showUglevod, setShowUglevod] = React.useState(false);
  const [addCletchatka, setAddCletchatka] = React.useState([])


  const [rozhOnMultiply, setrozhOnMultiply] = React.useState(1);
  
  const onRozh = (event) => {
    setrozhOnMultiply(Number(event.target.value))}

  const [OvesOnMultiply, setOvesOnMultiply]=React.useState(1)

  const onOves =(event)=>{
    setOvesOnMultiply(Number(event.target.value))}
   
  const [lugovayaMultiply, setLugovayaMultiply] = React.useState(1)

  const onLugovaya=(event)=>{
    setLugovayaMultiply(Number(event.target.value))
  }

  const [pshenkaMultiply, setPshenkaMultiply] = React.useState(1)

  const onPshenka=(event)=>{
    setPshenkaMultiply(Number(event.target.value))
  }
 
  const arr = [
    {
      id: 1,
      foodTitle: 'Рожь',
      plusIcon: "fas fa-plus-circle",
      CletchatkaNums: inCletch[0],
      sence1: 45.2*rozhOnMultiply,
      ProtNums: inProt[0],
      sence2: 13.9*rozhOnMultiply,
      BevNums: inBev[0],
      sence3: 89.2*rozhOnMultiply,
      UglevodNums: inUglevod[0],
      sence4: 50.2*rozhOnMultiply
    },
    {
      id: 2,
      foodTitle: 'Овес',
      plusIcon: "fas fa-plus-circle",
      CletchatkaNums: inCletch[1],
      sence1: 13.7*OvesOnMultiply,
      ProtNums: inProt[1],
      sence2: 52.3*OvesOnMultiply,
      BevNums: inBev[1],
      sence3: 10.1*OvesOnMultiply,
      UglevodNums: inUglevod[1],
      sence4: 12.5*OvesOnMultiply
    },
    {
      id: 3,
      foodTitle: 'Пшеница',
      plusIcon: "fas fa-plus-circle",
      CletchatkaNums: inCletch[2],
      sence1: 11.2*pshenkaMultiply,
      ProtNums: inProt[2],
      sence2: 22.9*pshenkaMultiply,
      BevNums: inBev[2],
      sence3: 33.2*pshenkaMultiply,
      UglevodNums: inUglevod[2],
      sence4: 88.1*pshenkaMultiply
    },
    {
      id: 4,
      foodTitle: 'Луговая трава',
      plusIcon: "fas fa-plus-circle",
      CletchatkaNums: inCletch[3],
      sence1: 19.2*lugovayaMultiply,
      ProtNums: inProt[3],
      sence2: 2.9*lugovayaMultiply,
      BevNums: inBev[3],
      sence3: 3.5*lugovayaMultiply,
      UglevodNums: inUglevod[3],
      sence4: 24.3*lugovayaMultiply
    }
  ];
  // Начало раздела выставления рейтинговых мест


  //Цикл для клетчатки (определение мест)

  const cletchCycle = (i, j) => {
    const final = [];
    const simpleArr = [...arr].map((obj) => { return (obj.sence1) });
    const improvedArr = [...arr].sort((a, b) => b.sence1 - a.sence1).map((obj) => { return (obj.sence1) })
    for (i = 0; i < simpleArr.length; i++) {
      for (j = 0; j < improvedArr.length; j++) {
        if (simpleArr[i] === improvedArr[j]) {
          final.push(j + 1)
        }
      }
    }
    return final

  }

// SetState для Клетчатки

  const cletchFinal = cletchCycle()

  const cletchPlaces = () => {
    setInCletch(cletchFinal)
  }

  //Цикл для протеина (определение мест)

  const protCycle = (x, y) => {
    const finalProt = [];
    const protArr = [...arr].map((obj) => { return (obj.sence2) });

    const improvedProtArr = [...arr].sort((a, b) => b.sence2 - a.sence2).map((obj) => { return (obj.sence2) })

    for (x = 0; x < protArr.length; x++) {
      for (y = 0; y < improvedProtArr.length; y++) {
        if (protArr[x] === improvedProtArr[y]) {
          finalProt.push(y + 1)
        }
      }
    }

    return finalProt
  }

  const protFinal = protCycle()

// SetState для Протеина 

const protPlaces = () => {
  setInProt(protFinal)
}

//Цикл для БЭВ (определение мест)

const bevCycle = (x, y) => {
  const finalBev = [];
  const bevArr = [...arr].map((obj) => { return (obj.sence3) });

  const improvedBevArr = [...arr].sort((a, b) => b.sence3 - a.sence3).map((obj) => { return (obj.sence3) })

  for (x = 0; x < bevArr.length; x++) {
    for (y = 0; y < improvedBevArr.length; y++) {
      if (bevArr[x] === improvedBevArr[y]) {
        finalBev.push(y + 1)
      }
    }
  }

  return finalBev
}

const bevFinal = bevCycle()

// SetState для БЭВ

const bevPlaces = () => {
  setInBev(bevFinal)
}

//Цикл для Углеводов (определение мест)

const uglevodCycle = (x, y) => {
  const finalUglevod = [];
  const uglevodArr = [...arr].map((obj) => { return (obj.sence4) });

  const improvedUglevodArr = [...arr].sort((a, b) => b.sence4 - a.sence4).map((obj) => { return (obj.sence4) })

  for (x = 0; x < uglevodArr.length; x++) {
    for (y = 0; y < improvedUglevodArr.length; y++) {
      if (uglevodArr[x] === improvedUglevodArr[y]) {
        finalUglevod.push(y + 1)
      }
    }
  }

  return finalUglevod
}

const uglevodFinal = uglevodCycle()

// SetState для Углеводов

const uglevodPlaces = () => {
  setInuglevod(uglevodFinal)
}

// Окончание раздела выставления рейтинговых мест

  const letAddCletchatka = (obj) => {
    setAddCletchatka(...addCletchatka, obj)
  }
  

  const letShowCletchatka = (id) => {
    if (id===1) {
    setShowCletchatka(true)}
}

const letShowProtein = (id) => {
  if (id===2) {
  setShowProtein(true)} 
}

const letShowBev = (id) => {
  if (id===3) {
  setShowBev(true)}
}

const letShowUglevod = (id) => {
  if (id===4) {
  setShowUglevod(true)}
}




  const searchParams = (event) => {
      setParamsSearch(event.target.value)
  }

  const onSearch = (event) => {
  setSrchFood(event.target.value)};

  const onAddtoCount = (obj) => {
    if (addToTable.find((item)=>item.id===obj.id)) {
      addToTable.filter((item) =>item.id!==obj.id)
    }
    else {
      setAddToTable([...addToTable,obj])
      
    }
  };

  const onAddParameter = (obj) => {
    if (addParToTable.find((item)=>item.id===obj.id)) {
      addParToTable.filter((item) =>item.id!==obj.id)
    }
    else if (obj.id===1){
    setAddparToTable([...addParToTable,obj])}
   
  }


  const onDelete = (id) => {
    setAddToTable((prev)=>prev.filter((item)=>item.id!==id))
  }


  const [state,setState] = React.useState({
    arr: arr,
    sort: 'desc',
    sortField: 'sence1',
    maxCletch: '',
    maxProt: '',
    maxBv: '',
    maxUgl:''
    
   
  })
 

  const [sortCletch, setSortCletch] = React.useState(arr)

  const showMelol = () => {
    const newArr = arr.sort((a,b)=>b.sence1-a.sence1)
    setSortCletch (newArr)
    
  }

  const sortByCletch = () => {
  const sortedCletch = arr.sort((a,b)=>b.sence1-a.sence1)
  setState ({
    arr: sortedCletch,
  })
  }

  const sortByProtein = () => {
    const sortedProtein = arr.sort((a,b)=>b.sence2-a.sence2)
    setState ({
      arr: sortedProtein,
    })
    }
  
 const sortByBev = () => {
  const sortedBev = arr.sort((a,b)=>b.sence3-a.sence3)
  setState ({
    arr: sortedBev,
  })
  }

  const sortByUglevod = () => {
    const sortedUglevod = arr.sort((a,b)=>b.sence4-a.sence4)
    setState ({
      arr: sortedUglevod,
    })
    }

  return (
    <div className="App">
      <div className="bodyApp">
        <Header/>
        <div className='mainTable'>
          <Button type="primary">Primary Button</Button>
          <div className="compareBlock">
            <div className='addFood'>
              <h5>Выберите добавку..</h5>
              <div className='foodSearch'>
                <input onChange={onSearch} type='text' placeholder='Поиск...'></input>
                <i className="fas fa-search"></i>
              </div>
              <div className='addFooditem'>
                <ul>
                  {arr.filter((obj) => obj.foodTitle.toLowerCase().includes(srchFood.toLowerCase()))
                    .map((obj, id) => {
                      return (
                        <FoodOptions 
                          key = {id}
                          foodTitle = {obj.foodTitle}
                          plusIcon = {obj.plusIcon}
                          id = {obj.id}
                          cletchatkaTitle = {obj.Cletchatka}
                          cletchatkaValue= {obj.sence1}
                          proteinTitle = {obj.Protein}
                          proteinValue = {obj.sence2}
                          BevTitle = {obj.Bev}
                          BevValue = {obj.sence3}
                          UglevodValue={obj.sence4}
                          onAdd = {onAddtoCount}

                        />
                        )
                    })}
                </ul>
              </div>
            </div>
            <div className='addParameter'>
            <h5>Выберите параметры..</h5>
            <div className='parameterSearch'>
                <input onChange={searchParams} type='text' placeholder='Поиск...'></input>
                <i className="fas fa-search"></i>
            </div>
            <div className='addFooditem'>
                <ul>
                {params.filter((obj)=>obj.parTitle.toLowerCase().includes(paramsSearch.toLowerCase()))
                .map((obj)=>{
                  return(
                    <ParameterOptions 
                          id = {obj.id}
                          parTitle = {obj.parTitle}
                          cletchatkaTitle = {obj.Cletchatka}
                          cletchatkaValue= {obj.sence1}
                          proteinTitle = {obj.Protein}
                          proteinValue = {obj.sence2}
                          BevTitle = {obj.Bev}
                          BevValue = {obj.sence3}
                          onAddParameter = {onAddParameter}
                          letShowCletchatka = {(obj)=>letShowCletchatka(obj.id)}
                          letShowProtein = {(obj)=>letShowProtein(obj.id)}
                          letShowBev = {(obj)=>letShowBev(obj.id)}
                          letShowUglevod ={(obj)=>letShowUglevod(obj.id)}
                          letAddCletchatka={letAddCletchatka}
                    />
                    )
                 })}
                </ul>
            </div>
        </div>
        </div>
          <div className="outputBlock">
            <Table
            sortCletch={sortCletch}
            showMelol={showMelol}
            maxCletch={state.maxCletch}
            maxProt={state.maxProt}
            maxBv={state.maxBv}
            maxUgl={state.maxUgl}
            sortByCletch={sortByCletch}
            sortByProtein={sortByProtein}
            sortByBev={sortByBev}
            sortByUglevod={sortByUglevod}
            sortField={state.sortField}
            sort={state.sort}
            arr={state.arr}
             showCletchatka={showCletchatka}
             showProtein ={showProtein}
             showBev={showBev}
             showUglevod={showUglevod}
             onDelete = {onDelete} 
             onRozh={onRozh}
             rozhInput={rozhOnMultiply}
             cletchPlaces={cletchPlaces}
             protPlaces={protPlaces}
             bevPlaces={bevPlaces}
             uglevodPlaces={uglevodPlaces}
             onOves={onOves}
             ovesInput={OvesOnMultiply}
             onLugovaya={onLugovaya}
             lugovayaInput={lugovayaMultiply}
             onPshenka={onPshenka}
             pshenkaInput={pshenkaMultiply}

          />
          </div>

        </div>
        <div className="footerApp">

        </div>
      </div>
    </div>
  );
}

export default App;
