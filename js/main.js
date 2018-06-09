/*function to create typing effect for the profile header*/
var i=1;
function func()
{
	var message="Arshi Saleh";
	if( i <= message.length )
	{
		var txt=message.substring(0,i);
		document.getElementById("type").innerHTML=txt;
		setTimeout("func()",100);
		i++;
	}
	
}
func();

