import { atom } from 'recoil';

const todoListState = atom({
    key: 'todoLists', // unique ID (with respect to other atoms/selectors)
    default: [] // default value (aka initial value)
});

export default todoListState;