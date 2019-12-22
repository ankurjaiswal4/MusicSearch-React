import React, { useState } from 'react';

const Songs = (props) => {
    const [songs, setSongs] = useState([]);

    const URL = 'https://jsonplaceholder.typicode.com/photos';

    fetch(URL).then(res => res.json()).then(data => {
        setSongs(data);
    });

    // useEffect();

    return (
        < React.Fragment >
            {
                songs.map((song) =>
                    <div className="song-card">
                        <img src={song.thumbnailUrl} alt=""></img>
                        <span className="song-name">{song.title}</span>
                        <span className="song-preview">{song.preview}</span>
                    </div>
                )
            }
        </React.Fragment >
    )
}

export default Songs;