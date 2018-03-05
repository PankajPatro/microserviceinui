(
    function (self) {
        'use strict';
        if (self.loadSiteTemplate) {
            return
        }
        var getPathAsHtml = function (path) {
            return path + ".html";
        }
        self.loadSiteTemplate = function (e, contentDivId, template) {
            var contentDiv = "";
            if (contentDivId) {
                contentDiv = document.getElementById(contentDivId);
            }
            else{
                contentDiv = document.getElementById('content');
            }
            contentDiv.innerHTML = "";
            var busyIndicator = document.getElementById('busy');
            busyIndicator.style.display = 'block';
            var pathId = "";
            if (template) {
                pathId = template;
            }
            else {
                if (!location.hash) {
                    pathId = "about";
                }
                else {
                    pathId = location.hash.split('#')[1];
                }
            }
            fetch(getPathAsHtml(pathId)).then(function (response) {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Failed Fetching the Pragma');
            }).then(function (templateHtml) {
                var tempDiv = document.createElement("div");
                tempDiv.innerHTML = templateHtml;
                var loadedTemplate = tempDiv.querySelector('#' + pathId);
                var clone = document.importNode(loadedTemplate.content, true);
                contentDiv.appendChild(clone);
                componentHandler.upgradeElement(contentDiv);
                busyIndicator.style.display = 'none';
            }).catch(function (error) {
                console.log('There has been a problem with your fetch operation: ', error.message);
                busyIndicator.style.display = 'none';
            });
        }
        window.addEventListener("hashchange", loadSiteTemplate);
        loadSiteTemplate();
    }
)(typeof self !== 'undefined' ? self : this);
