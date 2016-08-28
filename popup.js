  var launchButton = document.getElementById('launch');
  launchButton.addEventListener('click', function() {
  
    chrome.tabs.create({
            "url" : "client.html",
            "selected": true
    });

  }, false);