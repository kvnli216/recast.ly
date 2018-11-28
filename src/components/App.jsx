import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: exampleVideoData[0],
      videos: exampleVideoData
    };
    
    this.changeTitleVideo = this.changeTitleVideo.bind(this);
    this.searchCB = this.searchCB.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  
  searchCB(videoList) {
    this.setState({
      video: videoList[0],
      videos: videoList
    });
  }

  changeTitleVideo(video) {
    this.setState({
      video: video,
    });
  }

  handleChange(event) {
    event.preventDefault();
    console.log(event.target.value);
    var options =  {
      key: YOUTUBE_API_KEY,
      query: event.target.value,
      max: 5
    };
    searchYouTube(options, _.debounce(this.searchCB, 500));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>SEARCH!<h5>{<Search handleChange = {this.handleChange}/>}</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div ref='videoPlayer'>VIDEO PLAYER!<h5>{<VideoPlayer video = {this.state.video}/>}</h5></div>            
          </div>
          <div className="col-md-5">
            <div>VIDEO LIST!<h5>{<VideoList videos={this.state.videos} changeTitleVideo={this.changeTitleVideo} />}</h5></div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    var list;
    var options =  {
      key: YOUTUBE_API_KEY,
      query: 'react',
      max: 5
    };
    this.props.searchYouTube(options, this.searchCB);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
