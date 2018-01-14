var getCodeAddress=(address) => {
	return new Promise(resolve,reject)=> {
		var encodedAddress = encodeURIComponent(address);
  request({
    url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json:true
  },(error,response,body)=>{
    if(error) {
      callback('Unable to connect google server');
    } if (body.status ==='ZERO_RESULTS') {
      callback('Unable to find that address');
    } else if (body.status ==='OK') {
      callback(undefined,{
        address : body.results[0].formatted_address,
        latitude :body.results[0].geometry.location.lat,
        longitude : body.results[0].geometry.location.lng
      });
      // console.log(`Address : ${body.results[0].formatted_address}`);
      // console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
      // console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
    }
  });

	}

};
geocodeAddress('19146').then((location)=> {
	console.log(JSON.stringify(location,undefined,2));

},(errorMessage ) => {
	console.log(errorMessage);
})