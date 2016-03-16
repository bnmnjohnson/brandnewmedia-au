function NewsletterDirective() {

    return {
        restrict: 'EA',
        templateUrl: 'directives/newsletter.html',
        link: function(scope, element, attrs, ctrl, $route, $routeParams, $location) {
            var $window = $(window);

            function checkWidth($location) {
                var windowsize = $window.width();
                if (windowsize > 720) {
                  alert($location.url)
                    // alert("newsletetr");
                    scope.showNewsletter = true;
                } else {
                  scope.showNewsletter = false;
                }
            }
            // Execute on load
            checkWidth();
            // Bind event listener
            $(window).resize(checkWidth);
        }
    };
}


NewsletterDirective.$inject = ["scope", "$route", "$routeParams", "$location"];

export default {
    name: 'newsletterDirective',
    fn: NewsletterDirective
};
