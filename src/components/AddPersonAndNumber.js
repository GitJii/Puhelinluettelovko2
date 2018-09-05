import React from 'react'

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

  export default addPersonAndNumber