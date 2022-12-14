import React from 'react';
import { useRecoilValue } from 'recoil';
import todoListState from '../atoms/todoListState';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';

function TodoList() {

    const todoList = useRecoilValue(todoListState);
    // useRecoilValue : 읽기 전용 함수

    return (
        <>
            <TodoItemCreator />

            {todoList.map((todoItem) => (
                <TodoItem key = {todoItem.id} item = {todoItem} />
            ))}
        </>
    );
}

export default TodoList;