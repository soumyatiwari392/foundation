import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import { fetchTableDataAction } from './home.action';
import TablePaginationActions from '../../../components/atoms/Table';
import Typography from '@material-ui/core/Typography';

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
            <Box style={{
                width: '50%',
                margin: '0 auto'
            }}>
                <Typography variant="h4"gutterBottom style={{
                    textAlign: 'center',
                    textDecoration: 'underline'
                }}>
                    Posts
                </Typography>
                <TablePaginationActions tableData={tableData}/>
            </Box>
            
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