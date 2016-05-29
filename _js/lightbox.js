var lightbox_close_btn, lightbox_random, lightbox_setContent, lightbox_open, lightbox_close;
$(document).ready(function() {
    lightbox_close_btn = '<a href="javascript:void(0);" onclick="lightbox_close();" class="lb_close">Close</a>';
    lightbox_random = function() {
        var article = 'bouillabaisse';
        var articles = $(".article");
        if (articles.length) {
            var randomIndex = Math.floor(Math.random() * articles.length);
            article = $(articles[randomIndex]).find('a:first').attr('name');
        }
        //console.log('lightbox: '+article);
        lightbox_setContent(article);
        lightbox_open();
        //console.log('done - article: '+article);
    };
    lightbox_setContent = function(anchor) {
        console.log('setContent - article: '+anchor);
        var lightbox_content = $('#lb_content');
        lightbox_content.empty();
        var article = $("a[name='"+anchor+"']").parent().parent();
        if (typeof article == "undefined") {
            lightbox_random();
            // console.log("error 404:"+anchor);
            return;
        }
        lightbox_content.html(lightbox_close_btn);
        lightbox_content.append(article.html());
        lightbox_content.find('.back-to-top').remove();
    };
    lightbox_open = function() {
        $('#lb_content').show();
        $('#lb_overlay').show();
    };
    lightbox_close = function() {
        $('#lb_content').hide();
        $('#lb_content').hide();
    };
    $('.top-menu li a').click(function(e) {
        e.preventDefault();
        var anchor = $(this).attr('href');
        lightbox_setContent(anchor.replace('#', ''));
        lightbox_open();
    });
});
$(document).keyup(function(e) {
    if (e.keyCode === 27) // esc
        lightbox_close();
});