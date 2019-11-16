import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import '../../../../setupTest';
import Button from './';

const suite = 'Test Search Button component';

describe(suite, function describeButtonComponent() {
    const wrapper = renderer.create(<Button className='search-button' title="show">Search</Button>)
    const wrapperInstance = wrapper.root;

    const componentInstance = shallow(<Button title="show"/>);

    it('button component should render without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have a unique className', () => {
        expect(componentInstance.hasClass('search-button'));
    });

    it('should be an button element', () => {
        expect(wrapperInstance.findByType('button')).toBeDefined();
    });
});