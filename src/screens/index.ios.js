import {Navigation} from 'react-native-navigation';

import MainScreen from './mainScreen';
import HistoryScreen from './historyScreen';
import DetailsScreen from './detailsScreen';

export function registerScreens(store, Provider) {
	Navigation.registerComponent('app.MainScreen', () => MainScreen, store, Provider);
	Navigation.registerComponent('app.HistoryScreen', () => HistoryScreen, store, Provider);
	Navigation.registerComponent('app.DetailsScreen', () => DetailsScreen);
}
