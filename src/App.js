import './App.css';
import React  from 'react';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';
import Signup from './Signup';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  
  return (
    <> 
    <div className="app">
      <Router>
       <Header />
        <Switch>
        <Route path="/search">
        <SearchPage />
        </Route>
        <Route path="/signup">
        <Signup />
        </Route>
        <Route exact path="/login">
        <Login />
        </Route>
        <Route path="/">
        <Home />
         </Route>
        </ Switch>
       <Footer />
      </Router>
     {/*Home */}
        {/*Header */}
        {/* Banner */}
           {/*Search */}
        {/* Cards*/ }
        {/*Footer*/}
      {/*SearchPage */}
        {/*Header */}
        {/*... */}    
        </div>
    </>
  );
}

export default App;
