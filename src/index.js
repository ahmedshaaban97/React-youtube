import React, {Component} from 'react'
import ReactDom from 'react-dom'
import Lodash from 'lodash'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetails from './components/video_detail'
import ytsearch from 'youtube-api-search'

const API_KEY = 'AIzaSyBBJD7vZH95OrYZb0Sq8Yfdg5VvqdtFOiE';


// create new component
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: '',
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('reactjs')
    }


    videoSearch(term) {
        ytsearch({key: API_KEY, term: term}, (videos, term) => {
            this.setState({
                term: term,
                videos: videos,
                selectedVideo: videos[0]
            });
            // we can write the line in other way this.setState({ videos });
            // it is a es6 properte when the key and value has the same name
            //we can write only one and javaScript will understand
        });
    }


    render() {

        const VideoSearch = Lodash.debounce((term)=>{this.videoSearch(term)} , 300)
        return (
            <div>
                <SearchBar onSearchTermChange = {VideoSearch}/>
                <VideoDetails video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos}
                           onVideoSelect={selectedVideo => {
                               this.setState({selectedVideo: selectedVideo})
                           }}
                />
            </div>
        );
    }


}
//render the component
        ReactDom.render(<App/>, document.querySelector('.container'));