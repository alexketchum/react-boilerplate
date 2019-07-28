import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { AppContainer } from '../StyledComponents';

describe('App', () => {
    it('should contain AppContainer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(AppContainer).length).toEqual(1);
    });
});
