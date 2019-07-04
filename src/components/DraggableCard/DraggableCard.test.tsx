import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow, ShallowWrapper } from 'enzyme';

import { DraggableCard } from './DraggableCard';

Enzyme.configure({adapter:new EnzymeAdapter()})

let control:ShallowWrapper<undefined, undefined>;

beforeEach(()=>{
    control = shallow(<DraggableCard />);
});

describe('Icon', ()=>{
    it('Renders the main tag', ()=> {
        expect(control.find(`span`).length).toBe(1);
    });
});

