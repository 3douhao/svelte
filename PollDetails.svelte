<style>
  .percent-a {
    height: 100%;
    background: rgba(217, 27, 66, 0.2);
    position: absolute;
  }

  .percent-b {
    height: 100%;
    background: rgba(69, 196, 150, 0.2);
    position: absolute;
  }
  article {
    width: 40%;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
  }
  div {
    cursor: pointer;
    margin: 5px;
    font-size: 1.5rem;
  }
  div:hover {
    opacity: 0.6;
  }
</style>

<script>
  export let poll
  import PollStore from './PollStore.js'
  import Button from './Button.svelte'
  import { tweened } from 'svelte/motion'
  $: totalVotes = poll.voteA + poll.voteB
  const handleDelete = id => {
    PollStore.update(currentPolls => {
      return currentPolls.filter(poll => poll.id !== id)
    })
  }
  const handleVote = (option, id) => {
    PollStore.update(currentPolls => {
      let updatedPolls = currentPolls
      let votedPoll = updatedPolls.find(
        poll => poll.id === id
      )

      if (option === 'voteForA') {
        votedPoll.voteA++
      }
      if (option === 'voteForB') {
        votedPoll.voteB++
      }
      return updatedPolls
    })
  }
  $: percentA =
    Math.floor((poll.voteA / totalVotes) * 100) || 0
  $: percentB =
    Math.floor((poll.voteB / totalVotes) * 100) || 0
  let tweenedA = tweened(0)
  let tweenedB = tweened(0)
  $: tweenedA.set(percentA)
  $: tweenedB.set(percentB)
</script>

<article>
  <h3>{poll.question}</h3>
  <h4>Total votes: {totalVotes}</h4>
  <div
    on:click={() => handleVote('voteForA', poll.id)}
    style="position:relative"
  >
    <div class="percent-a" style="width: {$tweenedA}%" />
    <span> {poll.answerA} got {poll.voteA} votes </span>
  </div>
  <div
    on:click={() => handleVote('voteForB', poll.id)}
    style="position:relative"
  >
    <div class="percent-b" style="width: {$tweenedB}%" />
    <span> {poll.answerB} got {poll.voteB} votes </span>
  </div>
  <div class="delete">
    <Button on:click={() => handleDelete(poll.id)}>
      Delete
    </Button>
  </div>
</article>
