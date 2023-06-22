import React, { Component } from 'react';
import { Card, CardText, CardTitle, Grid, Cell, CardActions, CardMenu, Button, IconButton } from 'react-mdl';

import MediaQuery from 'react-responsive';

class Services extends Component {
    render() {
        return (
            <div>
                <MediaQuery query="(min-device-width: 1224px)">
                    <Grid>
                        <Cell col={12}>
                            <Card shadow={0} style={{ width: '30%', margin: 'auto' }}>
                                <CardTitle
                                    style={{
                                        color: '#333',
                                        height: '176px',
                                        background:
                                            'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/deeptissue.jpg?raw=true) center / cover',
                                    }}
                                >
                                    Massage Đầu, vai gáy, tay chân
                                </CardTitle>
                                <CardText>
                                    Quý khách sẽ được trải nghiệm và sử dụng dịch vụ trong vòng 60 phút, với kỹ thuật
                                    massage chuyên nghiệp từ những nhân viên được đào tạo bài bản. Giúp quý khách có
                                    những phút giây thư giãn thật thăng hoa và thoải mái.
                                </CardText>
                            </Card>
                        </Cell>
                        <Cell col={12}>
                            <Card shadow={0} style={{ width: '30%', margin: 'auto' }}>
                                <CardTitle
                                    style={{
                                        color: '#333',
                                        height: '176px',
                                        background:
                                            'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/swedish.jpeg?raw=true) center / cover',
                                    }}
                                >
                                    Massage Đầu, vai gáy, tay, chân, Lưng đá nóng.
                                </CardTitle>
                                <CardText>
                                    Với 90 phút trải nghiệm dịch vụ sẽ khiến quý khách thật thư thái và hài lòng.
                                </CardText>
                            </Card>
                        </Cell>
                        <Cell col={12}>
                            <Card shadow={0} style={{ width: '30%', margin: 'auto' }}>
                                <CardTitle
                                    style={{
                                        color: '#fff',
                                        height: '176px',
                                        background:
                                            'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/sports.jpg?raw=true) center / cover',
                                    }}
                                >
                                    Massage body toàn thân.
                                </CardTitle>
                                <CardText>
                                    Với 120 phút trải nghiệm toàn bộ dịch vụ từ A đến Z quý khách sẽ được thả lỏng thư
                                    giãn toàn bộ cơ thể. Những cơn mệt mỏi cơ bắp, vai gáy, toàn thân sẽ tan biến một
                                    cách kì diệu sau khi được các chuyên viên của Hoài Phương massage chăm sóc.
                                </CardText>
                            </Card>
                        </Cell>
                        <Cell col={12}>
                            <Card shadow={0} style={{ width: '30%', margin: 'auto' }}>
                                <CardTitle
                                    style={{
                                        color: '#333',
                                        height: '176px',
                                        background:
                                            'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/reflexology.jpeg?raw=true) center / cover',
                                    }}
                                >
                                    Dịch vụ khác.
                                </CardTitle>
                                <CardText>
                                    Đến với HOÀI PHƯƠNG quý khách có thể sử dụng dịch vụ theo nhu cầu cá nhân riêng.
                                </CardText>
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
                                            'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/deeptissue.jpg?raw=true) center / cover',
                                    }}
                                >
                                    Massage Đầu, vai gáy, tay chân
                                </CardTitle>
                                <CardText>
                                    Quý khách sẽ được trải nghiệm và sử dụng dịch vụ trong vòng 60 phút, với kỹ thuật
                                    massage chuyên nghiệp từ những nhân viên được đào tạo bài bản. Giúp quý khách có
                                    những phút giây thư giãn thật thăng hoa và thoải mái.
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
                                            'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/swedish.jpeg?raw=true) center / cover',
                                    }}
                                >
                                    Massage Đầu, vai gáy, tay, chân, Lưng đá nóng.
                                </CardTitle>
                                <CardText>
                                    Với 90 phút trải nghiệm dịch vụ sẽ khiến quý khách thật thư thái và hài lòng.
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
                                            'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/sports.jpg?raw=true) center / cover',
                                    }}
                                >
                                    Massage body toàn thân.
                                </CardTitle>
                                <CardText>
                                    Với 120 phút trải nghiệm toàn bộ dịch vụ từ A đến Z quý khách sẽ được thả lỏng thư
                                    giãn toàn bộ cơ thể. Những cơn mệt mỏi cơ bắp, vai gáy, toàn thân sẽ tan biến một
                                    cách kì diệu sau khi được các chuyên viên của Hoài Phương massage chăm sóc.
                                </CardText>
                            </Card>
                        </Cell>
                        <Cell col={12}>
                            <Card shadow={0} style={{ width: '90%', margin: 'auto' }}>
                                <CardTitle
                                    style={{
                                        color: '#333',
                                        height: '150px',
                                        background:
                                            'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/reflexology.jpeg?raw=true) center / cover',
                                    }}
                                >
                                    Dịch vụ khác.
                                </CardTitle>
                                <CardText>
                                    Đến với HOÀI PHƯƠNG quý khách có thể sử dụng dịch vụ theo nhu cầu cá nhân riêng.
                                </CardText>
                            </Card>
                        </Cell>
                    </Grid>
                </MediaQuery>
            </div>
        );
    }
}

export default Services;
