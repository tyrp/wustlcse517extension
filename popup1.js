// This callback function is called when the content script has been
// injected and returned its results
function onPageInfo(o) {
    document.getElementById("name").value = o.name;
    //document.getElementById("url").value = o.url;
    //document.getElementById("summary").innerText = o.summary;
}

// 
function markRow() {
	alert("huh");
	$('tr:has(td:contains("Kilian"))').not(':first').children().each(function(){
		$(this).css("background-color", "white")
	});
}

// When the popup HTML has loaded
window.addEventListener("load", function(evt) {
    // 
    document.getElementById('markrow').addEventListener('submit', function(){
		//alert(document.getElementById("name").value);
		var data = document.getElementById("name").value;
		alert(data);
		chrome.extension.getBackgroundPage().getPageInfo(data);
	});
    // Call the getPageInfo function in the background page, injecting content_script.js
    // into the current HTML page and passing in our onPageInfo function as the callback
    //chrome.extension.getBackgroundPage().getPageInfo(onPageInfo);
});