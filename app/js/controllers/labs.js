function LabsCtrl($rootScope, WhiteBackground) {

    $rootScope.bodyclass = WhiteBackground.bodyClass.data;
}

LabsCtrl.$inject = ["$rootScope", "WhiteBackground"];

export default {
    name: 'LabsCtrl',
    fn: LabsCtrl
};
