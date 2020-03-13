import HOME from './home.constants';

export const fetchGridDataAction = payload => ({
    type: HOME.FETCH_GRID_DATA,
    payload,
});

export const setGridDataAction = payload => ({
    type: HOME.SET_GRID_DATA,
    payload,
});