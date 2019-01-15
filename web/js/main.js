function clickButton() {
	alert("Clicked!");
}

function changeColor(container, input) {
	div = document.getElementById(container);
	color = document.getElementById(input).value;
	
	// if (!color)
	// 	alert("Please type a color.");
	// else
	// 	div.style.backgroundColor = color;
}

$().ready(function(){
	$("div button:last-of-type").on("click", function(){
		$div = $(this).closest('div');
		$input = $div.children('input').val();
		if(!$input) {
			$('div').append('<div class="alert alert-danger" style="position:absolute; top: 50%; left: 50%;" role="alert">'
				+ 'Please specify a color in the textbox.'
				+ '</div>');
			$('.alert').delay(300).fadeOut();
		} 
		else {
			$div.css('background-color', $input);
		} 
	});	

	$("#fadeButton").on("click", function(){
		$("#thirdDiv").fadeToggle("fast");
	});

	
});
