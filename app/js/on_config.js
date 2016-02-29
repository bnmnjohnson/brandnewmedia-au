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

        .state('Case Story', {
        url: '/case-story',
        controller: 'ExampleCtrl as home',
        templateUrl: 'case-story.html',
        title: 'Case Story'
    })

    .state('Company', {
        url: '/company',
        controller: 'ExampleCtrl as home',
        templateUrl: 'company.html',
        title: 'Company'
    })

    .state('People', {
        url: '/people',
        controller: 'ExampleCtrl as home',
        templateUrl: 'people.html',
        title: 'People'
    })

    .state('Labs', {
        url: '/labs',
        controller: 'ExampleCtrl as home',
        templateUrl: 'labs.html',
        title: 'Labs'
    })

    .state('Contact', {
        url: '/contact',
        controller: 'ExampleCtrl as home',
        templateUrl: 'contact.html',
        title: 'Contact'
    })


    $urlRouterProvider.otherwise('/');
    
    contentfulProvider.setOptions({
        space: 'cfexampleapi',
        accessToken: 'b4c0n73n7fu1'
      });

}

export default OnConfig;
