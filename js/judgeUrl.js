define(function(){
    return function(){
        var url=String(window.location.href);
        var startPos=url.lastIndexOf("/")+1;
        var endPos=url.lastIndexOf(".html");
        if(endPos==-1 || url.indexOf('index.html')!=-1){
            return "index";
        }
        else {
            return url.substring(startPos,endPos);
        }
    }
});
