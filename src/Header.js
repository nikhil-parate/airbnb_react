import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import './Header.css'
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {Button} from "@material-ui/core";
import {useHistory} from 'react-router-dom';
function Header() {
  const history = useHistory();
    return (
        <div className="header">
        <Link to="/">
          <img className="header__icon"
          src="https://logodownload.org/wp-content/uploads/2016/10/airbnb-logo-10.png" 
          alt="airbnb-logo" />  
          </Link>
          <div className="header__center">
            <input className="text" type="text"/>
            <SearchIcon />
          </div>
          <div className= "header__right">
             <Button onClick={()=>history.push('/login')}>Sign In</Button>
             <p>Become a host</p>
             <LanguageIcon />
             <ExpandMoreIcon />
             <Avatar />
          </div>
        </div>
    )
}

export default Header
