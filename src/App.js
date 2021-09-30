import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandPaper} from '@fortawesome/free-solid-svg-icons';
import {faHandScissors} from '@fortawesome/free-solid-svg-icons';
import {faHandRock} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

function App() {

  const [block, setBlock] = useState(0);
  let [random, setRandom] = useState('');
  const [button, setButton] = useState('true');
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);

  const element1 = <FontAwesomeIcon icon={faHandPaper}  size = '4x' />
  const element2 = <FontAwesomeIcon icon={faHandScissors} size = '4x'  />
  const element3 = <FontAwesomeIcon icon={faHandRock} size = '4x'  />

  const handleClick1 = () => {
      setBlock(2);
  }
  const handleClick2 = () => {
      setBlock(3);
  }
  const handleClick3 = () => {
      setBlock(4);
  }

  const handleReveal = (e) => {
    let array = [element1, element2, element3];
    setRandom(random = array[Math.floor(Math.random() * array.length)]);
     console.log(element1);
     console.log(random);
     console.log(random === element1);
     console.log(block);
    if( (random === element3 && block === 2) ||  (random === element1 && block === 3)  ||
     (random === element2 && block === 4) ){
      setCount1(count1 += 1);

    }else if( (random === element3 && block === 3) || (random === element1 && block === 4) ||
    (random === element2 && block === 2 )){
      setCount2(count2 += 1);
    }
    else if((random === element1 && block === 2) || (random === element2 && block === 3) || 
    (random === element3 && block === 4 )){
      setCount1(count1 += 1);
      setCount2(count2 += 1);
    }else{
      setCount1(count1);
      setCount2(count2);
    }
  }

  return (
    <div className="App">
    <Container>
       
          <Row>
          <Col xs ={3} md = {3}></Col>
          <Col xs ={3} md = {3}>
            <div className = 'score'>{count1}</div>
            </Col>
            <Col xs ={3} md={3}>
            <div className = 'score'>{count2}</div>
            </Col>
            <Col xs ={3} md ={3}></Col>
            </Row>  
            
         <Row>
         <Col xs ={3} md ={3}></Col>
          <Col xs ={3} md={3}>
            <div className = 'you'>
                    {block === 2 ? element1 : null} 
                    {block === 3 ? element2 : null}
                    {block === 4 ? element3 : null} 
                    <h3 className = 'text-center' >You</h3>
                </div>
            </Col>
            <Col xs ={3} md={3}>
            <div className = 'field'>
                <div className = 'computer'>{random}
                <h3 className = 'text-center' >Opponent</h3>
                </div>
                
                <button className = 'btn1 btn btn-info btn-md' onClick = {handleReveal} disabled = {button ? block === 0 : false }>
                  Odsłoń</button>
            </div>
            </Col>
            <Col xs ={3} md ={3}></Col>
            </Row>
           
            <div className = 'signs'>
            <Row>
            <Col xs ={3} md ={3}></Col>
            <Col xs ={2} md ={2}>
                <button onClick = {handleClick1}>{element1}</button>
             </Col> 
            <Col xs ={2} md ={2}>   
                <button onClick = {handleClick2}>{element2}</button>
             </Col> 
             <Col xs = {2} md ={2}>
                <button onClick = {handleClick3}>{element3}</button>
                </Col> 
                <Col xs ={3} md ={3}></Col>
                </Row>
            </div>
            
            </Container>
    </div>
  );
}

export default App;
