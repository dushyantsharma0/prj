import TextField from '@mui/material/TextField';
import React, { useEffect, useRef, useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ColorizeIcon from '@mui/icons-material/Colorize';
import {useNavigate} from 'react-router-dom'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Button, Paper, Typography } from '@mui/material';

import tiger from '../photo/tiger.png';
import scode from '../photo/scode.jpeg'
const Main = () => {

    const [code, setcode] = useState();
    const [swocode, setswocode] = useState(false);
    const [listData, setlistData] = useState();
   
  
 
    const allcode=[]
   

useEffect(() => {
    fetch('https://prjbackend.vercel.app/').then((resp)=>{
        resp.json().then((data)=>data.map((index)=>allcode.push(index)))
    }).then((setcode(allcode),setlistData(allcode)))
    // .then(   setInterval(() => {
    //     setswocode(true)
    //     }, 1000))
 
}, []);

  
    const    newref=useRef(null)
    const copyValue = (my) => {
        const value =my
        newref.current.style.transition='0.5s ease-in'
        newref.current.style.position='fixed'
     newref.current.style.top='6px'
    
       
        navigator.clipboard.writeText(value);
        console.log("Value copied: " + value);
        setTimeout(() => {
          newref.current.style.transition='0.5s ease-out'
          newref.current.style.top='-60px'
        }, 3000);
      };
      function sizebig(e){
        e.target.style.width="80vw"
        e.target.style.height="80vh"
      }

      function filterList(e){
        const keyword=e.target.value.toLowerCase()
        
             const list=code.filter((item) =>{
              return  item.titel.toLowerCase().includes(keyword)
             })
                    
                    setlistData(list)
                    
          
         
         
      }
      let navigate=useNavigate()
      useEffect(() => {
          const hasLocalstorage = localStorage.getItem('name');
          if (!hasLocalstorage) {
            navigate('/');
          }
        }, [navigate]);
        function copidstyle(e){
           e.target.style.color="green"

           setTimeout(() => {
            e.target.style.color="black"
           }, 3000);
        }
  return (
    <> 
  
     {
      swocode?<>
       <h1 style={{background:'linear-gradient( #f23737,#4a7f3d)',
      color:'transparent',WebkitBackgroundClip:'text',
          textShadow:'0px 0px 60px green' 
    }}>HERE YOU GET ALL SOUCRE CODE </h1>
   <Paper ref={newref} sx={{
     position:'absolute',alignItems:'center',
      fontWeight:'900',color:'green',
       display:'flex', justifyContent:'center',
       width:'150px',height:'40px',top:'-60px', left:'50%', transform: "translate(-50%)"}}>
    <CheckCircleRoundedIcon/> Copied
    </Paper>
       
    <TextField onChange={filterList} type='search' label=" Search Sorce Code"/>
      </>:null
     }
      
        { swocode?
        
              listData.map((resp,i)=>{
                return  <fieldset key={i} style={{ margin:'0 auto',width:'300px',
                background:'linear-gradient( #bc95c6,#ffdfb7)'}}>
                <legend style={{fontSize:'20px',fontFamily:'Algerian',color:'#700707',fontWeight:'800   '}} >{resp.titel}</legend>
            <div style={{ margin:'0',display:'flex', gap:'10px',justifyContent:'right'}}>
             
              <button onMouseDown={copidstyle} onClick={()=>copyValue(resp.code)} 
               style={{background:'transparent',border:'none'}} > 
               
                <ContentCopyIcon   className='logo' />
                
                </button>
                       
            </div>
                <span>
                <textarea onClick={sizebig}  value={resp.code} readOnly style={{
                    
                    maxHeight:'600px', maxWidth: "900px",
                     minHeight: '100px', minWidth: '100px',
                     width: '200px', height: '100px',
                     fontSize:'20px',
                     fontWeight:'900'
                       
                     }} >
                
                     
                 
        
                    </textarea>
                </span>
                </fieldset>
            }):<>
            <br /><br /><br />
               <Typography sx={{fontWeight:'900'}} color='turquoise' variant='h3'> Welcome To Tiger Soucre Code</Typography>
                       <br />
                     <div className='tgr' >

                     <img   src={tiger} alt="" />
                      <Paper sx={{width:'max-content', margin:'0 auto', padding:'5px'}}>
                     
                      <img src={scode} alt="" />
                       
                            <Typography  sx={{fontWeight:'900'}} color='steelblue'>
                            <br /><br />
                               You Get My All Videos Source 
                            
                            <br /><br />
            <Button variant='contained' color='secondary' onClick={()=>setswocode(true)}> GO TO SOurce code</Button>
                            </Typography>
                         </Paper>
                         <img   src={tiger} alt="" />
                     </div>
                   
            </>
        }
    
    </>
    )
}

export default Main