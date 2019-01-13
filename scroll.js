	<!--
	var space = " "; //change spacing
	var speed = "150"; //higher speed = slower scroll
	var pos = 0;
	var msg = "test"; //insert text here
	function Scroll()
	{
	document.title = msg.substring(pos, msg.length) + space + msg.substring(0,pos);
	pos++;
	if (pos > msg.length) pos = 0;
	window.setTimeout("Scroll()", speed);
	}
	Scroll();
	-->
