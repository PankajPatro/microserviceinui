(
    function (self) {
        'use strict';
        if (self.loadSiteTemplate) {
            return
        }
        var getPathAsHtml = function(path){
            return  path + ".html";
        }
        self.loadSiteTemplate = function () {
            var pathId = "";
            if(!location.hash){
                pathId = "about";
            }
            else{
                pathId = location.hash.split('#')[1];
            }
            fetch(getPathAsHtml(pathId)).then(function(response) {
                if(response.ok) {
                  return response.text();
                }
                throw new Error('Failed Fetching the Pragma');
              }).then(function(templateHtml) { 
                  var tempDiv = document.createElement("div");
                  tempDiv.innerHTML = templateHtml;
                  var loadedTemplate = tempDiv.querySelector('#'+pathId);
                  var clone = document.importNode(loadedTemplate.content, true);
                  var contentDiv = document.getElementById('content');
                  contentDiv.innerHTML = "";
                  contentDiv.appendChild(clone);
              }).catch(function(error) {
                console.log('There has been a problem with your fetch operation: ', error.message);
              });
        }
        window.addEventListener("hashchange", loadSiteTemplate);
        loadSiteTemplate();
    }
)(typeof self !== 'undefined' ? self : this);
