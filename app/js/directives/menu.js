function MenuDirective($rootScope, $route) {
    return {
        restrict: 'A',
        link: function() {

            var navToggle = function() {
                $('.navigation').toggleClass('off-canvas--hide off-canvas--show');
                var el = $('.hamburger');
                if (el.hasClass('active')) {
                    el.addClass('active-end');
                    el.one('transitionend', function() {
                        el.removeClass('active active-end')
                    });
                } else {
                    el.addClass('active');

                }
            }

            $rootScope.$on('$routeChangeSuccess', (event, currentRoute, toState) => {
                var isNavOpen = $('.navigation').hasClass('off-canvas--show');

                if (isNavOpen) {
                    navToggle();
                }
                var currentLocation = (currentRoute.$$route.originalPath);
                $rootScope.isActive = currentLocation;
                console.log(currentLocation);

            });

            $('.hamburger, .navigation li a').on('click', function(e) {
                navToggle();
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
                    $('.header-main').addClass('off--canvas').removeClass('transparent');
                } else {
                    $('.header-main').removeClass('off--canvas').addClass('transparent');
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

MenuDirective.$inject = ["$rootScope", "$route"]

export default {
    name: 'menuDirective',
    fn: MenuDirective
};
