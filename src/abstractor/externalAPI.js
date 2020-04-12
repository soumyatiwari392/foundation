import superagent from 'superagent';

const getExternal = async (offset = 0) => {
    const requestUrl = `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0`;
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