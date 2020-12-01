<style>
  .primary {
    color: white;
    background: darkorchid;
    box-shadow: 1px 2px 3px black;
    border: none;
  }
  .secondary {
    color: white;
    background: darkseagreen;
    box-shadow: 1px 2px 3px black;
  }
  button {
    margin: 10px;
  }
</style>

<script>
  export let variant = 'primary'
</script>

<button class={variant} on:click>
  <slot />
</button>
