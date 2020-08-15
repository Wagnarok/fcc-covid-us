import axios from 'axios';
import parsers from './parsers';

async function usStats() {
  const res = await axios.get(
    'https://covidtracking.com/api/v1/us/current.json'
  );

  return parsers.usStats(res.data);
}

async function stateStats(state) {
  const res = await axios.get(
    'https://covidtracking.com/api/v1/states/current.json'
  );

  return parsers.stateStats(state, res.data);
}

export default {
  usStats,
  stateStats,
};
