
import './App.css';
// import Files from './Components/Files/Files';
import Accordian from './Components/Accordian/Accordian';
import Alert from './Components/Alert/Alert';
import Count from './Components/Count/Count';
import Meter from './Components/Meter/Meter';
import Modal from './Components/Modal/Modal';
import Password from './Components/Password/Password';
import Selection from './Components/Selection/Selection';


function App() {
  return (
    <div className="App">
     {/* <Files/> */}
     <h1>hr</h1>

     <Accordian/>
     <Alert/>
     <Modal/>
     <Password/>
     <Selection/> 
     <Meter/>
     <Count/>
   
    </div>  
  );
}

export default App;
