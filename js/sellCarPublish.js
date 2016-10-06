/**
 * Created by Administrator on 2016/10/3.
 */
define(['z','zeptoTouch','zeptoAnimate'],function($,ZT,ZA){
    var json={
        fixDiv:$(".fix"),
        inputNodes:$(".publish-common>li>input"),
        publishUl:$(".publish"),
        aNodes:$(".fix a"),
        modelUl:$(".model"),
        colorUl:$(".color"),
        sortUl:$(".sort"),
        subBtn:$("button[type=submit]"),
        formNode:$("form"),
        publishUlClick:function(){//移入fix
            var that=this;
            that.inputNodes.tap(function(){
                if(this.name=="price"){
                    return false;
                }
                that.fixDiv.children("."+this.name).show().siblings("ul").hide();
                that.fixDiv.animate({"left":0},150);
            })
        },
        aNodesClikFun:function(){
            var that=this;
            that.aNodes.on("tap",function(e){
                e.stopPropagation();
                if($(this).siblings("ul").css("display")=="none"){
                    $(this).siblings("ul").show();
                }else{
                    $(this).siblings("ul").hide();
                }
            })
        },
        modelFun:function(){
            var that=this;
            var bottomLiNodes=that.modelUl.find(".theBottom").children();
            bottomLiNodes.children().tap(function(){
                var value1=this.textContent;
                var value2=$(this).parent().parent().siblings("a").text();
                var value3=$(this).parent().parent().parent().parent().siblings("a").text();
                that.fixDiv.animate({"left":"-100%"},150,function(){
                    $(this).children().children().children("ul").hide();
                });
                $("input[name=model]").val(value3+" "+value2+" "+value1);
            })
        },
        colorFun:function(){
            var that=this;
            var bottomLiNodes=that.colorUl.find(".theBottom").children();
            bottomLiNodes.tap(function(){
                $(this).addClass("publish-select").siblings().removeClass("publish-select");
                if(that.colorUl.find(".publish-select").length==2){
                    var value1=that.colorUl.find(".publish-select").eq(0).text().substring(0,1);
                    var value2=that.colorUl.find(".publish-select").eq(1).text().substring(0,1);
                    that.fixDiv.animate({"left":"-100%"},150,function(){
                        $(this).children().children().children("ul").hide();
                    });
                    $("input[name=color]").val("外"+value1+"内"+value2);
                }


            })
        },
        sortFun:function(){
            var that=this;
            that.sortUl.children().tap(function(){
                that.fixDiv.animate({"left":"-100%"},150,function(){
                    $(this).children().children().children("ul").hide();
                });
                $("input[name=sort]").val(this.textContent);
            })
        },
        subFun:function(){
            var that=this;
            that.formNode.submit(function(){
                var bool=false;
                $("input").each(function(){
                    if(this.value==""){
                        alert("请完善信息！");
                        bool=true;
                        return false;
                    }
                });
                if(bool){
                    return false;
                }
        })
        },
        fixDivClickFun:function(){//移出fix
            var that=this;
            that.fixDiv.tap(function(e){
                var e=window.event||e;
                var target= e.srcElement|| e.target;
                if(target.className.indexOf("fix")!=-1){
                    that.fixDiv.animate({"left":"-100%"},150,function(){
                        $(this).children().children().children("ul").hide();
                    });
                }
            })
        },
        init:function(){
            this.publishUlClick();
            this.aNodesClikFun();
            this.fixDivClickFun();
            this.modelFun();
            this.colorFun();
            this.sortFun();
            this.subFun();
        }
    };
    return function(){
        json.init();
    };
});
