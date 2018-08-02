import axios from 'axios';
// import fKEY from '../config';

// const api = {
//   fetchCurrentRates: (currency) => {
//     const encodedCurrentURI = window.encodeURI(`http://data.fixer.io/api/latest?access_key=${fKEY}&base=EUR&symbols=${currency}`);
//     return axios.get(encodedCurrentURI)
//       .then(response => response);
//   },

//   fetchHistoryRates: (date, currency) => {
//     const encodedHistoryURI = window.encodeURI(`http://data.fixer.io/api/${date}?access_key=${fKEY}&symbols=${currency}`);
//     return axios.get(encodedHistoryURI)
//       .then(response => response);
//   },
// };

const api = {
  fetchCurrentRates: (currency) => {
    const encodedCurrentURI = window.encodeURI(`https://api.openrates.io/latest?symbols=${currency}`);
    return axios.get(encodedCurrentURI)
      .then(response => response);
  },

  fetchHistoryRates: (date, currency) => {
    const encodedHistoryURI = window.encodeURI(`https://api.openrates.io/${date}?symbols=${currency}`);
    return axios.get(encodedHistoryURI)
      .then(response => response);
  },
};

export default api;

