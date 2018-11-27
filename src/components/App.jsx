import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: exampleVideoData[0],
      videos: exampleVideoData
    };
    
    this.changeTitleVideo = this.changeTitleVideo.bind(this);
  }

  changeTitleVideo(video) {
    this.setState({
      video: video,
    });
  }
  

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em>asdf</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div ref='videoPlayer'><h5>{<VideoPlayer video = {this.state.video}/>}</h5></div>            
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em>{<VideoList videos={this.state.videos} changeTitleVideo={this.changeTitleVideo} />}</h5></div>

          </div>
        </div>
      </div>
    );
  }
}

// var App = (props) => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em>asdf</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> view goes here</h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> ELLO WORLD</h5></div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
