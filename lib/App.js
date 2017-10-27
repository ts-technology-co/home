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
  return React.createElement(
    'div',
    { className: 'point' },
    React.createElement(
      'h2',
      null,
      props.title
    ),
    React.createElement('img', { src: props.img, className: 'point-img', alt: 'point' })
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    document.title = "TS-tech";
    this.setState({
      lan: "korean"
    });
  }
  onhandleShow(index) {
    this.refs[index].scrollIntoView({ block: 'end', behavior: 'smooth' });
  }

  render() {
    return React.createElement(
      'div',
      { className: 'App' },
      React.createElement(
        'div',
        { className: 'body' },
        React.createElement(
          'header',
          { className: 'App-header' },
          React.createElement(
            'p',
            { className: 'logo' },
            React.createElement('img', { src: ts_logo, className: 'App-logo', alt: 'logo' })
          ),
          React.createElement(
            'p',
            { className: 'menu' },
            React.createElement(
              'text',
              { onClick: () => this.onhandleShow(0) },
              'About'
            ),
            React.createElement(
              'text',
              { onClick: () => this.onhandleShow(1) },
              'Products'
            ),
            React.createElement(
              'text',
              { onClick: () => this.onhandleShow(2) },
              'Contact'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'App-main' },
          React.createElement('img', { src: main, className: 'main-img', alt: 'main' }),
          React.createElement(
            'div',
            { className: 'main-right' },
            React.createElement(
              'h1',
              null,
              'Smart Touch Solution'
            ),
            React.createElement(
              'h2',
              null,
              'Multi-user experience suitable.',
              React.createElement('br', null),
              'Large screen multi-touch information sharing.',
              React.createElement('br', null),
              'The most advanced capacitive touch sensor technology.'
            ),
            React.createElement(
              'p',
              { className: 'App-intro' },
              React.createElement(
                'text',
                { className: 'button', onClick: () => this.onhandleShow(1) },
                '> Try Smart Touch Table'
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'App-desc' },
          React.createElement(
            'div',
            { className: 'summary' },
            React.createElement(Point, { title: 'Flexible', img: f1 }),
            React.createElement(Point, { title: 'Multi-touch', img: f2 }),
            React.createElement(Point, { title: 'Multi-OS Support', img: f3 })
          ),
          React.createElement(
            'div',
            { ref: 1, className: 'product' },
            React.createElement(
              'div',
              { className: 'product-container' },
              React.createElement('br', null),
              React.createElement('br', null),
              React.createElement('br', null),
              React.createElement(
                'span',
                { className: 'product-text' },
                '\uC2A4\uB9C8\uD2B8 \uC2DC\uB300\uC5D0 \uC801\uD569\uD55C'
              ),
              React.createElement('br', null),
              React.createElement('br', null),
              React.createElement(
                'span',
                { className: 'product-text' },
                'Multi-User Experience'
              ),
              React.createElement('br', null),
              React.createElement('br', null),
              React.createElement(
                'span',
                { className: 'product-text' },
                '\uB300\uD654\uBA74 \uBA40\uD2F0\uD130\uCE58 \uC815\uBCF4 \uACF5\uC720'
              ),
              React.createElement('br', null),
              React.createElement('br', null),
              React.createElement(
                'span',
                { className: 'product-text' },
                '\uAC00\uC7A5 \uBC1C\uB2EC\uB41C \uC815\uC804\uC6A9\uB7C9 \uBC29\uC2DD\uC758 \uD130\uCE58 \uC13C\uC11C \uAE30\uC220'
              )
            ),
            React.createElement(
              'div',
              { className: 'product-block' },
              React.createElement('img', { className: 'product-img-1', src: p1, alt: 'p1' }),
              React.createElement('img', { className: 'product-img-2', src: p3, alt: 'p3' }),
              React.createElement('img', { className: 'product-img-3', src: p2, alt: 'p2' }),
              React.createElement('img', { className: 'product-img-4', src: p4, alt: 'p4' })
            )
          ),
          React.createElement(
            'div',
            { ref: 0, className: 'about' },
            React.createElement(
              'h2',
              null,
              'About '
            ),
            React.createElement(
              'h1',
              null,
              'TS technology'
            ),
            React.createElement(
              'span',
              null,
              'since 2017'
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement(
              'span',
              null,
              '\uC6B0\uB9AC\uB294 \uC2A4\uB9C8\uD2B8 \uD130\uCE58 \uD14C\uC774\uBE14\uC744 \uB9CC\uB4ED\uB2C8\uB2E4.'
            )
          ),
          React.createElement(
            'div',
            { ref: 2, className: 'contact' },
            React.createElement(
              'h1',
              null,
              'Contact'
            ),
            React.createElement(
              'div',
              { className: 'contact-text' },
              React.createElement(
                'div',
                { className: 'contact-box' },
                '\uC138\uC885\uC2DC \uD55C\uB204\uB9AC\uB300\uB85C 165, \uBA54\uB514\uD53C\uC544 405'
              ),
              React.createElement(
                'div',
                { className: 'contact-box' },
                'TEL +82 010-2806-0031'
              )
            ),
            React.createElement(
              'div',
              { className: 'contact-text' },
              React.createElement(
                'div',
                { className: 'contact-box' },
                '405, Medipia, 165, Hannuridaero, Sejong-si'
              ),
              React.createElement(
                'div',
                { className: 'contact-box' },
                'FAX 044-863-9160'
              )
            ),
            React.createElement(
              'div',
              { className: 'contact-text' },
              React.createElement('div', { className: 'contact-box' }),
              React.createElement(
                'div',
                { className: 'contact-box' },
                'MAIL ts-technology@naver.com'
              )
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement(
              'div',
              { className: 'contact-logo' },
              React.createElement('img', { src: ts_logo, className: 'App-logo', alt: 'logo' })
            ),
            React.createElement(
              'div',
              null,
              '\xA9 2017 TS-technology Co ltd. All rights reserved.'
            )
          )
        )
      )
    );
  }
}

export default App;