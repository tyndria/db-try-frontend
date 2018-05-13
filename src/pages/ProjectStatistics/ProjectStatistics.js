import React from 'react';
import { connect } from 'react-redux';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import './ProjectStatistics.css';

const ProjectStatistics = ({chartData}) => (
	<div className="chart-container">
		<ResponsiveContainer width="100%" height="100%">
			<BarChart data={chartData} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
				<XAxis dataKey="operation"/>
				<YAxis />
				<CartesianGrid strokeDasharray="3 3" />
				<Tooltip />
				<Legend align="left"/>
				<Bar dataKey="mongodb" fill="#8884d8" />
				<Bar dataKey="mysql" fill="#82ca9d" />
			</BarChart>
		</ResponsiveContainer>
		{!chartData.length && <div className="loader" /> }
	</div>
);

const mapStateToProps = state => ({
	chartData: state.projectStatistics.data
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectStatistics);