import React from 'react';
import { connect } from 'react-redux';
const  AmCharts  = require( '@amcharts/amcharts3-react');

const ProjectStatistics = ({chartData}) => ( React.createElement(AmCharts.React, {
	"theme": "light",
	"type": "serial",
	"valueAxes": [{
		"unit": "%",
		"position": "left",
		"title": "Time operations statistics",
	}],
	"startDuration": 1,
	"legend": {
		"position": "right",
		"useGraphSettings": true
	},
	"graphs": [{
		"balloonText": "Operation [[category]] time in MongoDB: <b>[[value]]</b>",
		"fillAlphas": 0.9,
		"lineAlpha": 0.2,
		"title": "MongoDB",
		"type": "column",
		"valueField": "MongoDB"
	}, {
		"balloonText": "Operation [[category]] time in MySQL: <b>[[value]]</b>",
		"fillAlphas": 0.9,
		"lineAlpha": 0.2,
		"title": "MySQL",
		"type": "column",
		"clustered": false,
		"columnWidth": 0.5,
		"valueField": "MySQL"
	}],
	"plotAreaFillAlphas": 0.1,
	"categoryField": "operation",
	"categoryAxis": {
		"gridPosition": "start"
	},
	"dataProvider": chartData
}))
;

const mapStateToProps = state => ({
	chartData: state.projectStatistics.data
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectStatistics);