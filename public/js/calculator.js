function clickme(){
		document.getElementById('first').innerHTML = "Aldrin";
	}

function Addme(){
	var x = document.getElementById('fn').value;
	var y = document.getElementById('sn').value;
	var sum = parseInt(x) + parseInt(y);
document.getElementById('answer').innerHTML = "Sum:"+sum;

}