import { useState } from 'react'

import {toast} from 'react-toastify'

import './Subscribe.css'

const Subscribe = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) =>{
        console.log(e);
        e.preventDefault();
        console.log('name: '+ firstname + ' ' + lastname + ' and email: ' + email);
        // API Request
        toast(`Thanks for subscribing ${firstname} ${lastname} !!`,{
            pauseOnHover: false,

        })
        setFirstname('');
        setLastname('');
        setEmail('');
    }

    return(
        <div style={subscribeContainer}>
            <h1>SUBSCRIBE</h1>
            <p>Sign up with your email addresss to recieve news and updates</p>
            <form className='input-container' onSubmit={handleSubscribe}>
                <div style={{display: 'flex', flexDirection:'row'}}>
                    <div className='input-wrapper'>
                        <input 
                            type='text' id='firstname' value={firstname} required autoFocus className='subscribe-input' placeholder='First Name' onChange={(e)=>{setFirstname(e.target.value)}}
                        /> 
                        <div className='input-underline'></div>
                    </div>
                    <div className='input-wrapper' >    
                        <input 
                            type='text' id='lastname' value={lastname} required className='subscribe-input' placeholder='Last Name' onChange={(e)=>{setLastname(e.target.value)}}
                        />
                        <div className='input-underline'></div>
                    </div>
                    <div className='input-wrapper'>
                        <input 
                            type='email' id='email' value={email} required className='subscribe-input' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}
                        />
                        <div className='input-underline'></div>
                    </div>
                </div>
                <div>
                    <input type='submit' value='Subscribe' className='subscribe-button'/>
                </div>
            </form>
        </div>
    )

}

const subscribeContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'lightblue',
    padding: '24px 0px',
    borderRadius: '12px'
}

export default Subscribe;