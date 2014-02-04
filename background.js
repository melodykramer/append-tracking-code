chrome.webRequest.onBeforeRequest.addListener(function(info) {

  var url = info.url;


  return {
    redirectUrl: url + 'utm_medium=pinterest&utm_source=nprfood&utm_campaign=arts'
  };

}
