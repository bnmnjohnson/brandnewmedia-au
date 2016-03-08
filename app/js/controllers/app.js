function AppCtrl($rootScope, $scope, $window, $location, $timeout, MetadataService, DarkBackground) {

    var vm = this;

    $rootScope.bodyclass = DarkBackground.bodyClass.data;
    vm.menuShow = false;
    vm.showNewsletter = false;


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

AppCtrl.$inject = ["$rootScope", "$scope", "$window", "$location", "$timeout", "MetadataService", "DarkBackground"];

export default {
    name: 'AppCtrl',
    fn: AppCtrl
};