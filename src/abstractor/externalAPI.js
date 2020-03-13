import superagent from 'superagent';

const getExternal = async () => {
    const requestUrl = 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json';
    const requestType = 'get';
    return await new Promise(resolve => {
      superagent[requestType](requestUrl)
        .then(response => {
          resolve(response);
        })
        .catch(response => resolve(response));
    });
  };

  export default getExternal;