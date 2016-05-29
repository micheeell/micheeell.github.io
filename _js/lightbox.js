var lightbox_close_btn = '<a href="javascript:void(0);" onclick="lightbox_close();" class="lb_close">Close</a>';
var lightbox_random = function() {
    var article;
    var articles = document.getElementsByClassName("article");
    if (articles.length) {
        var randomIndex = Math.floor(Math.random() * articles.length);
        article = articles[randomIndex];
        var lightbox_content = document.getElementById('lb_content');
        lightbox_content.innerHTML = lightbox_close_btn;
        lightbox_content.innerHTML += article.innerHTML;
        lightbox_open();
    }
};
var lightbox_open = function() {
    document.getElementById('lb_content').style.display = "inline-block";
    document.getElementById('lb_overlay').style.display = "inline-block";
};
var lightbox_close = function() {
    document.getElementById('lb_content').style.display = "none";
    document.getElementById('lb_overlay').style.display = "none";
};
