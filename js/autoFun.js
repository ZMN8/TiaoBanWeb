/**
 * Created by Administrator on 2016/9/23.
 */
function Autofun(width){
    var winWidth=document.documentElement.clientWidth;

    if(winWidth>width){
        document.documentElement.style.fontSize=625+"%";
    }else{
        document.documentElement.style.fontSize=winWidth/width*625+"%";
    }
}



Autofun(750);
window.addEventListener('resize',function(){
    Autofun(750);
});