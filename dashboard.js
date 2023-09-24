


function getOrdinalSuffix(day){
 if (day >= 11 && day <= 13) {
  return "th";
 }
 switch (day % 10) {
  case 1: return 'st';
  case 2: return 'nd';
  case 3: return 'rd';
  default: return 'th';
 }
}
function formatDate(date){
 const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
 const day = date.getDate();
 const month = months[date.getMonth()];
 const year = date.getFullYear();
 const ordinalSuffix = getOrdinalSuffix(day);
 return `${day}${ordinalSuffix} ${month}, ${year}`;
}
const currentDate = new Date();
const formattedDate = formatDate(currentDate);
document.getElementById('date').innerHTML = formattedDate