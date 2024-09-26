; (function ($) {
    'use strict'
    jQuery('body').find('.sp-logo-carousel-pro-area.lcp-preloader').each(function () {
        var logo_carousel_id = $(this).attr('id'),
            parents_class = jQuery('#' + logo_carousel_id).parent('.sp-logo-carousel-pro-section'),
            parents_siblings_id = parents_class.find('.sp-logo-carousel-pro-preloader').attr('id');
        jQuery(window).load(function () {
            jQuery('#' + parents_siblings_id).animate({ opacity: 0 }, 600).remove();
        })
    })
})(jQuery)