import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Chart from 'chart.js';
import TextInput from '../../block/text-input';
import SearchButton from '../../block/button';
import LaunchTable from '../table';
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
        this.loadBarChart = this.loadBarChart.bind(this);
    }  

    _onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    componentWillReceiveProps(nextProps) {
        this.loadBarChart(nextProps);
    }

    getData() {
        this.props.getLaunchData(this.state);
    }

    loadBarChart(props) {
        const { successData } = props;
        let countriesArr = successData.launches.map((launch) => launch.location.name);
        let countries = [... new Set(countriesArr)];
        const uniqueCountries = new Map([...new Set(countriesArr)].map(
            x => [x, countriesArr.filter(y => y === x).length]
        ));
        const countrycount = [];
        uniqueCountries.forEach(element => {
            countrycount.push(element);
        });

        let ctx = document.getElementById('barChart');

        let  barChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: countries,
                datasets: [{
                    label: '# of Launches',
                    data: countrycount,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    }

    render() {
        const { successData } = this.props;
        const launches = successData && successData.launches;
        const launchTableData = [];
        launches && launches.forEach(element => {
            launchTableData.push({
                name: element.name,
                location: element.location,
                rocket: element.rocket,
                windowEnd: element.windowend,
                windowStart: element.windowstart,
            })
        });

        console.log(launches);
        return (
            <div>
                <TextInput name="startDate" value={this.state.startDate} onChange={this._onChange}/>
                <TextInput name="endDate" value={this.state.endDate} onChange={this._onChange}/>
                <SearchButton title="show" onClick={this.getData}/>
                {launches &&
                    <div>
                        <LaunchTable launchDetails={launchTableData}/>
                    </div>
                }
                <canvas id="barChart" width="100" height="100"></canvas>
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
