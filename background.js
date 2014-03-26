// Array to hold callback functions
//var callbacks = [];

// This function is called onload in the popup code
function getPageInfo(name) {
    // Add the callback to the queue
	alert("first" + name);
	chrome.tabs.executeScript(null,{file:"jquery.min.js"});
	alert("second" + name);
	chrome.tabs.executeScript(null,{code:"var data = {name:'hello'};"}, function(){
		chrome.tabs.executeScript(null,{file:"script.js"});
	});

};
