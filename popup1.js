// When the popup HTML has loaded
window.addEventListener("load", function(evt) {
    // 
    document.getElementById('markrow').addEventListener('submit', function(){
		//alert(document.getElementById("name").value);
		//var data = document.getElementById("name").value;
		//alert(data);
		chrome.extension.getBackgroundPage().getPageInfo(document.getElementById("name").value);
		window.close();
	});

});