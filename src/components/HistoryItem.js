import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';
import moment from 'moment';

export default class HistoryItem extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.movieRow}>
				<Text style={styles.movieTitle}>{this.props.item.title}</Text>
				<Text style={styles.movieDate}>
					{moment(this.props.item.likedDate).format('HH:mm:ss')}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	movieRow: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 6
	},
	movieTitle: {
		fontWeight: 'bold',
		height: 20,
		flex: 1
	},
	movieDate: {
		height: 20,
		width: 60
	}
});
