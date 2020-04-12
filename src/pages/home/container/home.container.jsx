import React from 'react';
import { connect } from 'react-redux';
import { fetchTableDataAction } from './home.action';
import TablePaginationActions from '../../../components/atoms/Table';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.interval = 0;
    }

    componentDidMount() {
        const { fetchTableData = []} = this.props;
        if(!fetchTableData.length) fetchTableData();
        this.interval = window.setInterval(() => fetchTableData(), 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { tableData = {} } = this.props;
        return (
            <TablePaginationActions tableData={tableData}/>
        )
    }
}

const mapStateToProps = state => {
    const { homeReducer } = state;
    return {
        tableData: homeReducer && homeReducer.tableData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTableData: () => {
            dispatch(fetchTableDataAction());
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);