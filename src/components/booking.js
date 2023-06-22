import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Booking extends Component {
    render() {
        return (
            <div>
                <Iframe url="https://www.youtube.com/embed/xJ1_tnk22GE" />
                {/* <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/xJ1_tnk22GE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe> */}
                <iframe
                    width="1366"
                    height="580"
                    src="https://www.youtube.com/embed/xJ1_tnk22GE"
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
