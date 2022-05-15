function numero(num)
{
    document.getElementById("display").value += num;
}



function operazione(){
	
	let valore = [];
				
	if(document.getElementById("display").value.includes("+"))
	{
	valore = document.getElementById("display").value.split('+');
	return +(valore[0]) + +(valore[1]);
	}
		
	else if(document.getElementById("display").value.includes("-"))
	{
	valore = document.getElementById("display").value.split('-');
	return +(valore[0]) - +(valore[1]);
	}
		
	else if(document.getElementById("display").value.includes("*"))
	{
	valore = document.getElementById("display").value.split('*');
	return +(valore[0]) * +(valore[1]);
	}
		
	else if(document.getElementById("display").value.includes("/"))
	{
	valore = document.getElementById("display").value.split('/');
	return +(valore[0]) / +(valore[1]); 
	}
	
	
}
	
function uguale(){	
    let risultatoFinale = operazione()
    document.getElementById('display').value = risultatoFinale; 
	
}


function cancella(){
    document.getElementById("display").value = null;
}   