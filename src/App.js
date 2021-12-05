import './App.css';
import Home from './Pages/Home/Home/Home';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import Admin from './Pages/Admin/Admin/Admin';
import MakeAdmin from './Pages/Admin/MakeAdmin/MakeAdmin';
import NavBar from './Pages/Home/NavBar/NavBar';
import ReviewAdd from './Pages/Home/ReviewAdd/ReviewAdd';


function App() {
  return (


    <AuthProvider>
      <Router>
        <NavBar></NavBar>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route exact path='/home'>
        <Home></Home>
        </Route>
        <Route exact path='/admin'>
        <Admin></Admin>
        </Route>
        <Route exact path='/makeAdmin'>
            <MakeAdmin></MakeAdmin>
        </Route>
        <Route exact path='/review'>
            <ReviewAdd></ReviewAdd>
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
    
  );
}

export default App;
