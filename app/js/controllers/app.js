function AppCtrl($rootScope, $sce, $scope, $http, $httpParamSerializer, $routeParams, $window, $location, $timeout, MetadataService, DarkBackground, NewsletterService) {

    var vm = this;


    // $scope.formData = {};


    $rootScope.bodyclass = DarkBackground.bodyClass.data;
    // $scope.home = {
    //     "title": "We're Brand New Media. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum tortor augue.",
    //     "link": "Watch our story",
    //     "url": "/company"
    // }

    //vm.showNewsletter = false;




    $rootScope.$watchCollection(function() {
        return MetadataService.getMetadata();
    }, function(meta) {
        if (typeof meta.title !== 'undefined') {
            $rootScope.meta = meta;
            $timeout(function() {
                // push event to google analytics. This is done in a $timeout
                // so the current $digest loop has a chance to actually update the
                // HTML with the correct page title etc. Check for localhost to prevent
                // dev sessions from being recorded in analytics.
                // if ($location.host() !== 'localhost') {
                //     $window.ga('send', 'pageview', { page: $location.path() });
                // }
            });
        }
    });
}

AppCtrl.$inject = ["$rootScope", "$scope", "$sce", "$http", "$httpParamSerializer", "$routeParams", "$window", "$location", "$timeout", "MetadataService", "DarkBackground", "NewsletterService"];

export default {
    name: 'AppCtrl',
    fn: AppCtrl
};
