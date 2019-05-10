const WEATHER_API_KEY = "";
const API_STEM = "";
function zipUrl(zip) {
 return `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`;
}