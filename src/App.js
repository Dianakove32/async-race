import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Garage from './components/garage/Garage';
import Navbar from './components/navbar/Navbar';
import Winners from './components/winners/Winners';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

    <Switch>
 <Route path='/garage' component={Garage}/>
 <Route path='/winners' component={Winners}/>
 </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
