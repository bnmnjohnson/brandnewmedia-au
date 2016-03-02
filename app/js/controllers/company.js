function CompanyCtrl($rootScope, DarkBackground, MetadataService) {
    var vm = this;

    MetadataService.setMetadata({
        title: 'About This Blog',
        description: 'Some des.'
    });

    $rootScope.bodyclass = DarkBackground.bodyClass.data;
}

CompanyCtrl.$inject = ["$rootScope", "DarkBackground", "MetadataService"];

export default {
    name: 'CompanyCtrl',
    fn: CompanyCtrl
};