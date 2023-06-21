import React, { Component } from 'react';
import { Grid, Cell, TextField, Button } from 'react-mdl';
import Textfield from 'react-mdl/lib/Textfield';

import MediaQuery from 'react-responsive';

import image from '../images/logo/logo_prev.png';

class Contact extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <MediaQuery query="(min-device-width: 1224px)">
                    <Grid className="contact-grid">
                        <Cell col={12}>
                            {/* <Textfield onChange={() => {}} label="" floatingLabel style={{ width: '50%' }} /> */}

                            <h3>
                                <img src={image} style={{ width: '200px' }} />
                                <br /> <br />
                                <b>Địa chỉ: Số 227 Xuân Thành - Thành Phố Ninh Bình</b>
                            </h3>
                            <h3>
                                <b>Liên hệ tư vấn: 0981 664 605</b>
                            </h3>
                        </Cell>

                        <Cell col={12}>
                            <Textfield onChange={() => {}} label="" rows={3} style={{ width: '50%' }} />
                        </Cell>
                        <Cell col={12}>
                            {/* <Button raised colored ripple style={{ width: '50%' }}>
                                Submit
                            </Button> */}
                        </Cell>
                    </Grid>
                </MediaQuery>

                <MediaQuery query="(max-device-width: 1224px)">
                    <Grid className="contact-grid">
                        <Cell col={12}>
                            {/* <Textfield
                                onChange={() => {}}
                                label="Enter your email..."
                                floatingLabel
                                style={{ width: '90%' }}
                            /> */}

                            <h6>
                                <img src={image} style={{ width: '100px' }} />
                                <br /> <br />
                                <b>Địa chỉ: Số 227 Xuân Thành - TP Ninh Bình</b>
                            </h6>
                            <h5 style={{ color: 'red' }}>
                                <b>Liên hệ tư vấn: 0981 664 605</b>
                            </h5>
                        </Cell>

                        {/* <Cell col={12}>
                            <Textfield
                                onChange={() => {}}
                                label="Enter your message, hit 'Submit', and I'll get back to you as soon as possible!"
                                rows={3}
                                style={{ width: '90%' }}
                            />
                        </Cell>
                        <Cell col={12}>
                            <Button raised colored ripple style={{ width: '90%' }}>
                                Submit
                            </Button>
                        </Cell> */}
                    </Grid>
                </MediaQuery>
            </div>
        );
    }
}

export default Contact;
