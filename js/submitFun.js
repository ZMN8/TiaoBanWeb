/**
 * Created by Administrator on 2016/10/5.
 */
define(["z"],function($){
    var json={
        form:$("form"),
        txt:$("textarea"),
        fun:function(){
            var that=this;
            this.form.submit(function(){
                var val= $.trim(that.txt.val());
                val=val.replace(/>/g,"&gt");
                val=val.replace(/</g,"&lt");
               if(val==""){
                   alert("请输入内容！");
                   return false;
               }
            })
        },
        init:function(){
            this.fun();
        }
    };
    return function(){
        json.init();
    }
})