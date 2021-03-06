import './App.css';
import Home from './Pages/Home/Home/Home';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import Admin from './Pages/Admin/Admin/Admin';
import MakeAdmin from './Pages/Admin/MakeAdmin/MakeAdmin';
import NavBar from './Pages/Home/NavBar/NavBar';
import ReviewAdd from './Pages/Home/ReviewAdd/ReviewAdd';
import Explor from './Pages/Explor/Explor/Explor';
import About from './Pages/About/About/About';
import Login from './Pages/LogIn/Login/Login';
import Register from './Pages/LogIn/Register/Register';
import Caed from './Pages/Card/Caed';
import MakeProduct from './Pages/Admin/MakeProduct/MakeProduct';
import MangeAllProduct from './Pages/Admin/MangeAllProduct/MangeAllProduct';


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
        <Route exact path='/explor'>
          <Explor></Explor>
        </Route>
        <Route exact path='/about'>
          <About></About>
        </Route>
        <Route exact path='/login'>
          <Login></Login>
        </Route>
        <Route exact path='/reg'>
          <Register></Register>
        </Route>
        <Route exact path='/card'>
          <Caed></Caed>
        </Route>
        <Route exact path='/addProduct'>
          <MakeProduct></MakeProduct>
        </Route>
        <Route exact path='/addProduct'>
          <MakeProduct></MakeProduct>
        </Route>
        <Route exact path='/makeAdmin'>
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route exact path='/manageAllProduct'>
          <MangeAllProduct></MangeAllProduct>
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
    
  );
}

export default App;
