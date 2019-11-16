import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextInput from '../../block/text-input';
import SearchButton from '../../block/button';
import { getLaunchData } from '../../../actions/getLaunchData';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state={
            startDate: '2015-08-20',
            endDate: '2015-09-20',
        }

        this._onChange = this._onChange.bind(this);
        this.getData = this.getData.bind(this);
    }


    _onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    getData() {
        console.log(" i'm able to click");
        this.props.getLaunchData(this.state);
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <TextInput name="startDate" value={this.state.startDate} onChange={this._onChange}/>
                <TextInput name="endDate" value={this.state.endDate} onChange={this._onChange}/>
                <SearchButton title="show" onClick={this.getData}/>
            </div>
        );
    }
}

SearchBar.propTypes = {
    startDate: PropTypes.string,
    endDate: PropTypes.string,
}

const mapStateToProps = (state) => {
    return {
        successData: state.successData,
    }
}

const SearchBarComponent = connect(
    mapStateToProps,
    { getLaunchData }
)(SearchBar);

export default SearchBarComponent;
