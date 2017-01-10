# BusinessWebsite

小知识：
1. IE9 以下不支持background渐变，但是可以用filter来实现渐变；
2. css 3 圆角 IE9 以上才支持， 6 7 8 不支持，不支持给他看直角；
3. ps测量圆角：选择-平滑-设置像素看看是否贴合；
4. IE7及以下：float+margin-bottom组合，margin-bottom会失效；
5. IE6 中png图片透明背景会显示灰色，最好的修复方法是引用DD_belatedPNG插件；
6. 内阴影要在box-shadow参数前加inset；
7. IE6不兼容border透明；_border:代表设置IE6的border样式；
8. IE6 7不支持inline-block，zoom：1属性为IE专有，触发IE hasLayout属性、清楚浮动，清除margin重叠；
9. css命名空间就是指.header top这种迭代下去的类选择；
10. 模块化布局：先把共有的结构和样式写出来，再用命名空间把私有的样式写出来；
11. 有时候看到多余的样式，别以为没有用途，可以是解决兼容性问题；
12. 不容易实现的部分可以用切图方式来代替，注重效率；
13. IE9以下不支持css3，网上有插件可以让IE兼容css3；
14. js中获取或更改元素的样式操作的是内联css值；

模块化布局：（模块布局实质是先确定相同模块，写出其对应的共同html结构和css样式，再写差异部分) 
1. 分析网页结构，把网站划分为header、nav、search、content、footer五个模块，并先构建html结构；
2. content部分先划分main和side，再划分section、options和ad三类模块，构建html结构；
3. 构建css表，根据需求重设元素样式（reset），写公共样式（public），写布局样式（layout），不宜把模块的差异部分提取出来进公共样式（如不同的高度、宽度等，一般写浮动、清楚浮动、三角形等），这样不方便管理模块。在写css的过程不断试验并解决兼容性问题。（css：布局类样式写在一起，布局类里面的类样式往下各自写在一起，便于维护）；
4. 根据模块填充html结构和css样式。制作雪碧图的时候为方便维护，不同布局模块的小图标最好不要放在一起，按实际情况而定；
5. 先完成通用部分，再完成差异部分；
6. 写js文件时，要利用立即调用函数划分不同模块的js代码，从而使变量名不互相污染，形成独立的空间，而且方便后期维护；

Jquery常用API：each、attr、find、stop.animate、eq、children、parent、hide、show、removeClass、addClass、on、fadeOut、fadeIn、hover、$(this).index()等。
