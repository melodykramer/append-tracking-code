chrome.webRequest.onBeforeRequest.addListener(function(info) {

  var url = info.url.split('?')[0];

  // if(url.indexOf('?') !== -1) {
  //   url += '&share=1';
  // } else {
  //   url += '?share=1';
  // }

  return {
    redirectUrl: url + '?share=1'
  };

}, {
  urls: ['*://quora.com/*', '*://www.quora.com/*'],
  types: ['main_frame']
}, ['blocking']);