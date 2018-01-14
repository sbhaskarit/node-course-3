const request=require('request');

var getWeather=(lat,long,callback)=>{
request({
 url:`https://api.darksky.net/forecast/1d6526b7ab0ad3f0d8bf351a33718e78/${lat},${long}`,
 json:true
},(error,response,body)=>{
 if(error)
 {
 callback('error');
}else if (response.statusCode===400) {
 callback('Unable to fetch weather');
}
else if (response.statusCode===200) {
 callback(undefined,{
   temperature:body.currently.temperature,
   apparentTemp:body.currently.apparentTemperature
})
}
});
}

module.exports.getWeather=getWeather;

