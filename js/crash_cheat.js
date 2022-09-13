// 换掉 document.title 的内容即可

var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/joke.ico");
        document.title = '( ๑ŏ ﹏ ŏ๑ ) 不要走~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = ' ( ๑•̀ㅂ•́) ✧ 欢迎回家~';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});