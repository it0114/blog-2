
//信息流
layui.use('flow', function () {
    var flow = layui.flow;

    flow.load({
        elem: '#LAY_demo1' //流加载容器
        , scrollElem: '' //滚动条所在元素，一般不用填，此处只是演示需要。
        , done: function (page, next) { //执行下一页的回调

            //模拟数据插入
            setTimeout(function () {
                var lis = [];
                for (var i = 0; i < 8; i++) {
                    lis.push("<li class='item'><a href='#'><h2>" +"<i class='glyphicon glyphicon-bookmark'></i>"+"如何快速建站" + "</h2><p class='text'>" + "不管你是学前端的还是后端的，作为一个程序员，做一个自己的博客，那是必然的。咱们的圈子就这么大，想让更多的人了解你，看看你的技术多牛逼，扔一个博客地址就行了。" + "</p></a><div class='info ifonfont'><span title='更新于'><i class='iconfont'>" + "&#xe65e;" + "</i>" + "2020年02月20日" + "</span><span title='评论数'><i class='iconfont'>" + "&#xe60f;" + "</i>" + "50" + "</span><span title='阅读量'><i class='iconfont'>" + "&#xe671;" + "</i>" + "3500+" + "</span></div></li>");
                }
                //执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页
                //pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
                next(lis.join(''), page < 10); //假设总页数为 10
            }, 500);
        }
    });

});

//返回顶部
var backButton=$('#totop');
function backToTop() {
    $('html,body').animate({
        scrollTop: 0
    }, 800);
}
backButton.on('click', backToTop);
$(window).on('scroll', function () {/*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */
    if ($(window).scrollTop() > $(window).height())
        backButton.fadeIn();
    else
        backButton.fadeOut();
});
$(window).trigger('scroll');/*触发滚动事件，避免刷新的时候显示回到顶部按钮*/
