import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',
          id: 1
        }
      ],
      newName: ''
    }
  }

  handlePersonChange = (event) => {
    console.log(event.target.value)
    this.setState({newName: event.target.value})
  }

  addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: this.state.newName,
      id: this.state.persons.length + 1      
    }

    const persons = this.state.persons.concat(personObject)
    
    this.setState({
      persons,
      newName: ''
    })
    
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
          <form onSubmit={this.addPerson}>
          <div>
            nimi: <input 
              value={this.state.newName}
              onChange={this.handlePersonChange}
            />
            </div>
            <div>
            <button type="submit">lisää</button>
            </div>
          </form>
          <h2>Numerot</h2>
          {this.state.persons.map(person => <li key={person.id}> {person.name}</li>)}
      </div>
    )
  }
}

export default App