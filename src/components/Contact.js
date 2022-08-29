import {db} from '../FireBase'

import {addDoc, collection} from 'firebase/firestore'

import Room3 from '../images/image3.png.jpg'
import { useState } from 'react'
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';

function Contact(){

  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[phone,setPhone] = useState("");
const[guests,setGuest] = useState("");
const[checkin,setCheckin] = useState("");
const[checkout,setCheckout] = useState("");
const[timein,setTimein] = useState("");
const[timeout,setTimeout] = useState("");



const add = (() => {
  const collectionRef = collection(db, 'bookings');

  const bookings = {
      name:name , email:email , phone:phone , guests:guests, checkin:checkin , checkout:checkout, timein:timein ,timeout:timeout
  };

  addDoc(collectionRef, bookings)
  .then(() => {
      alert('Added successfully')
  })
  .catch((error) => {
      console.log(error)
  })
})
    return(
        <section className='about' id='contact'>
        <div className="sectionTitle">Join <span>Us</span> </div>
 
    <div className="container">
  <div className='secondbox'>
<img src={Room3} ></img>
  </div>


<div className='form'>
<h2>Book a Hotel room</h2>
<p>Book online.Day rooms with same day  check-in and check-out.</p>

<input type="text" placeholder=' Your name'  onChange={(event)=>setName(event.target.value)}></input>
<br></br>
<input type="text" placeholder=' Email Address'  onChange={(event)=>setEmail(event.target.value)}></input>
<br></br>
<input type="text" placeholder='Phone number'  onChange={(event)=>setPhone(event.target.value)}></input>
<br></br>

<Col><br></br><Form.Select aria-label="Default select example" onChange={(event)=>setGuest(event.target.value)}>

<option>Guests</option>

<option value="1">One</option>

<option value="2">Two</option>

<option value="3">Three</option>
<option value="4">four</option>
<option value="5">five</option>

</Form.Select></Col>
<br></br>

<div className='form-check-in' >

<input type="date"  onChange={(event)=>setCheckin(event.target.value)} ></input>
<input type="date"  onChange={(event)=>setCheckout(event.target.value)} ></input>
</div>
<div className='form-check-out'>
<input type="time"  onChange={(event)=>setTimein(event.target.value)} ></input>
<input type="time"  onChange={(event)=>setTimeout(event.target.value)} ></input>

</div>
<div className='form-button'>
<button onClick={add}><p>Reserve</p></button>
</div>
</div>
<div className='form-box'>
<h2 className='form-text'>Address :</h2>
<p>98 West 21th Street, Suite 721</p>
<p>Greenland NY 10016</p>

<br></br>
<h2 className='form-text'>Phone :</h2>
<p>(+1) 234 4567 8910</p>
<p>(+27) 85 626 3547</p>


<br></br>
<h2 className='form-text'>Email :</h2>
<p>info.tlhatsoane22@gmail.com</p>



</div>

</div>


    </section>
    )
}
export default Contact;