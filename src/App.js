import React from 'react';
import FilterLomake from './components/FilterLomake';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons:[],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentDidMount() {
    console.log('did mount')

    /* const promise = */
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ persons: response.data })
      })
  }


  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }

  handleFilterChange = (event) => {
    console.log(event.target.value)
    this.setState({ filter: event.target.value })
  }

  handlePersonChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  addPersonAndNumber = (event) => {

    event.preventDefault()

    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber,
      id: this.state.persons.length + 1
    }

    const double = this.state.persons.find(person => person.name === personObject.name)

    const persons =
      this.state.persons.includes(double) ?
        this.state.persons :
        this.state.persons.concat(personObject)

    this.setState({
      persons,
      newNumber: '',
      newName: ''
    })
  }

  render() {

    return (
      <div>
        <h2>Puhelinluettelo</h2>

        rajaa näytettäviä <input
          value={this.state.filter}
          onChange={this.handleFilterChange}
        />

        <h2>Lisää uusi</h2>

        <form onSubmit={this.addPersonAndNumber}>
          <div>
            nimi: <input
              value={this.state.newName}
              onChange={this.handlePersonChange}
            />
          </div>
          <div>
            numero: <input
              value={this.state.newNumber}
              onChange={this.handleNumberChange}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <FilterLomake tila={this.state} />
      </div>
    )
  }
}

export default App