/**
 * @fileoverview Menage all routes
 * @author shailimaurya<shailimaurya945@gmail.com>
 */

'use strict';

import {updateWeather, error404} from "./app.js";
// const defaultLocation = "#/weather?lat=51.5073219&lon=-0.1276474";
const defaultLocation = "#/weather?lat=26.7895579&lon=82.7231355";

const currentLocation = function(){
   window.navigator.geolocation.getCurrentPosition(res=>{
    const {latitude, longitude}=res.coords;
    // console.log("latitude:", latitude);
    updateWeather(`lat=${latitude}`, `lon=${longitude}`);
   }, err=>{
    window.location.hash=defaultLocation;
    // console.log("running");
   })
}

/**
 * 
 * @param {string} query  searching query
 */
const searchedLocation = query => updateWeather(...query.split('&'));
//updateWeather(lat=51.5073219, lon=-0.1276474);

const routes = new Map([
        ["/current-location", currentLocation],
        ["/weather",searchedLocation]
    ]);

const checkHash = function(){
   const requestURL=window.location.hash.slice(1);
   const [route, query] = requestURL.includes? requestURL.split("?") : [requestURL];
   routes.get(route) ? routes.get(route)(query) : error404();
}  

window.addEventListener("hashchange",checkHash);
window.addEventListener("load",function(){
    if(!window.location.hash){
        window.location.hash = "#/current-location"
    }else{
        checkHash();
    }
})