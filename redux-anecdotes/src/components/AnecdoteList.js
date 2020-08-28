import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { giveVote } from '../reducers/anecdoteReducer'

/*const Anecdote = ({ anecdote }) => {
  return(
    <li>
      {anecdote.content}<br />
      has {anecdote.votes}
    </li>
  )
}*/

const AnecdoteList = (props) => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)

  const anecdotesByVotes = (anecdotes) => {
    anecdotes.sort((a, b) => {
      return b.votes - a.votes
    })
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
            <button onClick={() => dispatch(giveVote(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList