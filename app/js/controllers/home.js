function HomeCtrl($rootScope, DarkBackground) {

    $rootScope.bodyclass = DarkBackground.bodyClass.data;
}

HomeCtrl.$inject = ["$rootScope", "DarkBackground"];

export default {
    name: 'HomeCtrl',
    fn: HomeCtrl
};