// Array to hold callback functions
//var callbacks = [];

// This function is called onload in the popup code
function getPageInfo(name) {
    // Add the callback to the queue
	alert("first" + name);
	chrome.tabs.executeScript(null,{file:"jquery.min.js"});
	alert("second" + name);
	chrome.tabs.executeScript(null,{code:'var data = {name:'+ JSON.stringify(name) +'};'}, function(){
		chrome.tabs.executeScript(null,{file:"script.js"}, function(){
			chrome.tabs.sendRequest(tabId, {scriptOptions: {param1:'value1',param2:'value2'}}, function(){
            //all injected
			});
		});
	});

};
