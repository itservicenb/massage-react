import React, { Component } from 'react';
import { Card, CardText, CardTitle, Grid, Cell, CardActions, CardMenu, Button, IconButton } from 'react-mdl';
import MediaQuery from 'react-responsive';

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
                            <Card shadow={0} style={{ width: '90%', margin: 'auto' }}>
                                <CardTitle
                                    style={{
                                        color: '#fff',
                                        height: '150px',
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
                            <Card shadow={0} style={{ width: '90%', margin: 'auto' }}>
                                <CardTitle
                                    style={{
                                        color: '#fff',
                                        height: '200px',
                                        background:
                                            'url(https://github.com/itservicenb/massage-react/blob/master/src/images/about/staff.jpg?raw=true) center / cover',
                                    }}
                                >
                                    Staff.
                                </CardTitle>
                                <CardText>
                                    Quý khách sẽ được phục vụ bởi dàn nhân viên trẻ trung, xinh đẹp và chuyên nghiệp.
                                </CardText>
                                <CardActions border>
                                    {/* <Button colored ripple>
                                        Download Certification
                                    </Button> */}
                                </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={12}>
                            <Card shadow={0} style={{ width: '90%', margin: 'auto' }}>
                                <CardTitle
                                    style={{
                                        color: '#fff',
                                        height: '200px',
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
                            </Card>
                        </Cell>
                    </Grid>
                </MediaQuery>
            </div>
        );
    }
}

export default About;
