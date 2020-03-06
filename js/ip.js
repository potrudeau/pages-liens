var currentIP = "";
var currentMaison = "";

function getCurrentContext()
{       
    if (currentIP == currentMaison)
        return "MAISON";
    else if (currentIP.includes("184.95.251."))
        return "LQ";
    else    
        return "EXT";    
}

function redirectOnContext(urlMaison, urlLQ, urlExt)
{
    var redirectUrl = "";
    switch (getCurrentContext()) {
        case "MAISON":
            redirectUrl = urlMaison;
            break;
        case "LQ" :
            redirectUrl = urlLQ;
            break;
        case "EXT":
            redirectUrl = urlExt;
            break;
    }

    console.log(getCurrentContext());
    console.log(redirectUrl);

    if (redirectUrl)
        window.location.replace(redirectUrl);
    else
        window.location.replace("404.html");
}


$( document ).ready(function() {
    
    $.getJSON('http://ip-api.com/json/', function(data){
        currentIP = data.query;        
    });    
    $.getJSON('http://ip-api.com/json/maison.p-o.ca', function(data){
        currentMaison = data.query;          
    });

    $("#test").click(function(){
        redirectOnContext("https://10.0.0.2:5001/", "", "https://maison.p-o.ca:5001/");        
    });    
});