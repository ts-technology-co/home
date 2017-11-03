import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import ts_logo from './assets/logo.png';
import main from './assets/main.png';
import map from './assets/maps.png';
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
  onhandleShow(index) {
    this.refs[index].scrollIntoView({block: 'end', behavior: 'smooth'});
  }

  renderSpec(type,hasPc,hasAndroid,Option,next) {
    const style = hasPc ? "spec-container" : "spec-container-empty";
    return (
      <div className={style}>
        <p>{type}</p>
        <p>{hasPc}</p>
        <p>{hasAndroid}</p>
        <p>{Option}<br/>{next}</p>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="header-logo">
            <img src={ts_logo} className="logo" alt="logo" />
          </div>
          <div className="header-space"></div>
          <MediaQuery minDeviceWidth={700}>
            {(matches) => {
              if (matches) {
                return (
                  <div className="header-menu">
                    <text onClick={() => this.onhandleShow(0)} >About</text>
                    <text onClick={() => this.onhandleShow(1)} >Products</text>
                    <text onClick={() => this.onhandleShow(2)} >Contact</text>
                  </div>
                );
              } else {
                return <div></div>;
              }
            }}
          </MediaQuery>
        </div>
        <div className="App-main">
          <div className="main">
            <div className="main-half">
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
            <div className="main-half">
              <img src={map} className="maps" alt="map"/>
            </div>
          </div>
        </div>
        <div className="App-desc">
          <div className="about">
            <p><b><u>Touch-Table is</u></b></p>
          </div>
          <div className="summary">
            <Point title="Flexible" img={f1}/>
            <Point title="Multi-touch" img={f2}/>
            <Point title="Multi-OS Support" img={f3}/>
          </div>
          <div ref={0} className="product">
            <img src={main} className="product-img" alt="main"/>
            <div className="summary-text">
              <h2>가장 발달된 정전용량 방식의</h2>
              <h2>터치센서기술로 만들어진</h2>
              <h2>터치테이블입니다.</h2>
            </div>
          </div>
          <div className="about">
            <p><b><u>Touch-Table Spec</u></b></p>
          </div>
          <div ref={1} className="product-spec">
            <div className="product-container">
              {this.renderSpec("","","","")}
              {this.renderSpec("TYPE","PC","Android","Option")}
              {this.renderSpec("터치 모니터 타입","x","x","HDMI(1), USB(1)")}
              {this.renderSpec("저가형 타입","x","o","HDMI(1), USB(1)")}
              {this.renderSpec("기본 타입","o","x","CPU: G4560/i3/i5/i7 선택,","Mem: 8G/16G 선택,HDMI(1)")}
              {this.renderSpec("듀얼 타입","o","o","CPU: G4560/i3/i5/i7 선택,","Mem: 8G/16G 선택,  HDMI(1)")}
              {this.renderSpec("","","","")}
            </div>
            <div className="etc">
              <p><b>유선LAN/TV RF포함</b></p>
              <p><b>배송 및 설치는 문의바랍니다.</b></p>
            </div>
            <MediaQuery minDeviceWidth={700}>
              {(matches) => {
                if (matches) {
                  return (
                  <div className="product-block">
                    <img className="product-img-1" src={p1} alt="p1"/>
                    <img className="product-img-2" src={p3} alt="p3"/>
                    <img className="product-img-3" src={p2} alt="p2"/>
                    <img className="product-img-4" src={p4} alt="p4"/>
                    </div>
                  );
                } else {
                  return <div></div>;
                }
              }}
            </MediaQuery>
          </div>
          <div className="about">
            <p><b><u>Contact</u></b></p>
          </div>
          <div ref={2} className="contact">
            <div className="contact-text">
              <div className="contact-box">
                <p>세종시 한누리대로 165, 메디피아 405</p>
                <p>405, Medipia, 165, Hannuridaero, Sejong-si</p>
              </div>
              <div className="contact-box-2">
                <p>TEL +82 010-2806-0031</p>
                <p>FAX 044-863-9160</p>
                <p>MAIL ts-technology@naver.com</p>
              </div>
            </div>
            <div className="info">
              <div className="header-logo">
                <img src={ts_logo} className="info-logo" alt="logo" />
              </div>
              <div className="copyright">
                <p>© 2017 TS-technology Co ltd. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
