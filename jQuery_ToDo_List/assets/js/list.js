// Cross off li elements when clicked
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click the X to delete.. will be using a fontawesome icon here later
$("ul").on("click", "span", function(event)
{
	$(this).parent().fadeOut(500, function(){//the first "this" is refering to the <span> 
		$(this).remove();	//and the second "this" is removing the parent <li> element
	});
	//stop propagation: stopping the click event from bubbling up to 
	//the other parent elements on the page preventing triggers for other click events.
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
	if(event.which === 13)
	{
		var text = $(this).val();//assigning the value in the input to "text"

		$("ul").append("<li><span>X </span>" + text + "</li>");//appending a new li child to the ul element with the input from "text"

		$(this).val("");//sets the text input field with empty string


	}
});
