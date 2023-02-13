import axios from 'axios';

const HttpService = {
  get: url => {
    const result = axios
      .get(url)
      .then(response => {
        return response;
      })
      .catch(error => {
        console.log(error);
      });

    return result;
  },

  post: (url, bodyRequest) => {
    console.log("hello")
    const result = axios
      .post(url, bodyRequest)
      .then(response => {
        console.log("response", response);
      })
      .catch(error => {
        console.log(error);
      });

    return result;
  },
};

export default HttpService;
