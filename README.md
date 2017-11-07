# BookMarkLet-jQuery
BOOKMARKLET

javascript: (function(url) {
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.2.1.min.js';
    document.body.appendChild(script);
    script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
})('https://raw.githubusercontent.com/dark-kuro/BookMarkLet-jQuery/master/index.js');
