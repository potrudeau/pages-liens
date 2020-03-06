var currentIP = "";
var currentMaison = "";

function redirectOnContext(urlMaison, urlExt)
{
    var redirectUrl = "";
    if (currentIP == currentMaison)
        redirectUrl = urlMaison;
    else    
        redirectUrl = urlExt;
    
    console.log(redirectUrl);
    window.location.replace(redirectUrl);
}

$( document ).ready(function() {
    
    $.getJSON('http://ip-api.com/json/', function(data){
        currentIP = data.query;        
    });    
    $.getJSON('http://ip-api.com/json/maison.p-o.ca', function(data){
        currentMaison = data.query;          
    });
    
    $("#diskstation").click(function(){
        redirectOnContext("https://10.0.0.2:5001/", "https://maison.p-o.ca:5001/");        
    });    

    $("#photostation").click(function(){
        redirectOnContext("https://10.0.0.2/photo/", "https://maison.p-o.ca:8081/photo/");        
    });            

    $("#videostation").click(function(){
        redirectOnContext("https://10.0.0.2:5001/?launchApp=SYNO.SDS.VideoStation.AppInstance", "https://maison.p-o.ca:5001/?launchApp=SYNO.SDS.VideoStation.AppInstance");        
    });        

    $("#audiostation").click(function(){
        redirectOnContext("https://10.0.0.2:5001/?launchApp=SYNO.SDS.AudioStation.Application", "https://maison.p-o.ca:5001/?launchApp=SYNO.SDS.AudioStation.Application");        
    });      
    
    $("#homebridge").click(function(){
        redirectOnContext("https://maison.p-o.ca:8581", "https://maison.p-o.ca:8581");        
    });       
});