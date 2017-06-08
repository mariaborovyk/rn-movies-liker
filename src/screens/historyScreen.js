import React, {Component} from 'react';
import {
	View,
	ScrollView,
	SegmentedControlIOS
} from 'react-native';
import {getMoviesFromDB, selectTab} from '../actions/actions';
import {connect} from 'react-redux';
import {dispatch} from 'redux';

import * as movieSelectors from '../selectors/movieSelectors'

import HistoryItem from '../components/HistoryItem';

class HistoryScreen extends Component {
	static navigatorStyle = {
		navBarBackgroundColor: '#00B1B8',
		navBarTextColor: '#fff',
		statusBarTextColorScheme: 'light'
	};

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.getMoviesFromDB();
	}

	render() {
		return (
			<View style={{flex: 1, padding: 10}}>
				<SegmentedControlIOS
					tintColor="#00B1B8"
					selectedIndex={0}
					values={['Likes', 'Dislikes']}
					onValueChange={(val) => this.props.selectTab(val)} />
				{this.renderView()}
			</View>
		);
	}

	renderView() {
		if (!this.props.selectedTab || this.props.selectedTab === 'Likes') {
			return (
				<ScrollView>
					{this.props.likedMovies.map(item =>
						<HistoryItem key={item.id} item={item}/>)}
				</ScrollView>
			)
		} else if (this.props.selectedTab === 'Dislikes') {
			return (
				<ScrollView>
					{this.props.dislikedMovies.map(item =>
						<HistoryItem key={item.id} item={item}/>)}
				</ScrollView>
			)
		}
	}
}

const mapStateToProps = (state) => {
	return {
		movies: movieSelectors.movies(state),
		likedMovies: movieSelectors.likedMovies(state),
		dislikedMovies: movieSelectors.dislikedMovies(state),
		selectedTab: state.tabReducer.selectedTab
	};
};

export default connect(mapStateToProps, {getMoviesFromDB, selectTab})(HistoryScreen);
