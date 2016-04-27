// Cross off li elements when clicked
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$(".fa-plus-square-o").on("click", function(){
	$("input[type='text']").fadeToggle(500);
});

//Click the thrash icon to delete
$("ul").on("click", "span", function(event)
{
	if(confirm("Are you sure you want to delete this item?")){
		
		$(this).parent().fadeOut(500, function(){//the first "this" is refering to the <span> 
			$(this).remove();	//and the second "this" is removing the parent <li> element
		});
		//stop propagation: stopping the click event from bubbling up to 
		//the other parent elements on the page preventing triggers for other click events.
		event.stopPropagation();
	}
});


/*$("input[type='text']").on("click", function(){
	$(this).
});*/

$("input[type='text']").keypress(function(event){
	if(event.which === 13)
	{
		var text = $(this).val();//assigning the value in the input to "text"

		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + text + "</li>");//appending a new li child to the ul element with the input from "text"

		$(this).val("");//sets the text input field with empty string

	}
});



