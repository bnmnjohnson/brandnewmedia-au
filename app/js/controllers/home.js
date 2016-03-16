function HomeCtrl($rootScope, $scope, DarkBackground, MetadataService) {

    var vm = this;

    $rootScope.bodyclass = DarkBackground.bodyClass.data;
    $scope.showNewsletter= true;

    // pass an empty object to use the defaults.
    MetadataService.setMetadata({});


}

HomeCtrl.$inject = ["$rootScope", "$scope", "DarkBackground", "MetadataService"];

export default {
    name: 'HomeCtrl',
    fn: HomeCtrl
};
