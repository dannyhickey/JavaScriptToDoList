// Cross off li elements when clicked
$("li").click(function(){
	$(this).toggleClass("completed");
});

//Click the X to delete.. will be using a fontawesome icon here later
$("span").click(function(event)
{
	$(this).parent().fadeOut(500, function(){//the first "this" is refering to the <span> 
		$(this).remove();					//and the second "this" is removing the parent <li> element
	});
	//stop propagation: stopping the click event from bubbling up to 
	//the other parent elements on the page preventing triggers for other events.
	event.stopPropagation();
});