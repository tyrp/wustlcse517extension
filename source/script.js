if(data.name != ""){
	$('tr:has(td:contains('+JSON.stringify(data.name)+'))').not(':first').children().each(function(){
			$(this).css("background-color", "white")
		});
}