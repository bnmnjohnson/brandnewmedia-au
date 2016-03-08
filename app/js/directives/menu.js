function MenuDirective() {
    return {
        restrict: 'A',
        link: function() {

            $('.hamburger, .navigation li a').on('click', function(e) {
                $('.navigation').toggleClass('off-canvas--hide off-canvas--show');
                $('.navigation').attr('aria-hidden', 'false');
                var el = $('.hamburger');
                if (el.hasClass('active')) {
                    el.addClass('active-end');
                    el.one('transitionend', function() {
                        el.removeClass('active active-end')
                        $('body').removeClass('noScroll');
                    });
                } else {
                    el.addClass('active');
                    $('body').addClass('noScroll');
                }
            });

            // scroll is still position
            var scroll = $(document).scrollTop();
            var headerHeight = $('.header-main').outerHeight();
            // console.log(headerHeight);

            $(window).scroll(function() {
                // scrolled is new position just obtained
                var scrolled = $(document).scrollTop();

                // optionally emulate non-fixed positioning behaviour

                if (scrolled > 0) {
                    $('.header-main').addClass('off-canvas');
                } else {
                    $('.header-main').removeClass('off-canvas');
                }

                if (scrolled > scroll) {
                    // scrolling down
                    $('.header-main').removeClass('fixed');
                } else {
                    //scrolling up
                    $('.header-main').addClass('fixed');
                }

                scroll = $(document).scrollTop();
            });

        }
    }
}

export default {
    name: 'menuDirective',
    fn: MenuDirective
};
