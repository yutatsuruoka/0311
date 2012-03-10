//キービジュアルスライド
function slideSwitch() {
    var $active = $('.keyVisualContainer img.active');

    if ( $active.length == 0 ) $active = $('.keyVisualContainer img:last');

    // use this to pull the images in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
        : $('.keyVisualContainer img:first');

    // uncomment the 3 lines below to pull the images in random order
    
    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );


    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 7000 );
});



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
