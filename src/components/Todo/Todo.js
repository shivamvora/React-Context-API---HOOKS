import React, { useState, useEffect, useRef } from 'react'

const Todo = () => {
    const [current, setCurrent] = useState( "" );
    const [items, setItems] = useState( [{}] );

    const inputRef = useRef( null );

    function removeItem( key ) {
        const filterdItems = items.filter( item => item.key !== key );
        setItems( filterdItems );
    }


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
                        <li key={item.key}>{item.task} <span onClick={() => removeItem( item.key )}> &times;</span></li>
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
                <input type="submit" value="Add" ref={inputRef} />
            </form>
        </div>
    )
}

export default Todo;
