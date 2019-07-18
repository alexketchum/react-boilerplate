import React from 'react';
import { shallow } from 'enzyme';
import App, { AppContainer } from './App';

describe('App', () => {
    it('should contain AppContainer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(AppContainer).length).toEqual(1);
    });
});
