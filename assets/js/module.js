/**
 * @fileoverview All module functions
 * @author shailimaurya <shailimaurya945@gmail.com>
 */

'use strict';

export const weekDaysNames=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednessday",
    "Thursday",
    "Friday",
    "Saturday"
]

export const monthNames=[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
] 

/**
 * 
 * @param {number} dataUnix  Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Date String. formate: "Sunday 10,Jan";
 */

export const getDate = function(dataUnix, timezone){
  const date = new Date((dataUnix+timezone)*1000);
  const weekDayName = weekDaysNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()];

  return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;

}

/**
 * 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate:"HH:MM AM/PM"; 
 */

export const getTime = function(timeUnix,timezone){
    const date = new Date((timeUnix+timezone)*1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours>=12 ? "PM" : "AM";
    
    return `${hours % 12 || 12}:${minutes} ${period}`;

}

/**
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate:"HH:MM AM/PM"; 
 */

export const getHours = function(timeUnix,timezone){
    const date = new Date((timeUnix+timezone)*1000);
    const hours = date.getUTCHours();
    const period = hours>=12 ? "PM" : "AM";
    
    return `${hours % 12 || 12} ${period}`;
}
/**
 * 
 * @param {number} mps Meter per seconds
 * @returns {number} Kilometer per hours
 */

export const mps_to_kmh = mps => {
   const mph = mps * 3600;
   return mph/1000;
} 

export const aqiText={
    1:{
        level:"Good",
        message:"Air quality is considered satisfactory, and air pollution poses little or no risk"
    },
    2:{
        level:"Fair",
        message:"Air Quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air polution"
    },
    3:{
        level:"Moderate",
        message:"Members of sensitive groups may experience health effects. The general public is not likely to be affected."
    },
    4:{
        level:"Poor",
        message:"Everyone may begin to experience health effects; members of sensitive group may experience more serious health effects. "
    },
    5:{
        level:"Very Poor",
        message:"Health warnings of emergency conditions. The entire population is more likely to be affected."
    }
}