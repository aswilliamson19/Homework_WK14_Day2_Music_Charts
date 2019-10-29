import React from 'react';

const SongDetail = ({ song }) => {
    if (!song) return null
        return (
            <div className='song-detail'>
                <p>{this.props.song.title}</p>
            </div>
        )
    }

export default SongDetail;