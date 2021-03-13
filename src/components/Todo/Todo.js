import React, { useState, useEffect, useRef } from 'react'

const Todo = () => {
    const [current, setCurrent] = useState( "" );
    const [items, setItems] = useState( [{}] );

    function addToCurrent( e ) {
        if ( e.target.value !== "" ) {
            setCurrent( e.target.value );
        }
    }
    function addItems( e ) {
        e.preventDefault();
        const item = { task: current, key: Date.now() }

        setItems( [...items, item] );


    }

    return (

        <div className="app">
            <ul>

                {
                    items.map( item => (
                        <li key={item.key}>{item.task}</li>
                    ) )
                }

            </ul>
            <form onSubmit={addItems}>
                Add Task
                <div>
                    <input type="text"
                        placeholder="Your Task"
                        onChange={addToCurrent}
                    />
                </div>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default Todo;
