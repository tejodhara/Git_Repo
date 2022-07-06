import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo, resetTodo } from '../actions/action';

function Todo() {
    const [todoData, settodoData] = useState("")
    let dispatch = useDispatch();

    //to get data from store
    let fruitsFromStore = useSelector((state) => state.todo.list)
    // console.log("fruitsFromStore >>", fruitsFromStore);
        
    return (
        <div>
            <h1>REDUX TODO LIST</h1>
            <input
                type="text"
                name="todoData"
                value={todoData}
                onChange={(e) => settodoData(e.target.value)}
            />
            <button
                onClick={() => { dispatch(addTodo(todoData)); settodoData("") }}>
                ➕ADD TODO
            </button>
            <div>
                {fruitsFromStore.map((val, idx) => {
                    return (
                        <div key={idx}>
                            <h2>{val}</h2>
                            <button
                                onClick={() => dispatch(editTodo(idx))}
                            >
                                ✏️ EDIT
                            </button>
                            <button
                                onClick={() => dispatch(deleteTodo(idx))}
                            >
                                ❌ DELETE
                            </button>
                        </div>
                    )
                })}
            </div>
            <button onClick={() => dispatch(resetTodo())}>🗑️RESET TODO</button>
        </div>
    )
}

export default Todo