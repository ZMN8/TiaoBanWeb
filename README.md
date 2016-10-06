# TiaoBanWeb-Iscroll
Iscroll+requireJs

.checked是DOM方法、:checked筛选出来的不是布尔量而是一个节点，不能用作判断条件、.attr("checked")返回的是“checked”字符串，非布尔量;prop("checked"）,返回的是布尔量


#实现多行文本溢出显示省略号：
    在webkit浏览器或移动端，可以使用webkit的CSS扩展属性
    -webkit-line-clamp，用来限制块元素中文本显示的行数    同时结合其他-webkit属性
    display:-webkit-box; 将对象作为弹性伸缩盒子模型显示
    -webkit-box-orient:vertical; 设置或检索伸缩盒对象子元素的排列方式(vertical：从上到下垂直排列子元素)



#单行文本溢出显示省略号
    text-overflow: ellipsis;
    white-space:nowrap;
    overflow: hidden;
    三者同时使用


#占位符属性placeholder的字体颜色修改
    ::-webkit-input-placeholder
    :-moz-placeholder    （Mozilla Firefox 4 to 18）
    ::-moz-placeholder    （ Mozilla Firefox 19+）
    :-ms-input-placeholder



#都是绝对定位，且#wrapper的高度不定，overflow: hidden;
#header {
	position: absolute;
	z-index: 2;
	top: 0;
	left: 0;
	width: 100%;
	height: 45px;
}
#footer {
	position: absolute;
	z-index: 2;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 48px;
}
#wrapper {
	position: absolute;
	z-index: 1;
	top: 45px;
	bottom: 48px;
	left: 0;
	width: 100%;
	overflow: hidden;   //iscroll 必须
}
