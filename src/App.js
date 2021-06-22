import { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=12&nat=us')
      .then((response) => {
        return response.json();
      })
      .then((users) => this.setState({ users: users.results }));
  }

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter((user) => {
      let fullName = `${user.name.first} ${user.name.last}`;
      return fullName.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <h1 className="pageTitle">Our Team</h1>
        <SearchBox
          placeholder="Search Members"
          handleChange={(event) =>
            this.setState({ searchField: event.target.value })
          }
        />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
