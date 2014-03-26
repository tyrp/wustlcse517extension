// This function is called onload in the popup code
function getPageInfo(name) {
	//alert("first" + name);
	chrome.tabs.executeScript(null,{file:"jquery.min.js"});
	//alert("second" + name);
	chrome.tabs.executeScript(null,{code:'var data = {name:'+ JSON.stringify(name) +'};'}, function(){
		chrome.tabs.executeScript(null,{file:"script.js"}, function(){
			//all injected
			chrome.tabs.remove();
		});
	});

};
