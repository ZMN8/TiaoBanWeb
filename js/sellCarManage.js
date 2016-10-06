define(["z","zeptoTouch"],function($,zT){
    var json={
        listUlNode:$(".sellCar_list"),
        listLiNodes:$(".sellCar_list>li"),
        subBtn:$(".sellCar_footer input"),
        num:0,
        formNode:$("form"),
        /*findParent:function(targetName){
            var parentNodeName=targetName;
            if(parentNodeName.tagName.toLowerCase()!="li"){
                parentNodeName=parentNodeName.parentNode;
                console.log(parentNodeName.tagName.toLowerCase())
                return this.findParent(parentNodeName)
            }else  if(parentNodeName.tagName.toLowerCase()=="li"){

                return "li";
            }else{
                return false;
            }
        },*/
        listNodesClick:function(){
            var that=this;
            that.listUlNode.on('tap','li',function(){
                if($(this).children().eq(0).hasClass('selected')){
                    $(this).children().eq(0).removeClass('selected');
                    $(this).children().eq(0).children().prop("checked",false);
                    that.num--;
                }else{
                    $(this).children().eq(0).addClass('selected');
                    $(this).children().eq(0).children().prop("checked",true);
                    that.num++;
                }
                that.subBtn.val("删除（"+that.num+"）");
            });
        },
        subBtnClick:function(){
            var that=this;
            this.subBtn.tap(function(){
               if(that.num==0) {
                   alert("请选择删除项！");
                   return false;
               }else{
                   $(".selected").parent().remove();
                   return false;
               }
            });
        },
        formSubFun:function(){
            var that=this;
            that.formNode.submit(function(){
                if(that.num==0){
                    return false;
                }
            })
        },
        init:function(){
            this.listNodesClick();
            this.subBtnClick();
            this.formSubFun();
        }
    };
    return function(){
        json.init();
    }
});

