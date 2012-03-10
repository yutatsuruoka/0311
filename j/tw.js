var current = 0;
var fade = function(){
  var tw = $($('#tw0311 li')[current]);
  $(tw[0]).fadeIn(5000);
  if(!$('#tw0311 li')[current+1]) return ;
  $(tw[0]).fadeOut(5000);
  current++;
  setTimeout(fade,7000);
}

$(function(){
  var tw = function(data) {
    var html = $('<ul class="twContainer"></ul>');

    $.each(data.results, function(i, obj) {
      if( /^RT/.test(obj.text) === true){return true;}

      var li = $(['<li class=" clearfix">'
        ,           makeLink(obj.text)
        , '        <p class="twTime"></p>'
        , '    </div>'
        , '    </li>'].join(''));
        li.css({'display':'none','position':'absolute','width':'590'});
        html.append(li);
    });
    $('#tw0311').append(html);
   fade(); 

  }
  

  , makeLink = function(text) {
    return  text.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/i, "<a href='$1' target='_blank'>$1</a>")
    .replace(/(^|\s)#(\w+)/g, "$1<a href='http://search.twitter.com/search?q=%23$2' target='_blank'>#$2</a>")
    .replace(/(^|\s)@(\w+)/g, "$1<a href='http://www.twitter.com/$2' target='_blank'>@$2</a>");
  };
  $.ajax({
    type : 'GET'
    ,url : 'http://search.twitter.com/search.json'
    ,data : {
      q : '%230311jp' // hash
      , rpp : '100' // ツイート数 MAX 100
      , page : '1'  // ページ
      /*
      *, until: '2011-03-11'
      *, since: '2011-03-12'
      */
    }
    ,dataType: 'jsonp'
    ,success : tw 
  });
});

function tweetSubmit(elm){
  //$('.formText')[0].value += ' #0311jp';
  //var ima = $('.formText')[1].value;
  //$('.formText')[1].value = '【今だから言えるメッセージ】' + ima + ' #0311jp';;
  var ima = $('.formText')[0].value;
  $('.formText')[0].value = '【今だから言えるメッセージ】'+ima+' #0311jp';
  var anohi = $('.formText')[1].value;
  $('.formText')[1].value = '【あの日の記憶】'  + anohi + ' #0311jp';
}


$(function(){
  var cnt = 0;
  var len = instaData.length;
  for(i=0; i<len; i++) {
    if(i%9 == 0 && i != 0){ cnt++;}
    $('#fade'+cnt).append($('<img src="'+instaData[i]+'" width="180" height="180" />'));
  }
  $.fn.cycle.defaults.speed   = 900;
  $.fn.cycle.defaults.timeout = 6000;
  $(function() {
    // run the code in the markup!
    $('#demos pre code').each(function() {
      eval($(this).text());
    });
  });
});


function Start(){
  photo = new Array();
  photo[0] = "./i/photostream18.jpg";
  photo[1] = "./i/photostream19.jpg";
  photo[2] = "./i/photostream20.jpg";
  photo[3] = "./i/photostream21.jpg";
  photo[4] = "./i/photostream22.jpg";
  photo[5] = "./i/photostream23.jpg";

  photo[6] = "./i/photostream24.jpg";
  photo[7] = "./i/photostream25.jpg";
  photo[8] = "./i/photostream26.jpg";
  photo[9] = "./i/photostream27.jpg";
  photo[10] = "./i/photostream28.jpg";
  photo[11] = "./i/photostream29.jpg";

  photo[12] = "./i/photostream30.jpg";
  photo[13] = "./i/photostream31.jpg";
  photo[14] = "./i/photostream32.jpg";
  photo[15] = "./i/photostream33.jpg";
  photo[16] = "./i/photostream34.jpg";
  photo[17] = "./i/photostream35.jpg";

  photo[18] = "./i/photostream36.jpg";

randPhoto = random(photo, 10);

  document.area1.src = randPhoto[0];
  document.area2.src = randPhoto[1];
  document.area3.src = randPhoto[2];
  document.area4.src = randPhoto[3];
  document.area5.src = randPhoto[4];
  document.area6.src = randPhoto[5];
  document.area7.src = randPhoto[6];
  document.area8.src = randPhoto[7];
  document.area9.src = randPhoto[8];
  document.area10.src = randPhoto[9];  
}
function random(array, num) {
  var a = array;
  var t = {};
  var r = [];
  var l = a.length;
  var n = num < l ? num : l;
  while (n-- > 0) {
    var i = Math.random() * l | 0;
    r[n] = t[i] || a[i];
    --l;
    t[i] = t[l] || a[l];
  }
  return r;
}


