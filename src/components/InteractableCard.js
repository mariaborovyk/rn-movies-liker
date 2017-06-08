import React, {Component} from 'react';
import {
	StyleSheet,
	Image,
	Text,
	Animated,
	Dimensions,
	TouchableWithoutFeedback
} from 'react-native';
import {imageUrl} from '../api/url';
import Interactable from 'react-native-interactable';

const Screen = Dimensions.get('window');

export default class InteractableCard extends Component {

	constructor(props) {
		super(props);

		this.deltaX = new Animated.Value(0);
	}

	render() {
		return (
			<TouchableWithoutFeedback onLongPress={this.props.showDetails}>
				<Interactable.View style={styles.container}
								   horizontalOnly={true}
								   onSnap={this.props.onSnapAction}
								   snapPoints={[
									   {x: 390, id: 'liked'},
									   {x: 0, damping: 0.8},
									   {x: -390, id: 'disliked'}
								   ]}
								   animatedValueX={this.deltaX}>
					<Animated.View style={[styles.card, {
						transform: [{
							rotate: this.deltaX.interpolate({
								inputRange: [-250, 0, 250],
								outputRange: ['0deg', '0deg', '0deg']
							})
						}]
					}]}>
						<Image source={{uri: `${imageUrl}${this.props.cardImage}`}}
							   style={styles.posterImage} />

						<Animated.View style={[styles.overlay, {backgroundColor: 'rgba(250,250,250, 0.8)'}, {
							opacity: this.deltaX.interpolate({
								inputRange: [-120, 0],
								outputRange: [1, 0],
								extrapolateLeft: 'clamp',
								extrapolateRight: 'clamp'
							})
						}]}>
							<Text style={styles.overlayIcon}>💔</Text>
						</Animated.View>

						<Animated.View style={[styles.overlay, {backgroundColor: 'rgba(250,250,250, 0.8)'}, {
							opacity: this.deltaX.interpolate({
								inputRange: [0, 120],
								outputRange: [0, 1],
								extrapolateLeft: 'clamp',
								extrapolateRight: 'clamp'
							})
						}]}>
							<Text style={styles.overlayIcon}>❤️</Text>
						</Animated.View>

					</Animated.View>
				</Interactable.View>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = StyleSheet.create({
	posterImage: {
		width: undefined,
		height: Screen.height - 200,
		borderRadius: 20
	},
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		paddingTop: 20,
		alignSelf: 'center',
		zIndex: 0
	},
	card: {
		width: Screen.width - 40,
		marginHorizontal: 20,
		borderColor: 'white',
		borderWidth: 3
	},
	overlay: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20
	},
	overlayIcon: {
		fontSize: 160
	}
});