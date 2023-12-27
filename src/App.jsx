import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Frogotemail from './components/Forgotemail';
import ResetPassword from './components/ResetPassword';


function App() {
  return (
    <BrowserRouter>
    
    <div className="App">

      
<Routes>

<Route path='/' element={<Frogotemail/>}/>


<Route path='/resetpassword'  element={<ResetPassword/>}/>




</Routes>
    
    </div>  
    
    </BrowserRouter>
  );
}

export default App;
