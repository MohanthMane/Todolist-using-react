import React from "react"

function TodoItem(params) {
    const completedStyle = {
        fontStyle: "italic",
        textDecoration: "line-through"
    }
    return (
        <div className="todo-item">
            <input type="checkbox" 
                checked={params.item.completed} 
                onChange={(event) => {params.handleChange(params.item.id)}}
            />
            <p style={params.item.completed ? completedStyle : null}>{params.item.text}</p>
        </div>
    )
}

export default TodoItem