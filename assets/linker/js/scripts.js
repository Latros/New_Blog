jQuery(document).ready(function($) {

    initTimeAgo();

    resizeHeader();
});

function resizeHeader() {

    $('header').height($(window).height() * 0.40);

    $(window).resize(function(){
        $('header').height($(window).height() * 0.40);
    });
}

function initTimeAgo() {
    $('abbr.timeago').timeago();
}