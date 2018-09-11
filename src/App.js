import React from 'react';
import Person from './components/Person';
import Person from './components/FilterLomake';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {
          name: 'Arto Hellas',
          number: '040 2398243',
          id: 1
        },
        {
          name: 'Arto Vihavainen',
          number: '040 2398243',
          id: 2
        },
        {
          name: 'Arto Termospullo',
          number: '040 2398243',
          id: 3
        },
        {
          name: 'Arsi Harju',
          number: '040 2398243',
          id: 4
        },
        {
          name: 'Pena Markkanen',
          number: '040 2398243',
          id: 5
        }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
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
    /*
    const personsToShow =
      this.state.filter === '' ?
        this.state.persons :
        this.state.persons.filter(person =>
          person.name.includes(this.state.filter))
*/


   const personsToShow = <FilterLomake tila={this.state} />


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
        {personsToShow.map(person => <Person key={person.id}
          person={person} />)}
      </div>
    )
  }
}

export default App