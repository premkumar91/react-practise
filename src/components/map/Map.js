import React from 'react';
function Map(props){
    return (
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7195.256061501645!2d80.286592!3d13.096305!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f448d0e19bd%3A0xd85fd22c64b5b79f!2sChennai%2C+Tamil+Nadu+600001%2C+India!5e1!3m2!1sen!2sus!4v1549207267352" width="600" height="450" frameborder="0" style={props.mapStyle} allowfullscreen></iframe>
    )
}
export default Map