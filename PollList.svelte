<style>
  main {
    display: flex;
    justify-content: space-around;
  }
</style>

<script>
  import PollDetails from './PollDetails.svelte'
  import PollStore from './PollStore.js'
</script>

<main>
  {#each $PollStore as poll (poll.id)}
    <PollDetails {poll} />
  {/each}
</main>
