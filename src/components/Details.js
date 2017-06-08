import React, {Component} from 'react';
import {
	StyleSheet,
	Image,
	Text,
	View
} from 'react-native';
import {imageUrl} from '../api/url';

export default class Details extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
		<View>
			<Image style={styles.videoImage} source={{url: `${imageUrl}${this.props.movie.backdrop_path}`}} />
			<View style={{flex: 1, padding: 20}}>
				<Text style={styles.title}>
					{this.props.movie.title} ★ {this.props.movie.vote_average}
				</Text>
				<Text style={styles.headers}>Overview</Text>
				<Text>{this.props.movie.overview}</Text>
				<Text style={styles.paragraph}>
					<Text style={styles.headers}>Release date: </Text>
					<Text>{this.props.movie.release_date}</Text>
				</Text>
				<Text style={styles.paragraph}>
					<Text style={styles.headers}>Original language: </Text>
					<Text>{this.props.movie.original_language}</Text>
				</Text>
			</View>
		</View>);
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		marginBottom: 20
	},
	right: {
		textAlign: 'right'
	},
	paragraph: {
		marginTop: 12,
	},
	headers: {
		fontWeight: 'bold',
		marginBottom: 6
	},
	videoImage: {
		width: undefined,
		height: 200
	}
});