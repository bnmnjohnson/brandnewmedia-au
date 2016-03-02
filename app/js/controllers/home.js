function HomeCtrl($rootScope, DarkBackground, MetadataService) {

    $rootScope.bodyclass = DarkBackground.bodyClass.data;

    // pass an empty object to use the defaults.
    MetadataService.setMetadata({});
}

HomeCtrl.$inject = ["$rootScope", "DarkBackground", "MetadataService"];

export default {
    name: 'HomeCtrl',
    fn: HomeCtrl
};