import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import '../../../../setupTest';
import Button from './';

const suite = 'Test Search Button component';
const mockCallBack = jest.fn();

describe(suite, function describeButtonComponent() {
    const wrapper = renderer.create(<Button className='search-button' title="show">Search</Button>)
    const wrapperInstance = wrapper.toJSON();

    const componentInstance = shallow(<Button title="show" onClick={mockCallBack}/>);

    it('button component should render without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have a unique className', () => {
        expect(componentInstance.hasClass('search-button'));
    });

    it('should be an button element', () => {
        expect(wrapperInstance.type).toEqual('button');
    });

    it('should have a props title with a value for button', () => {
        expect(wrapperInstance.props.title).toEqual('show');
    });

    it('button should stimulate a click', () => {
        componentInstance.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    })
});