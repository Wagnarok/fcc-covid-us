<script context="module">
  import stateNames from '../data/stateNames.js';
  import requests from '../data/request.js';

  export async function preload(page) {
    const state = page.params['state'];
    if (stateNames.find((s) => s.Abbreviation === state) === undefined) {
      this.error(404, 'State Not Found');
      return;
    }

    try {
      const stats = await requests.stateStats(state);

      return { state, stats };
    } catch (err) {
      this.error(
        500,
        'There was an unexpected error with the api, please try again later.'
      );
      return;
    }
  }
</script>

<script>
  import CovidStat from '../components/CovidStat.svelte';
  import CovidChart from '../components/CovidChart.svelte';
  import TableContainer from '../components/TableContainer.svelte';

  export let state;
  export let stats;
</script>

<style>
  .container {
    margin: 40px;
  }
</style>

<svelte:head>
  <title>Covid 19 Tracker - {state}</title>
</svelte:head>
<div class="section header">
  <div class="container">
    <h1>Covid-19 - {state}</h1>
  </div>
</div>

<CovidStat {...stats} />

<CovidChart />
