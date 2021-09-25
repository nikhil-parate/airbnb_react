import React from 'react'
import './Card.css'
import {Button} from "@material-ui/core";
import {useHistory} from 'react-router-dom';
function Card({src, title, description, price}) {
    const history = useHistory();
    return (
        <>
        <div className="card">
            <img src={src} alt="" />
            <div className="card__info">
               <h2>{title}</h2>
            </div>   
          <Button className="book" onClick={()=>history.push('/search')}>Explore</Button>
        </div>
        </>
    )
}

export default Card
