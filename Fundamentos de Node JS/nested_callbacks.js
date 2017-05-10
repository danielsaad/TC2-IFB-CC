someAsyncFunction('data',function (text1){
	anotherAsyncFunction(text1,function(text2){
		yetAnotherAsyncFunction(text2,function(text3){
			console.log(text3);
		});
	});
});
