// 头部导航
$(function(){
    $(".navigation").hover(function(){
        $(".nav-list").show();
        $(this).addClass("hover");
    },function(){
        $(".nav-list").hide();
        $(this).removeClass("hover");
    })
})


// 截图查看大图
$(function(){
    $(".slideBox").slide({
        mainCell: "ul",
        autoPlay: false,
        effect: "left",
        vis: 4,
        scroll: 1,
        autoPage: true,
        pnLoop: false
    })
})
$(function(){
    $('.boxer').fancybox({
       closeClick : true,
       prevEffect : 'none',
       nextEffect : 'none',
       afterLoad : function() {
           this.title = (this.index + 1) + ' /' + this.group.length + (this.title ? ' - ' + this.title : '');
       }
   });

});

// 返回顶部
$(function(){
    $(".go-top").on("click",function(){
        $("html,body").animate({scrollTop:0},"slow");
    })
})