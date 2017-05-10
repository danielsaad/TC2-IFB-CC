function doSomething(){
	return Math.random()<0.5
}

function asyncFunction(failure,sucess){
	if(doSomething()){
		sucess();
	}
	else{
		failure();
	}
}

asyncFunction(
	function() { console.log('Success')},
	function() { console.log('Failure')}
);
