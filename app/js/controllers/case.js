function CaseCtrl($rootScope, DarkBackground) {

    $rootScope.bodyclass = DarkBackground.bodyClass.data;
}

CaseCtrl.$inject = ["$rootScope", "DarkBackground"];

export default {
    name: 'CaseCtrl',
    fn: CaseCtrl
};