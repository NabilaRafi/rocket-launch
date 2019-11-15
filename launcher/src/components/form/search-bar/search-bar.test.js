import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import '../../../../setupTest';
import SearchBar from './';
import TextInput from '../../block/text-input';

const suite = 'Test SearchBar component';

describe(suite, function describeSearchBarComponent() {
    const wrapper = renderer.create(<SearchBar startDate="10-12-2015" endDate="10-12-2018" />);

    const componentInstance = shallow(<SearchBar startDate="10-12-2015" endDate="10-12-2018" />);
    
    it('should render the component without crashing', ()  => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have date input component', () => {
        expect(componentInstance.find('input')).toBeDefined();
    });

    it('should have name property', () => {
        expect(componentInstance.find('name')).toBeDefined();
    });
});
