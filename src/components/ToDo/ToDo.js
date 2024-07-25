// components/ToDo/ToDo.js
import React from 'react';

function ToDo(props) {
    return (
        <tr>
            <td>{props.tasks}</td>
            <td>{props.description}</td>
            <td>{props.category}</td>
            <td>{props.when}</td>
            <td>{props.priority}</td>
            <td>{props.fulfillment}%</td>
            <td className="section-edit-task">
                <button onClick={() => props.onEdit(props.id)} aria-label="Edit task">
                    <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button onClick={() => props.onDelete(props.id)} aria-label="Delete task">
                    <i className="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>
    );
}

export default ToDo;
