/**
 * Created by Administrator on 2016/10/5.
 */
define(["z","zeptoTouch","zeptoAnimate"],function($,ZA,ZT){
    var json={
        fixNode:$(".fix"),
        liNode:$(".fix li"),
        inputNode:$(".publish-common input"),
        bottomLi:$(".theBottom2 li"),
        modelUl:$(".model"),
        publishSub:$(".publish-footer button"),
        formNode:$("form"),
        liClickFun:function(){
            var that=this;
            that.liNode.tap(function(e){
                e.stopPropagation();
                if($(this).children("ul").css("display")=="none"){
                    $(this).children("ul").show();
                }else{
                    $(this).children("ul").hide();
                }
            })
        },
        inputNodeFun:function(){
            var that=this;
            that.inputNode.tap(function(){
                that.fixNode.children("."+this.name).show().siblings("ul").hide();
               that.fixNode.animate({"left":"0"},150)
            })
        },
        bottomLiClick:function(){
           var that=this;
            that.bottomLi.tap(function(){
                if($(this).parent().hasClass("outColor")){
                    $("input[name=outColor]").val(this.textContent);
                }
                if($(this).parent().hasClass("insideColor")){
                    $("input[name=insideColor]").val(this.textContent);
                }
                if($(this).parent().hasClass("place")){
                    $("input[name=place]").val(this.textContent);
                }
                if($(this).parent().hasClass("state")){
                    $("input[name=state]").val(this.textContent);
                }
                that.fixNode.animate({"left":"-100%"},150);//移出
            })
        },
        modelLiFun:function(){
            var that=this;
            var bottomLiNodes=that.modelUl.find('.theBottom').children();
            bottomLiNodes.tap(function (e) {
                e.stopPropagation();
                var value1=this.textContent;
                var value2=$(this).parent().siblings("a").text();
                var value3=$(this).parent().parent().parent().siblings("a").text();
                var value4=$(this).parent().parent().parent().parent().parent().siblings("a").text();
                $("input[name=model]").val(value4+" "+value3+" "+value2+" "+value1);
                that.fixNode.animate({"left":"-100%"},150);//移出
                that.fixNode.children().children().find("ul").hide();//初始
            })
        },
        fixDivClickFun:function(){//移出fix
            var that=this;
            that.fixNode.tap(function(e){
                var e=window.event||e;
                var target= e.srcElement|| e.target;
                if(target.className.indexOf("fix")!=-1){
                    that.fixNode.animate({"left":"-100%"},150,function(){
                        $(this).children().children().find("ul").hide();
                    });
                }
            })
        },
        publishSubFun:function(){
            var that=this;
            that.formNode.submit(function(){
                var bool=false;
                $("input").each(function(){
                    if($(this).val()==""){
                        bool=true;
                        alert("请完善信息!");
                        return false;
                    }
                });
                if(bool){
                    return false;
                }
            })
        },
        init:function(){
            this.liClickFun();
            this.inputNodeFun();
            this.modelLiFun();
            this.fixDivClickFun();
            this.bottomLiClick();
            this.publishSubFun();
        }
    };
    return function(){
        json.init();
    }
});