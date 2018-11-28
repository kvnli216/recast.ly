import YOUTUBE_API_KEY from '../config/youtube.js'; 


var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      part: 'snippet',
      type: 'video'
    },
    // success: callback,
    success: function(data) {
      callback(data.items);
    },
    error: function(data, textStatus, jqXHR) {   
    },
  });
};

export default searchYouTube;
