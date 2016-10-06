define(['z',"zeptoTouch","zeptoAnimate"],function($,zT,zA){
    var json={
        filterLiNodes:$("#onSale_header li"),
        filterUl:$(".filter"),
        brandUl:$(".brand"),
        brandLi:$(".brand li"),
        sortUl:$(".sort"),
        sortLi:$(".sort li"),
        theBottomLi:$(".theBottom li"),
        fixNode:$(".fix"),
        fixBtn:$(".fix_btn"),
        fixCancel:$(".fix_cancel"),
        inputVal:$("input[name=filter]"),
        spanNode:$(".on_box"),
        fixCancelClick:function(){//点击取消按钮
            var that=this;
            that.fixCancel.tap(function(){
                that.inputVal.val("");
                that.spanNode.html("").hide();
                that.fixNode.animate({"left":"-100%"});
                that.fixBtn.animate({"left":"-100%"});
            })
        },
        filterClick:function(){//筛选
            var that=this;
            that.filterLiNodes.tap(function(){
                var filterName=this.firstChild.id+"Ul";
                that.fixNode.animate({"left":"0"});
                that.fixBtn.animate({"left":"0"});
                that.brandLi.find("ul").hide();
                that[filterName].show().siblings("ul").hide();

            })
        },
        sortLiNodesClick:function(){//类型
            var that=this;
            that.sortLi.tap(function(){
                that.spanNode.text(this.innerHTML).show();
                that.inputVal.val(this.innerHTML);
            })
        },
        brandLiNodesClick:function(){//品牌
            var that=this;
            that.brandLi.on('tap',function(e){
                e.stopPropagation();//阻止事件冒泡
                if($(this).children("ul").css("display")=="none"){
                    $(this).children("ul").show();
                }else{
                    $(this).find("ul").hide();
                }
            })
        },
        theBottomLiClick:function(){//brand 最底层的li 的点击事件
            var that=this;
            that.theBottomLi.tap(function(){
                var textVal=$(this).parent().parent().parent().siblings("a").text();
                textVal+=" "+$(this).parent().siblings("a").text();
                textVal+=" "+this.firstChild.textContent;
                that.spanNode.text(textVal).show();
                that.inputVal.val(textVal);
            })
        },
        init:function(){
            this.filterClick();
            this.sortLiNodesClick();
            this.fixCancelClick();
            this.brandLiNodesClick();
            this.theBottomLiClick();
        }
    };
    return function(){
        json.init();
    }
});