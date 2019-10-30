import React, {Component} from 'react';
import SongList from '../components/SongList';
import SongDetail from '../components/SongDetail';

class MusicContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            currentSong: null
        }
        this.handleSongSelected = this.handleSongSelected.bind(this);
    }

    componentDidMount() {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
            .then(result => result.json())
            .then(data => this.setState({ songs: data.feed.entry }))
            .catch(error => console.error(error));
    }

    handleSongSelected(index) {
        const selectedSong = this.state.songs[index]
        this.setState({ currentSong: selectedSong })
    }

    render() {
        return (
            <div className='music-container'>
                <h1>UK Current Top 20...</h1>
                <SongList songs={this.state.songs} />
                <SongDetail song={this.state.currentSong} />
            </div>
        )
    }

}

export default MusicContainer;