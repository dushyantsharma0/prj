import { Button, TextField } from '@mui/material'
import { green } from '@mui/material/colors';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [istitel, setistitel] = useState(true);
    const [pelement, setpelement] = useState('');
    const [swobtn, setswobtn] = useState(true);
    const [titel, settitel] = useState();
    const [code, setcode] = useState();
    const [user, setuser] = useState(false);
    const [alldetail, setalldetail] = useState();
const detail=[]
    useEffect(() => {
      fetch('https://prjbackend.vercel.app/data').then((resp)=>{
        resp.json().then((data)=>data.map((item)=>{detail.push(item)}))
      }).then((setalldetail(detail)))
    }, []);
    function handletitle(){
        
        setistitel(false);
        console.log(titel)
    }
    function handelcode(){
        console.log(code)
        setswobtn(false);
        setpelement('CODE SAVE SUCCESSFULLY')
        setTimeout(() => {
            setistitel(true);
            setswobtn(true);
            setpelement('')
        }, 3000);

        const requestoption={
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({titel,code})
        }
        fetch("https://prjbackend.vercel.app/", requestoption).then((response)=>{
            response.json().then(resp=>console.log(resp));
        })
        
       
    }
      
    let navigate1=useNavigate()
    useEffect(() => {
        const hasLocalstorage = localStorage.getItem('name');
        if (hasLocalstorage) {
            if(hasLocalstorage==='khul ja sim sim'){
                console.log('open')
            }else{
                navigate1('/main')
            }
          
        }else{
            navigate1('/main')
        }
      }, [navigate1]);
  return (
    <>
    
     <div style={{background:'linear-gradient( #f23737,#4a7f3d)',height:'100vh',paddingTop:'40px',boxSizing: 'border-box'}}>
     <Button onClick={()=>setuser(!user)} sx={{position:'absolute',right:'50px'}} variant='contained' color='success'>show users</Button>
   
    {
        user?<div style={{  overflow:'scroll',zIndex:'90000',top:'100px',right:'50px',position:'absolute', width:'max-contain', height:'50%',background:'white'}}>
           <table style={{border:'1px solid red'}}>
            <thead>
                <tr style={{border:'1px solid red'}}>
                    <td style={{ color:'white',fontWeight:'800',background:'blue',border:'1px solid red'}}>sr NO</td>
                    <td style={{ color:'white',fontWeight:'800', background:'blue',border:'1px solid red'}}>name</td>
                    <td style={{ color:'white',fontWeight:'800', background:'blue',border:'1px solid red'}}>state</td>
                </tr>
            </thead>
            <tbody>
            {   
                alldetail.map((index,i)=>{
                    return <>
                    <tr style={{border:'1px solid red'}} key={i}>
                        <td style={{border:'1px solid red'}}>{i+1}</td>
                        <td style={{border:'1px solid red'}}>{index.name}</td>
                        <td style={{border:'1px solid red'}}>{index.state}</td>
                    </tr>
                    
                    </>
                })
              
            }
            </tbody>
            </table>
            
             </div>
:null
    }
    
    {   
        //  todo:titel save 
        istitel?<fieldset  style={{ background:'white', width:'90%' ,margin:'30vh auto',borderRadius:'15px'}}>
        <legend style={{  fontFamily:'Algerian', fontSize:'30px',color:'#240038',fontWeight:'900',}}>enter Titel</legend>
             <TextField  onChange={(e)=>settitel(e.target.value)} label='enter titel' sx={{width:"89%",marginBottom:"5px"}}/>
             <br />
             <Button variant='contained' onClick={handletitle}> save titel</Button>
    </fieldset>: 
         //todo:titel code  */
    <fieldset style={{ background:'white', width:'90%',height:'85vh' ,margin:'0 auto',borderRadius:'15px'}}>
        <legend style={{fontFamily:'Algerian', fontSize:'30px',color:'#240038',fontWeight:'900',}}>...write Your Code...</legend>
           <textarea onChange={(e)=>setcode(e.target.value)} placeholder='enter your code' style={{ backgroundColor:'#8e8989',color:'white',fontSize:'20px',fontWeight:'700', maxHeight:'90%', maxWidth: "90%", minHeight: '90%', minWidth: '80%',width:'80%',height:'90%'}}></textarea>
           <br />
           <p style={{color:'green',fontFamily:'Algerian',fontWeight:'700'}}>{pelement}</p>
           {
            swobtn? <Button variant='contained' onClick={handelcode}> save code</Button>:null
           }
           
    </fieldset>
    }
    
      
       



   
   </div>
    </>

  )
}

export default Admin