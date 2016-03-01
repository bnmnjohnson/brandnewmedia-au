function ExampleCtrl($scope, $rootScope, $location, $window) {

    // ViewModel
    const vm = this;

    vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
    vm.number = 1234;
    // $rootScope.bodyclass = BodyClass.bodyClass.data;

}

ExampleCtrl.$inject = ["$scope", "$rootScope", "$location", "$window"];

export default {
    name: 'ExampleCtrl',
    fn: ExampleCtrl
};
