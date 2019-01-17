import React from 'react';
function Map(props){
    return (
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31085.2174576993!2d80.2488595!3d13.121207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265054291a09b%3A0x276fe51caf7b48d3!2sPerambur%2C+Chennai%2C+Tamil+Nadu!5e0!3m2!1sen!2sin!4v1546447214212" width="600" height="450" frameBorder="0" style={props.mapStyle} allowFullScreen></iframe>
    )
}
export default Map