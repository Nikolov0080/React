import React from 'react';

class App extends React.Component {
  

  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul className='list'>
          <li>{this.props.instagram}</li>
          <li>{this.props.facebook}</li>
          <li>{this.props.twitter}</li>
          <li>{this.props.maikati}</li>
          
        </ul>
      </div>
    );
  }
}

export default App;
