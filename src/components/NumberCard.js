import React , {useState } from 'react'
import './NumberCard.css'
import Button from '@mui/material/Button';

function NumberCard() {
    const [toggle, settoggle] = useState(false)
    const [value, setvalue] = useState([])
    const [toggle2, settoggle2] = useState(true)
    const [Toggle, setToggle] = useState(true)

    const handleChange = (e)=>{
        if((e.target.value).length===10){
            setvalue([...value , e.target.value])
            settoggle2(true)
            settoggle(!toggle)
            const Number = JSON.parse(localStorage.getItem("Number"))
            Number.forEach(element => {
            if(element===e.target.value){
                settoggle2(false)
                settoggle(false)
            }
        });
        }else{
            settoggle(false);
        }
    }

    const click = ()=>{
        setToggle(!Toggle)
    }

    const handleClick = (e) =>{
            localStorage.setItem('Number',JSON.stringify(value));
            click()
    }

    return (
        <div className='num'>
            {Toggle?<>
            <span><b>You Have Won Paytm Gift card of Rs 200$</b></span>
            <div className='input'>
            <input input="number" className='search' onChange={(e)=>handleChange(e)} placeholder='Enter Mobile Number'/>
            {toggle2?<div>Enter mobile number used on man matters</div>:<div>Already Registered</div>}
            </div>
            {
               toggle?
               <Button variant="contained" onClick={(e)=>handleClick(e)}>Wow! Get paytm card here</Button>
               :
               <Button variant="contained" disabled>Wow! Get paytm card here</Button>
            }
            <br/>
            <span>Powered by Gokwik</span>
            </>:
            <>
            <h1>Congratulations Redeemed Successfully!!</h1>
            <br/>
            <button onClick={click}>Go Back</button>
            </>}
        </div>
    )
}

export default NumberCard
