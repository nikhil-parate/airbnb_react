import React from 'react'
import {Button} from "@material-ui/core";
import './SearchPage.css';
import SearchResult from './SearchResult';
function SearchPage() {
    return (
        <div className='searchPage'>
         <div className="searchPage_info">
          <Button variant="outlined" className="button">cancellation flexiblity</Button>   
          <Button variant="outlined" className="button">Type of places</Button>   
          <Button variant="outlined" className="button">Price</Button>   
          <Button variant="outlined" className="button">Rooms and beds</Button>  
          <Button variant="outlined" className="button">More filters</Button>    
         </div>
         <div className="home__section">
              <SearchResult src="https://a0.muscache.com/im/pictures/8f7351d2-318f-453e-ac0e-0d44169e64eb.jpg?im_w=1200"
                     title="JACUZZI, STUNNING1BR ,TERRACE, LOCATION "
                     description="This is a GORGEOUS 1 BR with a fantastic terrace, Jacuzzi(No extra charge) plants & every possible amenity that a guest
                      would need for their stay. Having said that, it is a cosy space. 
                         So please do not expect a large expansive setting :) It is just as in the pictures, with slightly larger plants."
                     price="Rs 2999/night" />
               <SearchResult src="https://a0.muscache.com/im/pictures/miso/Hosting-49020640/original/782f61e1-ec1a-4275-a5cf-2c61a6e6e543.jpeg?im_w=1440"
                     title="JACUZZI, STUNNING1BR ,TERRACE, LOCATION "
                     description="This is a GORGEOUS 1 BR with a fantastic terrace, Jacuzzi(No extra charge) plants & every possible 
                     amenity that a guest would need for their stay. Having said that, it is a cosy space. 
                         So please do not expect a large expansive setting :) It is just as in the pictures, with slightly larger plants."
                     price="Rs 2999/night" />
               <SearchResult src="https://a0.muscache.com/im/pictures/miso/Hosting-49020640/original/782f61e1-ec1a-4275-a5cf-2c61a6e6e543.jpeg?im_w=1440"
                     title="JACUZZI, STUNNING1BR ,TERRACE, LOCATION "
                     description="This is a GORGEOUS 1 BR with a fantastic terrace, Jacuzzi(No extra charge) plants & every possible amenity 
                     that a guest would need for their stay. Having said that, it is a cosy space. 
                         So please do not expect a large expansive setting :) It is just as in the pictures, with slightly larger plants."
                     price="Rs 2999/night" /> 
            </div>
            <div className="home__section">
            <SearchResult src="https://a0.muscache.com/im/pictures/miso/Hosting-49020640/original/782f61e1-ec1a-4275-a5cf-2c61a6e6e543.jpeg?im_w=1440"
                     title="JACUZZI, STUNNING1BR ,TERRACE, LOCATION "
                     description="This is a GORGEOUS 1 BR with a fantastic terrace, Jacuzzi(No extra charge) plants & every possible amenity 
                     that a guest would need for their stay. Having said that, it is a cosy space. 
                         So please do not expect a large expansive setting :) It is just as in the pictures, with slightly larger plants."
                     price="Rs 2999/night" />
               <SearchResult src="https://a0.muscache.com/im/pictures/miso/Hosting-49020640/original/782f61e1-ec1a-4275-a5cf-2c61a6e6e543.jpeg?im_w=1440"
                     title="JACUZZI, STUNNING1BR ,TERRACE, LOCATION "
                     description="This is a GORGEOUS 1 BR with a fantastic terrace, Jacuzzi(No extra charge) plants & every possible amenity 
                     that a guest would need for their stay. Having said that, it is a cosy space. 
                         So please do not expect a large expansive setting :) It is just as in the pictures, with slightly larger plants."
                     price="Rs 2999/night" />
              <SearchResult src="https://a0.muscache.com/im/pictures/miso/Hosting-49020640/original/782f61e1-ec1a-4275-a5cf-2c61a6e6e543.jpeg?im_w=1440"
                     title="JACUZZI, STUNNING1BR ,TERRACE, LOCATION "
                     description="This is a GORGEOUS 1 BR with a fantastic terrace, Jacuzzi(No extra charge) plants & every possible amenity 
                     that a guest would need for their stay. Having said that, it is a cosy space. 
                         So please do not expect a large expansive setting :) It is just as in the pictures, with slightly larger plants."
                     price="Rs 2999/night" />
            </div>
        </div>
    )
}

export default SearchPage
