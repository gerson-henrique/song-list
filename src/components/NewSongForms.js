import React, { useState } from 'react'

export default function NewSongForms({addSong}) {
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title)
    setTitle('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <label> Song name: </label>
      <input type='text' value={title} required onChange={(e) => setTitle(e.target.value)}/>
      <input type='submit' value="Add Song"/>
    </form>
  )
}
