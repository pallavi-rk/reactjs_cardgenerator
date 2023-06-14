
import './Container.css';
function Creditcard(props) {
    
  return (
    <div>
         <>
        <div className='box'>
            </div>
         </>
      <div>
                <img src='./img/creditbox.png' alt='Frame' className='innerbox1'></img>
                <img src='./img/rectangle4.png' alt='Frame' className='innerbox2'></img>
                <img src='./img/Ellipse1.png' alt='Frame' className='ellipse1'></img>
                <img src='./img/Ellipse2.png' alt='Frame' className='ellipse2'></img>
                <img src='./img/rectangle5.png' alt='Frame' className='innerbox3'></img>
                <div className='textfield'></div>
                <div>
                <img src='./img/rec1.png' alt='Frame' className='recu rec1'></img>
                <img src='./img/rec2.png' alt='Frame' className='recu rec2'></img>
                <img src='./img/rec2.png' alt='Frame' className='recu rec2_f'></img>
                <img src='./img/rec3.png' alt='Frame' className='recu rec3'></img>
                <img src='./img/rec2.png' alt='Frame' className='recb rec2_s'></img>
                <img src='./img/rec4.png' alt='Frame' className='recb rec4'></img>
                <img src='./img/rec5.png' alt='Frame' className='recb rec5'></img>
                <img src='./img/rec3.png' alt='Frame' className='recb rec6'></img>
                <img src='./img/rec3.png' alt='Frame' className='recd rec7'></img>
                <img src='./img/rec2.png' alt='Frame' className='recd rec8'></img>
                <img src='./img/rec2.png' alt='Frame' className='recd rec9'></img>
                <img src='./img/rec1.png' alt='Frame' className='recd ret'></img>
                <p className='creditnum'>{props.creditnum}</p>
                <p className='creditname'>{props.creditname}</p>
                <p className='creditexpm'>{props.creditexpm}</p>
                <p className='creditslach'>/</p>
                <p className='creditexpy'>{props.creditexpy}</p>
                <p className='creditcvc'>{props.creditcvc}</p>
                </div>
    </div>
    </div>
  )
}

export default Creditcard
