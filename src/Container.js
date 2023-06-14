import React, { useState } from 'react'
import './Container.css';
import Creditcard from './Creditcard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Container() {
    const [cardname,setcardname]=useState('')
    const [cardnum,setcardnum]=useState('')
    const [card_expm,setcard_expm]=useState('')
    const [card_expy,setcard_expy]=useState('')
    const [card_cvc,setcard_cvc]=useState('')
    const [error,setError]=useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(cardname.length==0||cardnum.length==0||card_cvc.length==0){
            setError(true)
         }
if(cardname&&cardnum&&card_cvc)
{
        console.log("cardname:",cardname,"cardnum:",cardnum,"card_cvc",card_cvc)
}
    }
    const Confirm=()=>{
        toast.success('Success!Your card details are added', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    };
  return (
    <>
    <Creditcard 
    creditnum={cardnum}
    creditname={cardname}
    creditcvc={card_cvc}
    creditexpy={card_expm}
    creditexpm={card_expy}
    credit/>
    <div>
        <div className='form'>
            <form onSubmit={handleSubmit}>
    <div className='con1'>
        <p className='cardname'>CARDHOLDER NAME</p>
        <input type='text' id='cardholder_name' placeholder='e.g. Jane Appleseed' name='cardholder_name' onChange={e=>setcardname(e.target.value)}></input>
        {error&&cardname.length<=0?
        <label className='label1'>Cardholder name required</label>:""}
    </div>
    <div className='con2'>
        <p className='cardnum'>CARD NUMBER</p>
        <input 
        type='text' 
        id='cardholder_num' 
        placeholder='e.g. 1234 5678 9123 0000' 
        name='cardholder_num' 
        maxLength={19}
        onChange={e=>setcardnum(e.target.value)}></input>
        {error&&cardnum.length<=0?
        <label className='label2'>Card number required</label>:""}
        
    </div>
    <div className='con3'>
        <p className='expiry'>EXP.DATE (MM/YY)</p>
        <input type='text' id='exp_month' placeholder='MM' name='exp_date'  onChange={e=>setcard_expm(e.target.value)} maxLength={2}></input>
        <input type='text' id='exp_year' placeholder='YY' name='exp_date'  onChange={e=>setcard_expy(e.target.value)} maxLength={4}></input>
    </div>
    <div className='con4'>
        <p className='card_cvc'>CVC</p>
        <input type='text' id='cvccard' placeholder='e.g. 123' name='cvccard'  maxLength={3} onChange={e=>setcard_cvc(e.target.value)}></input>
        {error&&card_cvc.length<=0?
        <label className='label3'>CVC must be numeric</label>:""}
    </div>
    <button className='btn' onClick={Confirm}>Confirm</button>
    </form>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </div>
    </div>
    </>
  )
}

export default Container
