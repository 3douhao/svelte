<style>
  .error {
    color: red;
    font-weight: bold;
  }
  form {
    width: 50vw;
    margin: auto;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<script>
  import Button from './Button.svelte'
  import PollStore from './PollStore.js'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  let fields = { question: '', answerA: '', answerB: '' }
  let errors = { question: '', answerA: '', answerB: '' }
  let valid = false

  const handleSubmit = () => {
    valid = true
    if (fields.question.trim().length < 5) {
      valid = false
      errors.question = "Too short, can't be a queseion"
    } else {
      errors.question = ''
    }
    if (fields.answerA.trim().length < 1) {
      valid = false
      errors.answerA = 'Invalid answer, try again'
    } else {
      errors.answerA = ''
    }
    if (fields.answerB.trim().length < 1) {
      valid = false
      errors.answerB = 'Wrong answer, think carefully'
    } else {
      errors.answerB = ''
    }
    if (valid) {
      const poll = {
        ...fields,
        voteA: 4,
        voteB: 20,
        id: Math.random()
      }

      PollStore.update(currentPolls => [
        ...currentPolls,
        poll
      ])
      dispatch('addPoll')
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-field">
    <label for="question">Poll Question</label>
    <input
      type="text"
      name="question"
      id="question"
      bind:value={fields.question}
    />
    <div class="error">{errors.question}</div>
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A</label>
    <input
      type="text"
      name="answer-a"
      id="answer-a"
      bind:value={fields.answerA}
    />
    <div class="error">{errors.answerA}</div>
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B</label>
    <input
      type="text"
      name="answer-b"
      id="answer-b"
      bind:value={fields.answerB}
    />
    <div class="error">{errors.answerB}</div>
  </div>
  <Button variant="secondary">Submit</Button>
  <Button>reset</Button>
</form>
