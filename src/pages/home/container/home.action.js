import HOME from './home.constants';

export const fetchTableDataAction = payload => ({
    type: HOME.FETCH_POST_DATA,
    payload,
});

export const setTableDataAction = payload => ({
    type: HOME.SET_POST_DATA,
    payload,
});