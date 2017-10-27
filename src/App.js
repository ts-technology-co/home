import React, { Component } from 'react';
import ts_logo from './assets/logo.png';
import main from './assets/main.png';
import f1 from './assets/feature1.png';
import f2 from './assets/feature3.png';
import f3 from './assets/feature2.png';
import p1 from './assets/1.png';
import p2 from './assets/2.png';
import p3 from './assets/3.png';
import p4 from './assets/4.png';
import './App.css';

function Point(props) {
  return (
    <div className="point">
      <h2>{props.title}</h2>
      <img src={props.img} className="point-img" alt="point" />
    </div>
  );
}

class App extends Component {
  constructor(props){
    super(props);
    document.title = "TS-tech";
    this.setState({
      lan: "korean"
    });
  }
  onhandleShow(index) {
    this.refs[index].scrollIntoView({block: 'end', behavior: 'smooth'});
  }

  render() {
    return (
      <div className="App">
        <div className="body">
          <header className="App-header">
            <p className="logo">
              <img src={ts_logo} className="App-logo" alt="logo" />
            </p>
            <p className="menu">
              <text onClick={() => this.onhandleShow(0)} >About</text>
              <text onClick={() => this.onhandleShow(1)} >Products</text>
              <text onClick={() => this.onhandleShow(2)} >Contact</text>
            </p>
          </header>
          <div className="App-main">
            <img src={main} className="main-img" alt="main"/>
            <div className="main-right">
              <h1>Smart Touch Solution</h1>
              <h2>Multi-user experience suitable.
                <br/>
                Large screen multi-touch information sharing.
                <br/>
                The most advanced capacitive touch sensor technology.</h2>
              <p className="App-intro">
                <text className="button" onClick={() => this.onhandleShow(1)} >> Try Smart Touch Table</text>
              </p>
            </div>
          </div>
          <div className="App-desc">
            <div className="summary">
              <Point title="Flexible" img={f1}/>
              <Point title="Multi-touch" img={f2}/>
              <Point title="Multi-OS Support" img={f3}/>
            </div>
            <div ref={1} className="product">
              <div className="product-container">
                <br/><br/><br/>
                <span className="product-text">
                  스마트 시대에 적합한
                </span>
                  <br/><br/>
                  <span className="product-text">
                  Multi-User Experience
                </span>
                  <br/><br/>
                  <span className="product-text">
                  대화면 멀티터치 정보 공유
                </span>
                  <br/><br/>
                  <span className="product-text">
                  가장 발달된 정전용량 방식의 터치 센서 기술
                </span>
              </div>
              <div className="product-block">
                <img className="product-img-1" src={p1} alt="p1"/>
                <img className="product-img-2" src={p3} alt="p3"/>
                <img className="product-img-3" src={p2} alt="p2"/>
                <img className="product-img-4" src={p4} alt="p4"/>
              </div>
            </div>
            <div ref={0} className="about">
              <h2>About </h2>
              <h1>TS technology</h1>
              <span>
                since 2017
              </span>
              <br/>
              <br/>
              <span>
                우리는 스마트 터치 테이블을 만듭니다.
              </span>
            </div>
            <div ref={2} className="contact">
              <h1>Contact</h1>
              <div className="contact-text">
                <div className="contact-box">
                  세종시 한누리대로 165, 메디피아 405
                </div>
                <div className="contact-box">
                  TEL +82 010-2806-0031
                </div>
              </div>
              <div className="contact-text">
                <div className="contact-box">405, Medipia, 165, Hannuridaero, Sejong-si</div>
                <div className="contact-box">FAX 044-863-9160</div>
              </div>
              <div className="contact-text">
                <div className="contact-box"></div>
                <div className="contact-box">MAIL ts-technology@naver.com</div>
              </div>
              <br/><br/><br/><br/>
              <div className="contact-logo">
                <img src={ts_logo} className="App-logo" alt="logo" />
              </div>
              <div>© 2017 TS-technology Co ltd. All rights reserved.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
