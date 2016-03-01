function ContactCtrl($rootScope, WhiteBackground) {

    $rootScope.bodyclass = WhiteBackground.bodyClass.data;
}

ContactCtrl.$inject = ["$rootScope", "WhiteBackground"];

export default {
    name: 'ContactCtrl',
    fn: ContactCtrl
};