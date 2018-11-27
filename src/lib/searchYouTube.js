import YOUTUBE_API_KEY from '../config/youtube.js'; 


var searchYouTube = (options, callback) => {
  // TODO
  console.log(options.key)
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      part : 'snippet'
    },
    // success: callback,
    success: function(data) {
      console.log(data);
      console.log('success!');
      callback(data.items);
    },
    error: function(data, textStatus, jqXHR) {
      
    },
  });
  // $.get(
  //   'https://www.googleapis.com/youtube/v3/search', {
  //     part: 'snippet, id',
  //     maxResults: options.max,
  //     key: options.key,
  //     q: options.query,
  //     success: callback,
  //     error: callback
  //   }
  // )
};

export default searchYouTube;
