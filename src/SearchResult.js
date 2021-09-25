import React from 'react';
import './Card.css';
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
function SearchResult({src, title, description, price}) {
    const history =  useHistory();
    return (
        <>
        <div className="card">
            <img src={src} alt="" />
            <div className="card__info">
               <h2>{title}</h2>
               <h4>{description}</h4>
               <h3>{price}</h3>
            </div>  
          <Button className="book" onClick={()=>history.push('/signup')}>Book Now</Button>   
        </div>
        </>
    )
}

export default SearchResult;
