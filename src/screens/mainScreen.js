import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	Text
} from 'react-native';
import {connect} from 'react-redux';
import InteractableCard from '../components/InteractableCard';
import {getMoviesFromDB, setLikedOrDisliked} from '../actions/actions';
import {dispatch} from 'redux';

import * as movieSelectors from '../selectors/movieSelectors'

class MainScreen extends Component {
	static navigatorStyle = {
		navBarBackgroundColor: '#00B1B8',
		navBarTextColor: '#fff',
		statusBarTextColorScheme: 'light'
	};

	constructor(props) {
		super(props);

		this.onSnapMove = this.onSnapMove.bind(this);
	}

	componentWillMount() {
		this.props.getMoviesFromDB();
	}

	showDetailsModal() {
		this.props.navigator.showModal({
			screen: 'app.DetailsScreen',
			title: 'Movie details',
			passProps: {
				movie: this.props.movies[this.props.currentIndex]
			}
		});
	}

	onSnapMove (event) {
		if(event.nativeEvent.id && this.props.currentIndex <= this.props.movies.length) {
			if (event.nativeEvent.id === 'liked') {
				this.props.setLikedOrDisliked(true)
			} else {
				this.props.setLikedOrDisliked(false)
			}
		}
	}

	render() {
		if (!this.props.movies)
			return <View style={styles.fullScreenView}><Text style={styles.fullScreenText}>Loading...</Text></View>;
		if (this.props.currentIndex >= this.props.movies.length)
			return <View style={styles.fullScreenView}><Text style={styles.fullScreenText}>The end</Text></View>;
		return (
			<View style={{flex: 1}}>
				<InteractableCard
					key={this.props.movies[this.props.currentIndex].id}
					cardImage={this.props.movies[this.props.currentIndex].poster_path}
					onSnapAction={this.onSnapMove}
					showDetails={this.showDetailsModal} />
				<Text style={styles.text}>
					Swipe RIGHT to ❤️ or LEFT to 💔
					LONG PRESS to open Movie Details
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	text: {
		position: 'absolute',
		bottom: 0,
		textAlign: 'center',
		fontSize: 12,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 50,
		paddingRight: 50,
		justifyContent: 'center',
		zIndex: 1
	},
	fullScreenView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	fullScreenText: {
		fontSize: 24
	}
});

const mapStateToProps = (state) => {
	return {
		movies: movieSelectors.movies(state),
		currentIndex: state.moviesReducer.current
	};
};

export default connect(mapStateToProps, {getMoviesFromDB, setLikedOrDisliked})(MainScreen);