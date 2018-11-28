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
      var newOptions = {
        key: options.key,
        channelId: data.items[0].snippet.channelId
      };
      console.log(this);
      searchChannel(newOptions, channelCB);
      callback(data.items);
    },
    error: function(data, textStatus, jqXHR) {   
    },
  });
};

var searchChannel = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/channels',
    type: 'GET',
    data: {
      id: options.channelId,
      part: 'snippet, contentDetails, statistics',
      key: options.key
    },
    // success: callback,
    success: function(data) {
      callback(data.items[0].statistics);
      
    },
    error: function(data, textStatus, jqXHR) {   
    },
  });
};

export default searchYouTube;
// export searchChannel;
