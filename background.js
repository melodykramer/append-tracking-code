chrome.webRequest.onBeforeRequest.addListener(function(info) {

  var url = info.url.split('?')[0];

  // if(url.indexOf('?') !== -1) {
  //   url += '&share=1';
  // } else {
  //   url += '?share=1';
  // }

  return {
    redirectUrl: url + 'utm_medium=pinterest&utm_source=nprfood&utm_campaign=arts'
  };

}, {
  urls: ['*://npr.org/*', '*://www.npr.org/*'],
  types: ['main_frame']
}, ['blocking']);
