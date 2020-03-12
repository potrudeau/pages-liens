var currentIPInfo = "";
var myPostalCode = "H8T"

function redirectOnContext(linkName, urlMaison, urlExt)
{    
    if (currentIPInfo.postal == myPostalCode)
        redirectUrl = urlMaison;
    else    
        redirectUrl = urlExt;
    
    console.log(linkName + ": " + currentIPInfo.postal);
    window.location.replace(redirectUrl);
}

$( document ).ready(function() {    
    
    $.get("https://ipinfo.io?token=62465a66620735", function(response) {
        currentIPInfo = response;    
        console.log(response);            
      }, "jsonp")
    
    $("#diskstation").click(function(){
        redirectOnContext("diskstation", "https://10.0.0.2:5001/", "");        
    });    

    $("#photostation").click(function(){
        redirectOnContext("photostation", "https://10.0.0.2/photo/", "");        
    });            

    $("#videostation").click(function(){
        redirectOnContext("videostation", "https://10.0.0.2:5001/?launchApp=SYNO.SDS.VideoStation.AppInstance", "");        
    });        

    $("#audiostation").click(function(){
        redirectOnContext("audiostation","https://10.0.0.2:5001/?launchApp=SYNO.SDS.AudioStation.Application", "");        
    });      
    
    $("#homebridge").click(function(){
        redirectOnContext("homebridge","https://maison.p-o.ca:8581", "");        
    });       
});