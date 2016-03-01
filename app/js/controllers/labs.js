function LabsCtrl($rootScope, WhiteBackground, LabsService, contentful) {


    $rootScope.bodyclass = WhiteBackground.bodyClass.data;



}

LabsCtrl.$inject = ["$rootScope", "WhiteBackground", "contentful", "LabsService"];

export default {
    name: 'LabsCtrl',
    fn: LabsCtrl
};
