import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {
          name: 'Arto Hellas',
          number: '040 2398243',
          id: 1
        }
      ],
      newName: '',
      newNumber: ''
    }
  }


  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
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
        {this.state.persons.map(person => <li key={person.id}> {person.name} {person.number}</li>)}
      </div>
    )
  }
}

export default App