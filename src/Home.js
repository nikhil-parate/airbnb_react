import React from 'react';
import Banner from './Banner';
import './Home.css';
import Card from './Card';
import Banner2 from './Banner2';
function Home() {
    return (
        <>
        <div className="home">
            <Banner />
            <div className="home__section">
              <Card src="https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/9da40e3c-5846-4359-bb41-05c27b09a8f5.jpeg?im_w=1200"
                     title="Outdoor getaways"
                   />
               <Card src="https://a0.muscache.com/im/pictures/miso/Hosting-52248610/original/f1a2dac7-d8c9-49d1-b8e5-6fdb41be946a.jpeg?im_w=1200"
                     title="Unique Stays"
                    />
               <Card src="https://a0.muscache.com/im/pictures/f5c71586-12c2-47eb-832a-456a7a1ec583.jpg?im_w=1200"
                     title="Entire Homes"
                   /> 
            <Card src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*"
                     title="Pets Allowed"
                    />
            </div>
            
        </div>
        <Banner2 />
        </>
    )
}

export default Home
