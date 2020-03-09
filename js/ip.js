var currentIP = "";
var currentMaison = "";

function redirectOnContext(linkName, urlMaison, urlExt)
{
    var redirectUrl = "";
    if (currentIP == currentMaison)
        redirectUrl = urlMaison;
    else    
        redirectUrl = urlExt;
    
    console.log(linkName + ": " + redirectUrl);
    window.location.replace(redirectUrl);
}

$( document ).ready(function() {
    
    $.getJSON('http://ip-api.com/json/', function(data){        
        currentIP = data.query;        
        console.log("Current IP : " + currentIP);
    });    
    $.getJSON('http://ip-api.com/json/maison.p-o.ca', function(data){
        currentMaison = data.query;    
        console.log("Maison IP : " + currentMaison);      
    });
    
    $("#diskstation").click(function(){
        redirectOnContext("diskstation", "https://10.0.0.2:5001/", "https://maison.p-o.ca:5001/");        
    });    

    $("#photostation").click(function(){
        redirectOnContext("photostation", "https://10.0.0.2/photo/", "https://maison.p-o.ca:8081/photo/");        
    });            

    $("#videostation").click(function(){
        redirectOnContext("videostation", "https://10.0.0.2:5001/?launchApp=SYNO.SDS.VideoStation.AppInstance", "https://maison.p-o.ca:5001/?launchApp=SYNO.SDS.VideoStation.AppInstance");        
    });        

    $("#audiostation").click(function(){
        redirectOnContext("audiostation","https://10.0.0.2:5001/?launchApp=SYNO.SDS.AudioStation.Application", "https://maison.p-o.ca:5001/?launchApp=SYNO.SDS.AudioStation.Application");        
    });      
    
    $("#homebridge").click(function(){
        redirectOnContext("homebridge","https://maison.p-o.ca:8581", "https://maison.p-o.ca:8581");        
    });       
});