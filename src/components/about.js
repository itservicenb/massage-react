import React, { Component } from 'react';
import { Card, CardText, CardTitle, Grid, Cell, CardActions, CardMenu, Button, IconButton } from 'react-mdl';
import MediaQuery from 'react-responsive';

import image1 from '../images/about/1.jpg';
import image2 from '../images/about/le_tan.jpg';
import image3 from '../images/about/Private.jpg';
import image4 from '../images/about/staff.jpg';

class About extends Component {
    render() {
        return (
            <div>
                <MediaQuery query="(min-device-width: 1224px)">
                    <Grid>
                        <Cell col={12}>
                            <Card shadow={0} style={{ width: '50%', margin: 'auto' }}>
                                <CardTitle
                                    style={{
                                        color: '#fff',
                                        height: '350px',
                                        background:
                                            'url(https://github.com/itservicenb/massage-react/blob/master/src/images/about/le_tan.jpg?raw=true) center / cover',
                                    }}
                                >
                                    Lễ tân.
                                </CardTitle>
                                <CardText>
                                    Quý khách Sẽ được đón tiếp và nhận tư vấn dịch vụ tại quầy lễ tân khi đến với HOÀI
                                    PHƯƠNG MASSAGE.
                                </CardText>
                            </Card>
                        </Cell>
                        <Cell col={12}>
                            <Card shadow={0} style={{ width: '50%', margin: 'auto' }}>
                                <CardTitle
                                    style={{
                                        color: '#fff',
                                        height: '250px',
                                        background:
                                            'url(https://github.com/itservicenb/massage-react/blob/master/src/images/about/1.jpg?raw=true) center / cover',
                                    }}
                                >
                                    Phòng Chờ.
                                </CardTitle>
                                <CardText>
                                    Quý khách đến với HOÀI PHƯƠNG MASSAGE sẽ được setup đến khu vực chờ và thưởng thức
                                    những ly trà ngon.
                                </CardText>
                            </Card>
                        </Cell>
                        <Cell col={12}>
                            <Card shadow={0} style={{ width: '50%', margin: 'auto' }}>
                                <CardTitle
                                    style={{
                                        color: '#fff',
                                        height: '380px',
                                        background:
                                            'url(https://github.com/itservicenb/massage-react/blob/master/src/images/about/staff.jpg?raw=true) center / cover',
                                    }}
                                >
                                    Staff.
                                </CardTitle>
                                <CardText>
                                    Quý khách sẽ được phục vụ bởi dàn nhân viên trẻ trung, xinh đẹp và chuyên nghiệp.
                                </CardText>
                            </Card>
                        </Cell>
                        <Cell col={12}>
                            <Card shadow={0} style={{ width: '50%', margin: 'auto' }}>
                                <CardTitle
                                    style={{
                                        color: '#fff',
                                        height: '380px',
                                        background:
                                            'url(https://github.com/itservicenb/massage-react/blob/master/src/images/about/Private.jpg?raw=true) center / cover',
                                    }}
                                >
                                    VIP.
                                </CardTitle>
                                <CardText>
                                    Quý khách có thể lựa chọn khu vực VIP dành riêng nhằm tạo sự riêng tư, thoải mái
                                    không ồn ào, xô bồ 🎉
                                </CardText>
                                <CardActions border>
                                    {/* <Button colored ripple>
                                        Download Certification
                                    </Button> */}
                                </CardActions>
                            </Card>
                        </Cell>
                    </Grid>
                </MediaQuery>

                <MediaQuery query="(max-device-width: 1224px)">
                    <Grid>
                        <Cell col={12}>
                            <Card shadow={0} style={{ width: '90%', margin: 'auto' }}>
                                <CardTitle
                                    style={{
                                        color: '#fff',
                                        height: '150px',
                                        background:
                                            'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/background1.png?raw=true) center / cover',
                                    }}
                                >
                                    About Lauren
                                </CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla justo sem,
                                    scelerisque maximus dignissim eget, egestas dapibus felis. Nullam orci nisl,
                                    ultricies a ultrices ac, convallis a metus. Aliquam erat volutpat. Praesent sit amet
                                    elit vitae dolor cursus sollicitudin. Nulla odio ipsum, molestie condimentum orci
                                    eget, varius interdum est. Ut.
                                </CardText>
                            </Card>
                        </Cell>
                        <Cell col={12}>
                            <Card shadow={0} style={{ width: '90%', margin: 'auto' }}>
                                <CardTitle
                                    style={{
                                        color: '#fff',
                                        height: '150px',
                                        background:
                                            'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/background2.png?raw=true) center / cover',
                                    }}
                                >
                                    What you'll be getting
                                </CardTitle>
                                <CardText>
                                    Lauren combines her training in deep tissue, myofascial and muscle energy techniques
                                    to bring the perfect balance of relaxation and therapeutic treatment to massage.
                                </CardText>
                            </Card>
                        </Cell>
                        <Cell col={12}>
                            <Card shadow={0} style={{ width: '90%', margin: 'auto' }}>
                                <CardTitle
                                    style={{
                                        color: '#fff',
                                        height: '150px',
                                        background:
                                            'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/background3.png?raw=true) center / cover',
                                    }}
                                >
                                    Certification
                                </CardTitle>
                                <CardText>
                                    As I am a certified, massage therapist, I've uploaded a picture of my certificate
                                    for your convenience! You can go ahead and download it below 🎉
                                </CardText>
                                <CardActions border>
                                    <Button colored ripple>
                                        Download Certification
                                    </Button>
                                </CardActions>
                            </Card>
                        </Cell>
                    </Grid>
                </MediaQuery>
            </div>
        );
    }
}

export default About;
