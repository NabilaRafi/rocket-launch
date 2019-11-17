import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Chart from 'chart.js';
import * as JSC from 'jscharting/dist/jscharting';
import TextInput from '../../block/text-input';
import SearchButton from '../../block/button';
import LaunchTable from '../table';
import { getLaunchData } from '../../../actions/getLaunchData';
import './styles.css';


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
        this.loadWorldChart = this.loadWorldChart.bind(this);
    }  

    _onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        // process data to render the chart
        const { successData } = nextProps;
        // process countries into an array
        let countriesArr = successData.launches.map((launch) => launch.location.name);
        // create a set of countries array
        let countries = [...new Set(countriesArr)];
        // count of each country
        const uniqueCountries = new Map(countries.map(
            x => [x, countriesArr.filter(y => y === x).length]
        ));
        const countrycount = [];
        uniqueCountries.forEach(element => {
            countrycount.push(element);
        });

        // Object to store the country
        let result = {};

        for(var i = 0; i < countriesArr.length; ++i) {
            if(!result[countriesArr[i]])
                result[countriesArr[i]] = 0;
            ++result[countriesArr[i]];
        }

        // render charts for visualisation
        this.loadBarChart(countries, countrycount);

        this.loadWorldChart(result);
    }

    getData() {
        this.props.getLaunchData(this.state);
    }

    loadBarChart(countries, countrycount) {

        let ctx = document.getElementById('barChart');

        new Chart(ctx, {
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
                // borderWidth: 1
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

   loadWorldChart(countries) {
    let ctx = document.getElementById('worldmap');

    JSC.chart(ctx,{
        type: 'map',
        legend_visible: false,
        mapping_projection: false,
        series: [
          {
            map: 'world',
            palette: JSC.colorToPalette('rgb(251, 204, 155)',200,1),
            opacity: 0.8,
            points: [],
          }
        ]
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

        return (
            <div>
                <div style={{ alignItems: 'center' }}>
                    <TextInput name="startDate" value={this.state.startDate} onChange={this._onChange}/>
                    <TextInput name="endDate" value={this.state.endDate} onChange={this._onChange}/>
                    <SearchButton title="show" onClick={this.getData}/>
                </div>
                {launches &&
                    <div className="launch-table-wrapper">
                        <LaunchTable launchDetails={launchTableData} className="launch-table"/>
                    </div>
                }
                <div className="chart-container" style={{ position: "relative", height: "40vh", width: "80vw" }}>
                    <canvas id="barChart"></canvas>
                </div>
                <div className="chart-container" style={{ position: "relative", height: "40vh", width: "80vw" }}>
                    <canvas id="worldmap"></canvas>
                </div>
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
