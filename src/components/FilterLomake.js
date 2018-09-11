import React from 'react'

const FilterLomake = ( tila ) => {
    const personsToShow =
      tila.filter === '' ?
        tila.persons :
        tila.persons.filter(person =>
          person.name.includes(tila.filter))

    return(
        personsToShow
    )
}

export default FilterLomake