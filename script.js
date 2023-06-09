const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
	if(sampleObject.red === key){
		return true;
		break;
	}
	else if(sampleObject.green === key){
		return true;
		break;
	}
	else if(sampleObject.white === key){
		return true;
		break;
	}
	return false;
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));

