function CompanyCtrl($rootScope, DarkBackground) {

    $rootScope.bodyclass = DarkBackground.bodyClass.data;
}

CompanyCtrl.$inject = ["$rootScope", "DarkBackground"];

export default {
    name: 'CompanyCtrl',
    fn: CompanyCtrl
};