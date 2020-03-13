import React from 'react';
import { connect } from 'react-redux';
import { fetchGridDataAction } from './home.action';
import { AgGridReact } from 'ag-grid-react';
import columnDefs from '../config/home.config';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Home extends React.Component {
    componentDidMount() {
        const { fetchGridData } = this.props;
        fetchGridData();
    }

    render() {
        const { gridData } = this.props; 
        console.log(columnDefs)
        return (
            <div
                className="ag-theme-balham"
                style={{
                textAlign: 'center',
                margin: 'auto',
                height: '500px',
                width: '100%' }}
            >
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={gridData}>
                </AgGridReact>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { homeReducer } = state;
    return {
        gridData: homeReducer && homeReducer.gridData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGridData: () => {
            dispatch(fetchGridDataAction());
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);