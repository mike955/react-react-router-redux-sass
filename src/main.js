import React, { Component } from "react";
import { Row, Col } from "antd";
import NavLeft from './components/NavLeft';
// import logo from './logo.svg';
// import './App.css';

export default class Main extends Component {
  render() {
    return (
      <Row className="container">
        <Col span="4" className="nav-left">
        <NavLeft />
        </Col>
        <Col span="20" className="main">
          <Row className="content">
            {/* <Home/> */}
            {this.props.children}
          </Row>
        </Col>
      </Row>
    );
  }
}

// export default class Main extends Component {
//   render() {
//     return (
//       <Row className="container">
//         <Col span="4" className="nav-left">
//           <NavLeft />
//         </Col>
//         <Col span="20" className="main">
//           <Row className="content">
//             {/* <Home/> */}
//             {this.props.children}
//           </Row>
//         </Col>
//       </Row>
//     );
//   }
// }
