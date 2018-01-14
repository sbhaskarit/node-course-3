var asyncAdd=(a,b)=> {
	return new Promise((resolve,reject)=> {
		setTimeout(()=> {
			if(typeof a==='number' && typeof b==='number')
			{
				resolve(a+b);

			}
			else
			{
				reject('argument must be numbers');

			}
		},1500);
	});
};
asyncAdd(5,7).then((res)=> {
	console.log('result',res);
	return asyncAdd(res,33);
},(errorMessage)=> {
	console.log(errorMessage);
}).then((res)=> {
	console.log('should be 45',res);
},(errorMessage)=> {
	console.log(errorMessage);
});




/*var somepromise =new Promise((resolve,reject)=>{
	//resolve('hey . It worked!');
	resolve('unable to fulfil promise');
});


somepromise.then((message) =>{
	console.log('Success' ,message);
},(errorMessage)=> {
	console.log('error:',errorMessage);
}); */