import React from 'react'
import Person from './Person'

const FilterLomake = ( {tila} ) => {
    const personsToShow =
      tila.filter === '' ?
        tila.persons :
        tila.persons.filter(person =>
          person.name.includes(tila.filter))

    return(

        personsToShow.map(person => <Person key={person.id}
            person={person} />)
        
    )
}

export default FilterLomake