import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Room1 from '../images/image.1.png.png'
import Room2 from '../images/image2.png.png'
import Room3 from '../images/image3.png.jpg'
import Room4 from '../images/image4.png'
import Room5 from '../images/image5.png.png'
import Room6 from '../images/image6.png.png'
import whiteimg from '../images/white-bg.png'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Rooms(){
    
  const navigate =useNavigate();
const register =()=>{
  navigate('/luxury')
}
const delux  =()=>{
  navigate('/delux')
}
const superior  =()=>{
  navigate('/superior')
}
const family  =()=>{
  navigate('/family')
}
const suite  =()=>{
  navigate('/suite')
}
const classic  =()=>{
  navigate('/classic')
}

    return(
        
        <section className='about' id='rooms'>
<div className="sectionTitle">Our <span>Rooms</span></div>
<h5>The concept and service of the best luxury hotels in Asturias in our sophisticated.</h5>
<CardGroup>
      <Card>
        <Card.Img variant="top" src={Room1} />
      </Card>


      <Card>
        <Card.Img variant="top" src={whiteimg} />
        <h2 className='Title'>Luxury Room</h2>
        <p>
Far far away, behind the word mountains, 
far from the countries Vokalia and Consonantia, there live the blind texts.


</p>
<Button className='book' onClick={register} style={{"background-color":"#865439"}}>Book now</Button>{' '}
      </Card>


      <Card>
        <Card.Img variant="top" src={Room2} height="100%" />
      </Card>

    </CardGroup>
<br></br>


    <CardGroup>
      <Card>
        <Card.Img variant="top" src={whiteimg} />
        <h2 className='Title'>Delux Room</h2>
        <p>
Far far away, behind the word mountains, 
far from the countries Vokalia and Consonantia, there live the blind texts.
</p>
<Button className='book' onClick={delux} style={{"background-color":"#865439"}}>Book now</Button>{' '}
      </Card>


      <Card>
        <Card.Img variant="top" src={Room3} />
      </Card>


      <Card>
        <Card.Img variant="top" src={whiteimg} />
        <h2 className='Title'>Superior Room</h2>
        <p>
Far far away, behind the word mountains, 
far from the countries Vokalia and Consonantia, there live the blind texts.
</p>
<Button className='book'  onClick={superior} style={{"background-color":"#865439"}}>Book now</Button>{' '}
      </Card>

    </CardGroup>
<br></br>
<CardGroup>
      <Card>
        <Card.Img variant="top" src={Room4} />
      </Card>


      <Card>
        <Card.Img variant="top" src={whiteimg} />
        <h2 className='Title'>Family Room</h2>
        <p>
Far far away, behind the word mountains, 
far from the countries Vokalia and Consonantia, there live the blind texts.
</p>
<Button className='book' onClick={family} style={{"background-color":"#865439"}}>Book now</Button>{' '}
      </Card>


      <Card>
        <Card.Img variant="top" src={Room5} height="100%" />
      </Card>

    </CardGroup>
    <br></br>

    <CardGroup>
      <Card>
        <Card.Img variant="top" src={whiteimg} />
        <h2 className='Title'>Suite Room</h2>
        <p>
Far far away, behind the word mountains, 
far from the countries Vokalia and Consonantia, there live the blind texts.
</p>
<Button className='book' onClick={suite} style={{"background-color":"#865439"}}>Book now</Button>{' '}
      </Card>


      <Card>
        <Card.Img variant="top" src={Room6} height="100%"/>
      </Card>


      <Card>
        <Card.Img variant="top" src={whiteimg} />
        <h2 className='Title'>Classic Room</h2>
        <p>
Far far away, behind the word mountains, 
far from the countries Vokalia and Consonantia, there live the blind texts.
</p>
<Button className='book' onClick={classic} style={{"background-color":"#865439"}}>Book now</Button>{' '}
      </Card>

    </CardGroup>

</section>

    )
}
export default Rooms;