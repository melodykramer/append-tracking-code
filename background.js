chrome.webRequest.onBeforeRequest.addListener(function(info) {

  var url = info.url;


  return {
    redirectUrl: url + 'INSERT TRACKING CODE HERE'
  };

}, {
  urls: ['*SITE*'],
  types: ['main_frame']
}, ['blocking']);
