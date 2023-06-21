import React, { Component } from 'react';
// import Iframe from 'react-iframe';

class Booking extends Component {
    render() {
        return (
            <div>
                <iframe
                    width="1366"
                    height="620"
                    src="https://www.youtube.com/embed/l_DwbnLEpyw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        );
    }
}
export default Booking;
