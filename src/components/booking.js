import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Booking extends Component {
    render() {
        return (
            <div>
                <Iframe url="https://www.youtube.com/embed/l_DwbnLEpyw" />
                <iframe
                    width="560"
                    height="315"
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
