<script>
  import {createEventDispatcher} from 'svelte'
  const dispatch = createEventDispatcher()
  export let items
  export let activeItem
</script>
<ul>
  {#each items as item}
    <li class:active={item ===activeItem} on:click={ () => dispatch('tabChange', item) }>
      {item}
    </li>
  {/each}
</ul>
<style>
  .active {
    color: plum;
    text-decoration: underline;
  }
  ul {
    display: flex;
    justify-content: center;
  }
  li {
    margin: 20px;
    list-style-type: none;
    cursor: pointer;
  }
</style>
