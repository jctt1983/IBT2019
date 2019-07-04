import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Home } from './Home';

import * as Enzyme from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

import { ITodo, Status } from '@ibt-root/models';
import * as styles from './Home.css';
import { CreateNewTodo } from './Home.fn';

Enzyme.configure({adapter:new EnzymeAdapter()})

let todos:ITodo[] = [
    {
        id: 0,
        title: 'Test Todo',
        description: 'This is a test Todo',
        status: Status.InProgress
    },
    {
        id: 1,
        title: 'Test Todo 2',
        description: 'This is a test Todo 2',
        status: Status.InProgress
    },
    {
        id: 2,
        title: 'Test Todo 3',
        description: 'This is a test Todo 3',
        status: Status.Complete
    },
]

let control:ShallowWrapper<undefined, undefined>;

let AddNewTodo = jest.fn();

beforeEach(()=>{
    control = shallow(<Home todos={todos} onAdd={AddNewTodo} />);
});

describe('Home', ()=>{
    it('Renders the main div', ()=> {
        expect(control.find(`div.${styles.root}`).length).toBe(1);
    });
});

describe('CreateNewTodo', ()=> {
    it('Returns a new todo based on given text', ()=> {
        let newTodo:ITodo = CreateNewTodo('My New Todo');
        expect(newTodo.status).toBe(Status.InProgress);
        expect(newTodo.id).toBeGreaterThan(0);
        expect(newTodo.title).toBe('My New Todo');
        expect(newTodo.description).toBe('');
    });
});
