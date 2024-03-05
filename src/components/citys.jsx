
import { MenuItem, Select } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';



const Citys = (props) => {
    const Country=[]
    const allstate=[]
    const [data , setdata ] = useState();
    const [yes, setYes] = useState(false);
    const [countryvalue, setcountryvalue] = React.useState('');
    const [statevalue, setstatevalue] = useState('');
    let [count,setcount] = useState(99);
    const [isstate, setisstate] = useState(false);
    const [state, setState] = useState();
    
    // todo:data send parent
    const [sendstate, setsendstate] = useState('');


   useEffect(() => {
    fetch('https://countriesnow.space/api/v0.1/countries/states').then((respect)=>{
        respect.json().then((resp)=>resp.data.map((data)=>Country.push(data.name)))
    }).then(setdata(Country)).then(   setInterval(() => {
    setYes(true)
    }, 100))
   }, []);
   const handleChange = (event) => {
    setcountryvalue(event.target.value);
  };

function handleChange2(e){
    setstatevalue(e.target.value)
    setsendstate(e.target.value)
  

}



  function country(e,index){

//   console.log(e)
//   console.log(index-1)
  setcount(index-1)
  
  setTimeout(() => {
    fetch('https://countriesnow.space/api/v0.1/countries/states').then((respect)=>{
        respect.json().then((resp)=>resp.data[index-1].states.map((data)=>
        allstate.push(data.name)))}).then((setState(allstate))).then(allstate.map((index)=>{
            
        }))
  }, 500);
  setTimeout(() => {
    
    setisstate(true)
  }, 1000);
  }

  return (
    <div>
     
    
    {
      yes?
      <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{width:'200px',marginBottom:"6px"}}>
        <InputLabel id="demo-simple-select-label">country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={countryvalue}
          label="country"
          onChange={handleChange}
        >
          
      {data.map((index,i)=>{
            
            
            return <MenuItem key={i} onMouseEnter={(()=>setisstate(false))}   onClick={()=>country(index,i+1)} value={i+1}>{index}</MenuItem>
        })}
        </Select>
      </FormControl>
    </Box>
     
     :null
    }
 


 {isstate?
 <FormControl sx={{width:'200px',marginBottom:"6px" }}>
 <InputLabel id="demo-simple-select-label">State</InputLabel>
 <Select   labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={statevalue}
          label="state"
          onChange={handleChange2}  sx={{width:'200px'}}>
 
 { state.map((index,i)=>{
    
    return <MenuItem key={i}  onClick={()=>props.state(index)} value={i}>{index}</MenuItem>
 })}
 
 </Select>
</FormControl>
 :
 <FormControl sx={{width:'200px',marginBottom:"6px"}}>
 <InputLabel id="demo-simple-select-label">state</InputLabel>
 <Select disabled  value={''}></Select>
</FormControl>
 }
 

      
    </div>
  )
}

export default Citys

