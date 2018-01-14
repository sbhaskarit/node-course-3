console.log('starting app');

setTimeout(() =>{
	console.log('iside of callback')

},2000);

setTimeout(() =>{
	console.log('second settimeout');

},0);

console.log('finishing app');