function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, contentfulProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('Work', {
            url: '/',
            controller: 'ExampleCtrl as home',
            templateUrl: 'home.html',
            title: 'Home'
        })

    .state('Company', {
        url: '/company',
        controller: 'ExampleCtrl as home',
        templateUrl: 'company.html',
        title: 'Company'
    })

    .state('Labs', {
        url: '/labs',
        controller: 'ExampleCtrl as home',
        templateUrl: 'labs.html',
        title: 'Labs'
    })


    $urlRouterProvider.otherwise('/');
    
    contentfulProvider.setOptions({
        space: 'cfexampleapi',
        accessToken: 'b4c0n73n7fu1'
      });

}

export default OnConfig;
