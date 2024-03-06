
import { MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';



const Citys = (props) => {
   
    const allstate=[]
const [value, setvalue] = useState('');
    const handleChange = (event) => {
      setvalue(event.target.value);
      
    };
   
    
    const [state, setState] = useState();
     const [swostate, setswostate] = useState(false);
          useEffect(() => {
            fetch('https://countriesnow.space/api/v0.1/countries/states').then((respect)=>{
              respect.json().then((resp)=>resp.data[99].states.map((data)=>
              allstate.push(data.name)))}).then((setState(allstate))).then((setTimeout(() => {
                setswostate(true)
              }, 1000)))
            
        }, [])

         

       
    



  
  return (
    <div>
     
 
            <Box sx={{ width: '100%', mb: 3 }}>
            <FormControl fullWidth>
            <InputLabel >State</InputLabel>
           <Select
           value={value}
           label="States"
           onChange={handleChange}
           >
           { swostate?
            state.map((index,i)=>{
              return <MenuItem onClick={()=>props.state(index)} key={i} value={i} >{index}</MenuItem>
            }): null
           }
           </Select>
           </FormControl>
           </Box>
          
 

 
 
 

      
    </div>
  )
}

export default Citys

