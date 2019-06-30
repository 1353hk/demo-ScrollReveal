import React from 'react';
import ScrollReveal from 'scrollreveal';

import './App.css';

let App = class extends React.Component {
  render() {
    return (
      <ul className="ul">
        {Array(10)
          .fill()
          .map((v, k) => {
            return <li className="li">{k}</li>;
          })}
      </ul>
    );
  }
  componentDidMount() {
    ScrollReveal().reveal('.li', {
      cleanup: true,
      reset: true,
      delay: 100,
    });
  }
};

export default App;
