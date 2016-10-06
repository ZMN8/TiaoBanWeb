requirejs.config({//配置  加载模块
    baseUrl:"js/",//基础路径  从js/这个根目录出发寻找js文件
    paths:{      //起别名
        "z":"lib/zepto.min",
        "zeptoTouch":"lib/zepto-touch",
        "iscrollProbe":"lib/iscroll-probe",//iscroll不支持 AMD(异步模块定义)
        "swiper":"lib/swiper-3.3.1.jquery.min",
        "swiperAnimate":"lib/swiper.animate1.0.2.min",
        "zeptoAnimate":"lib/fx",
        "scrollAppendMore":"scrollAppendMore.js?v=1.2."+new Date,//实现onSale页面的js脚本模块
        "judgeUrl":"judgeUrl.js?v=1.3"+new Date,//实现onSale页面的js脚本模块
        "indexSlide":"indexSlide.js?v=1.7"+new Date,//实现首页幻灯片的js脚本
        "filterAnimate":"filterAnimate.js?v=0.0."+new Date, //实现 卖车 页面筛选js脚本
        "carManage":"sellCarManage.js?v=0.0."+new Date, //实现 卖车管理 页面筛选js脚本
        "sellCarPublish":"sellCarPublish.js?v=0.0."+new Date, //实现 卖车管理 页面筛选js脚本
        "buyCarPublish":"buyCarPublish.js?v=0.0."+new Date, //实现 卖车管理 页面筛选js脚本
        "submitFun":"submitFun.js?v="+new Date
    },
    shim:{//如果js不支持 requirejs AMD(异步模块定义)
        "iscrollProbe":{
            exports:'iscrollProbe'
        },
        "swiper":{
            exports:'swiper'
        },
        "zeptoTouch":{
            exports:"zeptoTouch",
            deps:['z']//依赖
        }
    }
});
requirejs(["judgeUrl"],function(judgeUrl){
    console.log(judgeUrl());
    if(judgeUrl()=="index"){
        requirejs(["indexSlide"],function(indexSlide) {//加载模块
            indexSlide();
        })
    }
    if(judgeUrl()=="onSale"){
        requirejs(["scrollAppendMore"],function(scrollAppendMore){//加载模块
            scrollAppendMore({
                type:"get",
                url:"json/json.json?v=1.2.3",
                success:function(arr,$,webScrollObj){//必须将arr,$,webScrollObj传进来作为参数！！！
                    var ul=$('<ul/>');//创建ul
                    for(var i in arr){
                        var li=$("<li/>");//创建li
                        var htmlVal="<a href='"+arr[i].alink+"'><img src='images/"+arr[i].imgSrc+"' alt='奔驰ML400'/><dl class='onsale_list_txt'><dt>"+arr[i].dtTxt+"</dt><dd><span class='dd_price'>"+arr[i].price+"<i>万元</i></span><span class='dd_browse'>浏览 <i>"+arr[i].browse+"</i></span></dd></dl></a>";
                        li.html(htmlVal);
                        ul.append(li);
                    }
                    $('.onsale_list').append(ul.html());
                    ul=null;
                    webScrollObj.appendNode.text('更多加载');
                },
                error:function(a,b,c){
                    alert("请求有误，请稍候重试！")
                }
            });
        });
        requirejs(["filterAnimate"],function(filterAnimate) {//加载模块
            filterAnimate();
        });
    }
    if(judgeUrl()=="mySellCar"){
        requirejs(["scrollAppendMore","carManage"],function(scrollAppendMore,carManage){//加载模块
            carManage();
            scrollAppendMore({
                type:"get",
                url:"json/sellManage.json?v=1.0.3",
                success:function(arr,$,webScrollObj){//必须将arr,$,webScrollObj传进来作为参数！！！
                    var ul=$('<ul/>');//创建ul
                    for(var i in arr){
                        var li=$("<li/>");//创建li
                        li.addClass("clearfix");

                        var htmlVal="<span class='select'>选择图标<input type='checkbox' class='check'/></span><img src='"+arr[i].imgSrc+"' alt='展示图'/><dl class='sellCar_content'><dt><strong>"+arr[i].carname+"</strong></dt><dd class='clearfix'><span class='dd_price'>"+arr[i].price+"<i>万元</i></span><span class='dd_browse'>浏览 <i>"+arr[i].browse+"</i></span></dd></dl>";
                        li.html(htmlVal);
                        ul.append(li);
                    }
                    $('.sellCar_list').append(ul.html());
                    ul=null;
                    webScrollObj.appendNode.text('更多加载');
                },
                error:function(a,b,c){
                    alert("请求有误，请稍候重试！")
                }
            });
        });
    }
    if(judgeUrl()=="sellCarPublish"){
        requirejs(["sellCarPublish"],function(sellCarPublish){
            sellCarPublish();
        })
    }
    if(judgeUrl()=="buyCar"){
        requirejs(["scrollAppendMore"],function(scrollAppendMore){
            scrollAppendMore({
                type:"get",
                url:"json/buyCar.json?a="+new Date,
                success:function(arr,$,webScrollObj){
                    var ulNode=$("<ul/>");
                   for(var i in arr){
                       var liNode=$("<li/>");
                       var htmlVal=" <a href='details.html'><img src='"+arr[i].imgSrc+"' alt='奔驰ML350'/>'<dl class='buyCar-list-txt'>'<dt>"+arr[i].carname+"</dt><dd class='buy-deploy'>"+arr[i].deploy+"</dd><dd><span class=\"dd-place\">"+arr[i].place+"</span><span class=\"dd-money\">"+arr[i].money+"</span></dd></dl></a>"
                       liNode.html(htmlVal);
                       ulNode.append(liNode);
                   }
                    $(".onsale_list").append(ulNode.html());
                    ulNode=null;
                    webScrollObj.appendNode.text('更多加载');

                },
                error:function(a,b,c){
                    console.log(a,b,c);
                    alert("请求有误，请稍候重试！")
                }
            });
        })
    }
    if(judgeUrl()=='buyCarManage'){
        requirejs(["scrollAppendMore","carManage"],function(scrollAppendMore,carManage){
            carManage();
            scrollAppendMore({
                type:"get",
                url:"json/buyManage.json?v="+new Date,
                success:function(arr,$,webScrollObj){
                    var ulNode=$("<ul/>");
                    for(var i in arr){
                        var liNode=$('<li/>');
                        liNode.addClass("clearfix");
                        var htmlVal="<span class=\"select\">选择图标<input type=\"checkbox\" class=\"check\"/></span><img src=\""+arr[i].imgSrc+"\" alt=\"展示图\"/><dl class=\"sellCar_content\"><dt><strong>"+arr[i].carname+"</strong></dt><dd class=\"clearfix\"><span class=\"dd_price\">"+arr[i].place+"</span><span class=\"dd_browse\">"+arr[i].money+"</span></dd></dl>"
                        liNode.html(htmlVal);
                        ulNode.append(liNode);
                    }
                    $(".sellCar_list").append(ulNode.html());
                    ulNode=null;
                    webScrollObj.appendNode.text('更多加载');
                },
                error:function(a,b,c){
                    console.log(a,b,c);
                    alert("请求有误，请稍候重试！")
                }
            })
        })
    }
    if(judgeUrl()=="buyCarPublish"){
        requirejs(["buyCarPublish"],function(buyCarPublish){
            buyCarPublish();
        })
    }
    if(judgeUrl()=="commissionBusiness"){
        requirejs(["scrollAppendMore"],function(scrollAppendMore){
            scrollAppendMore({
                type:"get",
                url:"json/commissionBusiness.json?v="+new Date,
                success:function(arr,$,webScrollObj){
                    var ulNode=$("<ul/>");
                    for(var i in arr){
                        var liNode=$('<li/>');
                        liNode.addClass("clearfix");
                        var htmlVal="<a href=\"buyDetails.html\"><img src=\""+arr[i].imgSrc+"\" alt=\"展示图\"/><dl class=\"buyCar-list-txt \"><dt>"+arr[i].carname+"</dt><dd class=\"buy-deploy\">"+arr[i].deploy+"</dd><dd><span class=\"dd-money\">"+arr[i].time+"</span></dd></dl></a>";
                        liNode.html(htmlVal);
                        ulNode.append(liNode);
                    }
                    $(".commission-list").append(ulNode.html());
                    ulNode=null;
                    webScrollObj.appendNode.text('更多加载');
                },
                error:function(a,b,c){
                    console.log(a,b,c);
                    alert("请求有误，请稍候重试！")
                }
            });
        })
    }
    if(judgeUrl()=="commissionBusinessPublish"){
        requirejs(["submitFun"],function(submitFun){
            submitFun();
        })
    }
});

/*
 requirejs第一个参数指定要加载的模块名，第二个是相对应的注入参数。


 define([], function(){})中第一个参数是依赖的名称数组，第二个参数是函数，在模块的所有依赖加载完毕后，该函数会被调用来定义该模块。依赖关系会以参数的形式注入到该函数上，参数列表与依赖名称列表一一对应


模块化加载js文件的话，每个js中的变量都互不影响，包括jQuery中的$全局变量，故要在函数中引入$变量
 现在问题来了，虽然jquery框架已经开始支持AMD规范，但是jquery的众多插件还是不支持AMD，仍然像以前一样需要使用全局变量$。
 如果我们项目中使用了jquery插件，但是jquery框架是通过requireJS加载的（不会添加全局变量$），那怎么完成jquery插件的加载呢？使用传统的方，在HTML页面中通过<script>加载jquery插件，肯定是不行的。这个时候我们需要使用到
 requireJS的shim参数，来完成jquery插件的加载。
 shim中的JSON对象有两个属性: deps, exports ;
 deps 为数组,表示其依赖的库, exports 表示输出的对象名；
* */