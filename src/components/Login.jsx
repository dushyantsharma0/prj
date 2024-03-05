import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Container, TextField } from '@mui/material';
import Citys from './citys';
import {useNavigate } from 'react-router-dom'

const Login = () => {
  const [name, setname] = useState('');
  const [state, setstate] = useState();
    const getstat =(data) =>{
        setstate(data);
      }
      const navigate=useNavigate()

      function GotoMain(){
          const  requestoption={
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
              name:name,
              state:state
            })
          }
          fetch('https://prjbackend.vercel.app/data',requestoption).then((resp)=>{
            resp.json().then((res)=>{console.log(res)})
          })
        if(name!=''){
          localStorage.setItem('name',name);
          navigate('./main')
        }
       
      }

      let navigate1=useNavigate()
      useEffect(() => {
          const hasLocalstorage = localStorage.getItem('name');
          if (hasLocalstorage){
            if(hasLocalstorage==='khul ja sim sim'){
              navigate1('/admin')
            }else{
              navigate1('/main');
            }
           
          }
        }, [navigate]);
  return (
  
    <div style={{background:'linear-gradient( #b7ceff, #cdffb7'}}>
  <Container sx={{  background: 'linear-gradient( #ff0000, #0000ff)',display:'flex', width:'100wh' ,height:'100vh',justifyContent:'center',alignItems:'center'}}>
  
  <Paper sx={{background:'linear-gradient( #bc95c6,#ffdfb7)',p: 2}} >
  <h1 style={{textTransform:"uppercase"}}>Enter your Name and  go to home page</h1>
  <Paper sx={{  p: 2, display: 'flex', flexDirection: 'column',
     alignItems: 'center', justifyContent: 'center',width:'40%',margin:"0 auto"}}>
       
      <form  >
      <TextField onChange={(e)=>setname(e.target.value)} sx={{ marginBottom:"5px",width:"200px"}} label='name'/>
        <Citys state={getstat}/>
            <Button  onClick={GotoMain} variant="contained" color="primary">
                Login
            </Button>
      </form>
            </Paper>
  </Paper>
   
            </Container>
            </div>
  
  )
}

export default Login