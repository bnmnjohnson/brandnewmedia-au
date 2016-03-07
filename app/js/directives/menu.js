function MenuDirective() {
    return {
        restrict: 'A',
        link: function() {


            var activateHamburger = function(event) {
                var el = $(this);
                if (el.hasClass('active')) {
                    el.addClass('active-end');
                    el.one('transitionend', function() {
                        el.removeClass('active active-end')
                    });
                } else {
                    el.addClass('active');
                }
            };
            $('.hamburger').click(activateHamburger);

        }
    }
}

export default {
    name: 'menuDirective',
    fn: MenuDirective
};
