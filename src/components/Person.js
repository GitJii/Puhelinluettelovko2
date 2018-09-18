import React from 'react'

const Person = ({ person }) => {
    return (<tbody>
        <tr>
            <td>{person.name}</td>
            <td>{person.number}</td>
            <td><button type="delete"> poista </button></td>
        </tr>
    </tbody>)
}

export default Person