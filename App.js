const request=require('request');
const yargs=require('yargs');
const API_KEY='1d6526b7ab0ad3f0d8bf351a33718e78';
const geocode=require('./geocode.js');

const weather=require('./weather.js')
const argv=yargs
.options({
 a:{
   demand:true,
   alias:'address',
   describe:'Address to fetch weather',
   string:true
 }
})
.help()
.alias('help','helpMe')
.argv;
weather.getWeather(14.2138373,76.40424039999999,(error,weatherResult)=>{
 if(error){
   console.log('error in temperature fetching fn');
 }
 else {
   console.log(JSON.stringify(weatherResult,undefined,4));
 }
});

geocode.geocodeAddress(argv.address,(errorMessage,results) => {
   if(errorMessage) {
     console.log(errorMessage);
   } else {
     console.log(JSON.stringify(results,undefined,3));
   }
});