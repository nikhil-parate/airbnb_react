import React, { useState} from 'react';
import './Banner.css';
import {Button} from "@material-ui/core";
import Search from './Search';
import {useHistory} from 'react-router-dom';
function Banner() {
    const history = useHistory();
   const [search, setSearch] = useState(false);
    return (
        <>
        <div className='banner'>
            <div className="banner__search">
                {search && <Search />}
                <Button onClick={()=>setSearch(!search)} className="search__button" variant="outlined">
                     {search ? "Hide" : "Search Dates"}
                </Button>
            </div>
           <div className="banner__info">
               <h1>Not sure where to go? Perfect.</h1>
               <p>Book Now to explore your imagination.</p>
               <Button className="button" onClick={()=>history.push('/search')}>I'm flexible</Button>
            </div>        
        </div>
        </>
    )
    }


export default Banner;
