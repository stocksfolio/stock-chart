import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.helloWorld = 'Hello World';
    this.state = {

    };
  }

  render() {
    return (
      <div>
        {this.helloWorld};
        <img src='../assets/images/men-in-tights.jpg'/>
      </div>
    );
  }
}

export default App;
