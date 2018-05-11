$(function() {

    var AppPlugins = {

        /* Owl carousel */
        owlCarousel: function () {
            $('.owl-carousel').owlCarousel({
                nav: true,
                navText: ["<!--<span>Next testimonial <img src='assets/images/next-arrow.png'></span>-->","<span>Next testimonial <img src='assets/images/next-arrow.png'></span>"],
                items: 1,
                loop: true,
                center: true,
                margin: 0,
                lazyLoad: true,
                dots: false,
            });
        }
    };

    /* ------ Plugins Init ------ */
    AppPlugins.owlCarousel();

});
