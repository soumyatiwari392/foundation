import axios from "axios";

/**
 * This class can be used to make API calls to external servers by providing appropriate parametrs
 */
class Gateway {
  /**
   * It is the main method making calls to API
   *
   * @ method: HTTP verb GET, PUT, POST, DELETE
   * @url: API Url to make call on
   * @params: any query parameters need to be added in call
   * @body: body for the request
   * @additionalHeaders: information to share in header
   *
   * return IAPIResponse : If call is success else IErrorResponse
   */
  static async call(
    method,
    url,
    params,
    body,
    config = {},
  ) {
    const requestBody = body;
    return axios({
      data: requestBody,
      headers,
      method,
      ...config,
      params,
      url,
    })
      .then((response) => Gateway.handlePromiseResolve(response))
      .catch((error) => Gateway.handlePromiseReject(error));
  }

  /***
   * Function to provide cancel token
   * returns CancelToken
   */

  static getToken = () => {
    return axios.CancelToken;
  };

  /***
   * Handler for promise resolve
   * 207 - for patch request
   */
  static handlePromiseResolve = (response) => {
    if (
      response &&
      (response.status === 200 || response.status === 201 || response.status === 207 || response.status === 204)
    ) {
      return response.data;
    }
    return false;
  };

  /**
   *  Handler for promise reject
   */
  static handlePromiseReject = (error) => {
    const response = error && error.response;
    /*
    Its a temporary solution for redirection for unauthorized calls.
    */

    return { response };
  };

  /**
   * Use it to make get calls
   *
   * @url: API Url to make call on
   * @body: body for the request
   * @header: information to share in header
   *
   * return IAPIResponse : If call is success else IErrorResponse
   */
  static get = (url, params = null, header = null, responseType = null) => {
    return Gateway.call("GET", url, params, null, header, responseType);
  };
  /**
   * Use it to make post calls
   *
   * @url: API Url to make call on
   * @params: any query parameters need to be added in call
   * @body: body for the request
   * @header: information to share in header
   *
   * return IAPIResponse : If call is success else IErrorResponse
   */
  static post = (url, params, body, header, config = {}) => {
    return Gateway.call("POST", url, params, body, header, null, config);
  };
  /**
   * Use it to make put calls
   *
   * @url: API Url to make call on
   * @params: any query parameters need to be added in call
   * @body: body for the request
   * @header: information to share in header
   *
   * return IAPIResponse : If call is success else IErrorResponse
   */
  static put = (url, params, body, header) => {
    return Gateway.call("PUT", url, params, body, header, null);
  };
  /**
   * Use it to make delete calls
   *
   * @url: API Url to make call on
   * @params: any query parameters need to be added in call
   * @header: information to share in header
   *
   * return IAPIResponse : If call is success else IErrorResponse
   */
  static delete = (url, params, header) => {
    return Gateway.call("DELETE", url, params, null, header, null);
  };
  /**
   * Use it to make patch calls
   *
   * @url: API Url to make call on
   * @params: any query parameters need to be added in call
   * @header: information to share in header
   *
   * return IAPIResponse : If call is success else IErrorResponse
   */
  static patch = (url, params, body, header) => {
    return Gateway.call("PATCH", url, params, body, header, null);
  };
}

export default Gateway;
