import {SELECT_A_TAB} from '../actions/actions';

export default function tabReducer(state = [], action = {}) {
	switch (action.type) {
		case SELECT_A_TAB:
			return {
				selectedTab: action.selectedTab
			};
		default:
			return state;
	}
}