import React from 'react'

const Person = ({ person }, onDelete) => {
    return (<tbody>
        <tr>
            <td>{person.name}</td>
            <td>{person.number}</td>
            <td>
                <button
                    onDelete="delete"> poista
                </button>
            </td>
        </tr>
    </tbody>)
}

export default Person