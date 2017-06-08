import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Details from '../components/Details';

export default class DetailsScreen extends Component {
	static navigatorStyle = {
		navBarBackgroundColor: '#00B1B8',
		navBarTextColor: '#fff',
		statusBarTextColorScheme: 'light'
	};

	static navigatorButtons = {
		rightButtons: [
			{
				title: 'Close',
				id: 'close',
				buttonColor: 'white',
				buttonFontSize: 16,
				buttonFontWeight: '600'
			}
		]
	};

	constructor(props) {
		super(props);

		this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
	}

	onNavigatorEvent(event) {
		if (event.type == 'NavBarButtonPress') {
			if (event.id == 'close') {
				this.props.navigator.dismissModal({
					animationType: 'slide-down'
				});
			}
		}
	}

	render() {
		return (
			<ScrollView>
				<Details movie={this.props.movie}/>
			</ScrollView>
		);
	}
}
