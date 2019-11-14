import React, { Component } from 'react';
import CardList from '../components/CardList/CardList';
import Searchbox from '../components/Searchbox/Searchbox';
import Scroll from '../components/Scroll/Scroll';
import './App.css';


class App extends Component {
  constructor(props) {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(robots => this.setState({ robots: robots}))
}

onSearchChange = (event) => {
  this.setState({ searchfield: event.target.value });
}

render() {
  const { searchfield, robots } = this.state;
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })

  if (!robots.length) {
    return <h1>Loading...</h1>
  } else {
      return (
        <div className="App">
          <h1>RoboFriends</h1>
          <Searchbox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
