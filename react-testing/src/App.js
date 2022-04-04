import React, { Component } from 'react'

class App extends React.Component {

  getLocFun = () =>{
    console.log("inside the getLocFun")
    let reqUrl = `https://us1.locationiq.com/v1/search.php?key=74bf85a6c5a1455d3ec9d60d8136947f=&q=amman&format=json`; 
  }

  render() {
    return (
      <div>
        <h3>I have cancer</h3>
        <button onClick={this.getLocFun}>Get location</button>
      </div>
    )
  }
}

export default App;

