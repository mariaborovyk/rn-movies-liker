import { Navigation } from 'react-native-navigation';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {registerScreens} from './screens/index.ios';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(reducer);

registerScreens(store, Provider);

const tabs = [
	{
		label: 'Home',
		screen: 'app.MainScreen',
		icon: require('../img/home.png'),
		title: 'Main Screen',
	},
	{
		label: 'History',
		screen: 'app.HistoryScreen',
		icon: require('../img/heart.png'),
		title: 'Like/Dislike Screen'
	}];

Navigation.startTabBasedApp({
	tabs,
	tabsStyle: {
		tabBarBackgroundColor: '#00B1B8',
		tabBarButtonColor: '#ffffff',
		tabBarSelectedButtonColor: '#250505',
		tabFontFamily: 'BioRhyme-Bold'
	}
});