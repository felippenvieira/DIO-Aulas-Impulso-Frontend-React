import React from 'react';
import { connect } from 'react-redux';

const List = ({ todos }) => (
    <ul>
        {todos.map(({ id, name }) => (
            <li key={id}>
                {name}
            </li>
        ))}
    </ul>
);

const MapStateToProps = state => ({
    todos: state.todo.list
});

export default connect(MapStateToProps)(List);