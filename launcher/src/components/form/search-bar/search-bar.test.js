import React, { Children } from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../../store/store'
import renderer from 'react-test-renderer';
import '../../../../setupTest';
import SearchBar from './';
const suite = 'Test SearchBar component';

describe(suite, function describeSearchBarComponent() {
    const component = <Provider store={configureStore}><SearchBar startDate="10-12-2015" endDate="10-12-2018" /> </Provider>
    const wrapper = renderer.create(component);
    const wrapperInstance = wrapper.toJSON()[0];

    const componentInstance = shallow(component);
    
    it('should render the component without crashing', ()  => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have wrapped inside a div', () => {
        expect(wrapperInstance.type).toBe('div');
    })

    it('should have date input component', () => {
        expect(componentInstance.find('input')).toBeDefined();
    });

    it('should have name property', () => {
        expect(componentInstance.find('name')).toBeDefined();
    });

    it('should have button element', () => {
        expect(componentInstance.find('button')).toBeDefined();
    })
    it('should have a div element with className', () => {
        expect(componentInstance.hasClass('chart-container')).toBeDefined();
    })

    it('should have two children with canvas element', () => {
        expect(wrapperInstance.children[1].children[0].type).toEqual('canvas');
        expect(wrapperInstance.children[1].children[0].props.id).toEqual('barChart');
    })

    it('should have second children with canvas element', () => {
        expect(wrapperInstance.children[2].children[0].type).toEqual('canvas');
        expect(wrapperInstance.children[2].children[0].props.id).toEqual('worldmap');
    })
});
