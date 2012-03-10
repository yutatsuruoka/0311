/*
クリックしたときに点線が出るのを防ぐ（IE用）
*/
$(function(){
    $("ul.tabNavi li a").focus(function(){
        $(this).blur();
    });
})

/*
タブの切り替え
*/
$(function(){
    //初期設定
    $("a.selected img").attr("src",$("a.selected img").attr("src").replace(/^(.+)(\.[a-z]+)$/,"$1_on$2"));
    $(".container_tab div:not("+$("ul.tabNavi li a.selected").attr("href")+")").hide();

    //クリックされた時の処理
    $("ul.tabNavi li a").click(function(){
        var name1=$("ul.tabNavi li a.selected").attr("href");
        $("a.selected img").attr("src",$("a.selected img").attr("src").replace(/^(.+)_on(\.[a-z]+)$/,"$1$2"));
        $("ul.tabNavi li a").removeClass("selected");
        $(this).addClass("selected");
        $("img",this).attr("src",$("img",this).attr("src").replace(/^(.+)_hover(\.[a-z]+)$/,"$1$2"));
        $("img",this).attr("src",$("img",this).attr("src").replace(/^(.+)(\.[a-z]+)$/,"$1_on$2"));
        $(name1).hide();
        var name2=$("ul.tabNavi li a.selected").attr("href");
        $(name2).show();
        return false;
    });
});


/*
マウスオーバーの処理
*/
            $(function() {
                $('.tabNavi li')
                .each(function(i){
                    $(this).css('background', 'url(i/tabnav'+'0'+(i+1)+'_on.png) no-repeat');
                })
                .find('img').hover(
                    function(){  
                        $(this).stop().animate({'opacity' : '0'}, 200);  
                    },
                    function(){
                        $(this).stop().animate({'opacity' : '1'}, 300);
                    }
                ); 
            }
            );




/*
マウスオーバーの処理

$(function(){
    $("ul.tabNavi a").mouseover(function(){
        var className = $(this).attr('class');
        if(className!='selected'){
            $("img",this).attr("src",$("img",this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_hover$2"));
        }
    }).mouseout(function(){
        var className2 = $(this).attr('class');
        if(className2!='selected'){
            $("img",this).attr("src",$("img",this).attr("src").replace(/^(.+)_hover(\.[a-z]+)$/,"$1$2"));
        }
    });
});
*/
