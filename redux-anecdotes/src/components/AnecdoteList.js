import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { giveVote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)

  const anecdotesByVotes = (anecdotes) => {
    anecdotes.sort((a, b) => {
      return b.votes - a.votes
    })
  }

  const voteAnecdote = (anecdote) => {
    dispatch(giveVote(anecdote.id))
    dispatch(notificationChange(`you voted '${anecdote.content}'`))
    setTimeout(() => {
      dispatch(notificationChange('NULL'))
    }, 5000)
  }

  return(
    <div>
      <h2>Anecdotes</h2>
      {anecdotesByVotes(anecdotes)}
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            {/*<button onClick={() => dispatch(giveVote(anecdote.id))}>vote</button>*/}
            <button onClick={() => voteAnecdote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList