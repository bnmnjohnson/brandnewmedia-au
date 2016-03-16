function CompanyCtrl($rootScope, $scope, DarkBackground, MetadataService) {
    var vm = this;


    $scope.company = {
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum tortor augue."
    }

    MetadataService.setMetadata({
        title: 'Company',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum tortor augue.'
    });

    vm.showNewsletter = false;
    vm.menuShow = false;

    $rootScope.bodyclass = DarkBackground.bodyClass.data;
}

CompanyCtrl.$inject = ["$rootScope", "$scope", "DarkBackground", "MetadataService"];

export default {
    name: 'CompanyCtrl',
    fn: CompanyCtrl
};
