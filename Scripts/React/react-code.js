'use strict';

const e = React.createElement;
const dev_path = "file:///D:/Users/vankerya/Downloads/Emiru-master/"
const web_path = "https://emiru.netlify.com/"
const dev = true

const path = (dev) ? dev_path :  web_path

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return '';
    }

    return e(
      'a',
      {href: path + "Pages/About/index.html"},
     'About'
    );
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return '';
    }

    return e(
      'a',
      {href: path + "index.html"},
     'Home'
    );
  }
}

class Lessons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return '';
    }

    return e(
      'a',
      {href: path + "Lessons/index.html"},
     'Lessons'
    );
  }
}

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return e
      (
        'a',
        {href: path + "Pages/Charts/index.html"},
       'Charts'
      );
    }

    return e(
      'a',
      {href: path + "Pages/Charts/index.html"},
     'Charts'
    );
  }
}

const domContainer = document.querySelector('#about');
ReactDOM.render(e(About), domContainer);

ReactDOM.render(e(Home), document.querySelector('#home'));
ReactDOM.render(e(Lessons), document.querySelector('#lessons'));
ReactDOM.render(e(Charts), document.querySelector('#charts'));