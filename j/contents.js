//contentsContainerナビ マウスオーバー
$(function() {
    $('.localNav li')
    .each(function(i){
        $(this).css('background', 'url(i/nav'+'0'+(i+1)+'_on.gif) no-repeat');
    })
    .find('img').hover(
        function(){  
            $(this).stop().animate({'opacity' : '0'}, 200);  
        },
        function(){
            $(this).stop().animate({'opacity' : '1'}, 300);
        }
    ); 
});

//エントリーボタン マウスオーバー
$(function() {
    $('.entryBtn img').hover(
        function(){  
            $(this).stop().animate({'opacity' : '0.7'}, 200);  
        },
        function(){
            $(this).stop().animate({'opacity' : '1'}, 300);
        }
    ); 
});




//contentsContainer アンカースクロール 
$(function(){
    $('.localNav a[href^=#]').click(function(){
        var target;
        target = $( $(this).attr('href') );
        if (target.length == 0) {
            return;
        }
        $('html, body').animate({scrollTop: target.offset().top},
        {easing:'easeInCubic',duration:500
        });
        return false;
    });
});

//contentsContainer アンカースクロール クリックしたときに点線が出るのを防ぐ（IE用）

$(function(){
    $(".localNav li a").focus(function(){
        $(this).blur();
    });
})
