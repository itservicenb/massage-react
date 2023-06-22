import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import MediaQuery from 'react-responsive';

import logo from '../images/logo/logo_prev.png';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <MediaQuery query="(min-device-width: 1224px)">
                    <Grid className="landing-grid">
                        <Cell col={12}>
                            <img src={logo} alt="avatar" className="avatar-img" />

                            <div className="banner-text">
                                <h1>HOÀI PHƯƠNG</h1>
                                <hr />
                                {/* <p>THERAPEUTIC • DEEP TISSUE • SPORTS • LODI, CA</p> */}
                                <hr />
                                <p>https://www.facebook.com/hoaiphuongmassage/</p>
                            </div>
                        </Cell>
                    </Grid>
                </MediaQuery>

                <MediaQuery query="(max-device-width: 1224px)">
                    <Grid className="landing-grid-mobile">
                        <Cell col={12}>
                            <img src={logo} alt="avatar" className="avatar-img-mobile" />

                            <div className="banner-text-mobile">
                                <h1>HOÀI PHƯƠNG</h1>
                                <hr />
                                <img src={logo} width="120px" />
                                <hr /> <br />
                                <p>https://www.facebook.com/hoaiphuongmassage/</p>
                            </div>
                        </Cell>
                    </Grid>
                </MediaQuery>
            </div>
        );
    }
}

export default Landing;
