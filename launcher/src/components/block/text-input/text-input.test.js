import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import '../../../../setupTest';
import TextInput from './';

const suite = 'Test TextInput component';

describe(suite, function describeTextInputComponentSuite() {
    var someDate = new Date();
    let dateFormat = someDate.getDate() + '-' + someDate.getMonth() + '-' + someDate.getFullYear();
    const wrapper = renderer.create(<TextInput name="start-date" value={dateFormat} />);
    const wrapperInstance = wrapper.root

    const componentInstance = shallow(<TextInput name="start-date"/>);

    it('should render the component without crashing', ()  => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have type as date',() => {
        expect(wrapperInstance.type('date'));
    })
    it('should have a className', () => {
        expect(componentInstance.hasClass('text-input'));
    })

    it('should have an attribute name', () => {
        expect(componentInstance.find('name')).toBeDefined();
    })
});