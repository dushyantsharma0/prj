import TextField from '@mui/material/TextField';
import React, { useEffect, useRef, useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ColorizeIcon from '@mui/icons-material/Colorize';
import {useNavigate} from 'react-router-dom'
const Main = () => {

    const [code, setcode] = useState();
    const [swocode, setswocode] = useState(false);
    const [listData, setlistData] = useState();

  
   const [cd, setcd] = useState([
    {name:'rohit'},
    {name:'ajay'},
    {name:'sanjay'},
    {name:'golu'},
    {name:'satbir'},
    {name:'Dharambir'}

   ]);
    const allcode=[]
   

useEffect(() => {
    fetch('https://prjbackend.vercel.app/').then((resp)=>{
        resp.json().then((data)=>data.map((index)=>allcode.push(index)))
    }).then((setcode(allcode),setlistData(allcode))).then(   setInterval(() => {
        setswocode(true)
        }, 500))
 
}, []);

    const [fildvalue, setfildvalue] = useState('');
    const h1Ref = useRef(null);
    const copyValue = (my) => {
        const value =my
           
        navigator.clipboard.writeText(value);
        console.log("Value copied: " + value);
      };
      function sizebig(e){
        e.target.style.width="80vw"
        e.target.style.height="80vh"
      }

      function filterList(e){
        const keyword=e.target.value
        
             const list=code.filter((item) =>{
              return  item.titel.includes(keyword)
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
  return (
    <> 
      
      <h1 style={{background:'linear-gradient( #f23737,#4a7f3d)',
      color:'transparent',WebkitBackgroundClip:'text',
          textShadow:'0px 0px 60px green' 
    }}>HERE YOU GET ALL SOUCRE CODE </h1>
  
    
       
           <TextField onChange={filterList} type='search' label=" Search Sorce Code"/>
      
        { swocode?
              listData.map((resp,i)=>{
                return  <fieldset key={i} style={{ margin:'0 auto',width:'300px',
                background:'linear-gradient( #bc95c6,#ffdfb7)'}}>
                <legend style={{fontSize:'20px',fontFamily:'Algerian',color:'#700707',fontWeight:'800   '}} >{resp.titel}</legend>
            <div style={{ margin:'0',display:'flex', gap:'10px',justifyContent:'right'}}>
             
              <button onClick={()=>copyValue(resp.code)}  style={{background:'transparent',border:'none'}} >  <ContentCopyIcon className='logo' /></button>
                       
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
            }):null
        }
    
    </>
    )
}

export default Main