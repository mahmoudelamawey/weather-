
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
//get data

const key = "f1e9f019feda40a19b2151318242507"
let city = "48.8567,2.3508"

const base_url = "https://api.weatherapi.com/v1"
async function getData(){
  let res = await fetch(`${base_url}/current.json?key=${key}&q=${city}`)
let data = await res.json()
console.log(data);
}
getData()

// let dayName = date.toLocaleString('ar-ar',{weekday:'narrow'})
// console.log(dayName)

// let monthName = date.toLocaleString('en-us',{month:'long'})
// console.log(monthName)







// console.log(dateToday.getDate())
// console.log(months[dateToday.getMonth()]);



// if(navigator.geolocation){
//   navigator.geolocation.getCurrentPosition(function(pos){
//     console.log(pos)
//     let lat = pos.coords.latitude;
//     let lon = pos.coords.longitude;
//     getDataApi(`${lat},${lon}`)
//   })
// }

