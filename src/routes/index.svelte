<script context="module">
  import requests from '../data/request.js';

  export async function preload() {
    try {
      const usStats = await requests.usStats();
      const historic = await requests.historicUS();

      return { usStats, historic };
    } catch (err) {
      console.log(err);
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

  export let usStats;
  export let historic;
  console.log(historic, 'historic');
  console.log(usStats, 'usStats');
</script>

<style>

</style>

<svelte:head>
  <title>Covid-19 US Tracker</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Covid-19</h1>
  </div>
</div>
<CovidStat {...usStats} />

<CovidChart />

<TableContainer />
