import Aboutpage from '../images/aboutpage.png';
import Card from 'react-bootstrap/Card';


function About(){
    return(

        <section className='about' id='about'>
<div className="sectionTitle">About <span>Us</span></div>
<br></br>
<div className='container'>
<Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={Aboutpage} />
   
      
     
    </Card>


<div className=' box'>
<h1 className='slogan'>Luxury A Comfort Our services and wonders of Prague</h1>
<br></br><br></br><br></br>
<h4>
The concept and service of the best luxury hotels in Asturias in
 our sophisticated Urban Double and Unique Junior Suite rooms,
  with the possibility of enjoying a furnished terrace in our Double Urban Loft and Unique Junior Loft Suite.</h4>
 
 
</div>


</div>







</section>
  
 
    )
}
export default About;