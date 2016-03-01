function OnConfig(contentfulProvider, $routeProvider, $locationProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'home.html',
        controller: 'HomeCtrl',
        title: 'Home'
    })

    .when('/company', {
        templateUrl: 'company.html',
        controller: 'CompanyCtrl',
        title: 'Company'
    })

    .when('/case-story', {
        templateUrl: 'case-story.html',
        controller: 'CaseCtrl',
        title: 'Case Story'
    })

    .when('/people', {
        templateUrl: 'people.html',
        controller: 'PeopleCtrl',
        title: 'People'
    })

    .when('/labs', {
        templateUrl: 'labs.html',
        controller: 'LabsCtrl',
        title: 'Labs'
    })

    .when('/contact', {
        templateUrl: 'contact.html',
        controller: 'ContactCtrl',
        title: 'Contact'
    })

    .otherwise({
        redirectTo: '/'
    });

    contentfulProvider.setOptions({
        space: 'cfexampleapi',
        accessToken: 'b4c0n73n7fu1'
    });

}

export default OnConfig;
