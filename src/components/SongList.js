import React, {useState} from 'react'
import NewSongForms from './NewSongForms';

const SongList = () => {
const [songs, setSongs] = useState([
    {title: 'Despair hangover e ecstasy', id: 0},
    {title: 'Black Sheep', id: 1},
    {title: 'Genesis', id: 2},
  ]);

  const addSong = (title) => {
    setSongs([...songs,{title, id: songs.length }])
  };
  return(
    <div className='song-list'>
      <ul>

        {songs.map(song =>{
          return( <li key={song.id}>{song.title}</li>)
        })}
        
      </ul>
      <NewSongForms addSong={addSong}  />
    </div>
  )
}

export default SongList;
