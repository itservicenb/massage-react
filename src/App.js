// import React, { Component } from 'react';

// import './App.css';
// //MDL components needed
// import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
// import Main from './components/main';
// import { Link } from 'react-router-dom';

// class App extends Component {

//     render() {
//         return (
//             <div className="demo-big-content">
//                 <Layout>
//                     <Header className="header-color" title="Massage" scroll>
//                         <Navigation>
//                             <Link to="/">Home</Link>
//                             <Link to="/about">Giới Thiệu</Link>
//                             <Link to="/services">Dịch Vụ</Link>
//                             <Link to="/booking">YouTube Chanel</Link>
//                             <Link to="/contact">Địa chỉ</Link>
//                         </Navigation>
//                     </Header>
//                     <Drawer title="Pages">
//                         <Navigation>
//                             <Link to="/">Home</Link>
//                             <Link to="/about" visible="-1">
//                                 Giới Thiệu
//                             </Link>
//                             <Link to="/services">Dịch Vụ</Link>
//                             <Link to="/booking">YouTube Chanel</Link>
//                             <Link to="/contact">Địa chỉ</Link>
//                         </Navigation>
//                     </Drawer>
//                     <Content>
//                         <div className="page-content" />
//                         <Main />
//                     </Content>
//                 </Layout>
//             </div>
//         );
//     }
// }

// export default App;
import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
    state = {
        visible: true,
    };

    handleLinkClick = () => {
        this.setState((prevState) => ({
            visible: !prevState.visible,
        }));
    };

    render() {
        const { visible } = this.state;

        return (
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title="Massage" scroll>
                        <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/about">Giới Thiệu</Link>
                            <Link to="/services">Dịch Vụ</Link>
                            <Link to="/booking">YouTube Chanel</Link>
                            <Link to="/contact">Địa chỉ</Link>
                            {/* <Link to="/map">Bản đồ</Link> */}
                        </Navigation>
                    </Header>
                    <Drawer title="Pages" visible={visible ? '-1' : ''} onClick={this.handleLinkClick}>
                        <Navigation>
                            <Link to="/" onClick={this.handleLinkClick}>
                                Home
                            </Link>
                            <Link to="/about" onClick={this.handleLinkClick}>
                                Giới Thiệu
                            </Link>
                            <Link to="/services" onClick={this.handleLinkClick}>
                                Dịch Vụ
                            </Link>
                            <Link to="/booking" onClick={this.handleLinkClick}>
                                YouTube Chanel
                            </Link>
                            <Link to="/contact" onClick={this.handleLinkClick}>
                                Địa chỉ
                            </Link>
                            {/* <Link to="/map" onClick={this.handleLinkClick}>
                                Bản đồ
                            </Link> */}
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;
