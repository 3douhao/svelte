import { writable } from 'svelte/store'

const PollStore = writable([
  {
    id: 1,
    question: 'tokyo or taiwan',
    answerA: 'taiwan',
    answerB: 'tokyo',
    voteA: 17,
    voteB: 8
  },
  {
    id: 2,
    question: 'Python or JavaScript?',
    answerA: 'Python',
    answerB: 'JavaScript',
    voteA: 9,
    voteB: 15
  },
  {
    id: 3,
    question: 'car or plane',
    answerA: 'car',
    answerB: 'plane',
    voteA: 20,
    voteB: 5
  }
])

export default PollStore
