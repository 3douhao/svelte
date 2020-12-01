<style>
  main {
    width: 800px;
    margin: auto;
    background: lightgray;
    text-align: center;
  }
</style>

<script>
  import PollForm from '../PollForm.svelte'
  import Header from '../Header.svelte'
  import Footer from '../Footer.svelte'
  import Tabs from '../Tabs.svelte'
  import PollList from '../PollList.svelte'
  export let name
  const handleAddPoll = e => {
    activeItem = 'Poll Items'
  }

  let items = ['Poll Items', 'Add A Poll']
  let activeItem = 'Add A Poll'
  const tabChange = e => {
    activeItem = e.detail
  }
</script>

<Header />

<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem === 'Poll Items'}
    <PollList />
  {:else if activeItem === 'Add A Poll'}
    <PollForm on:addPoll={handleAddPoll} />
  {/if}
  <Footer />
</main>
