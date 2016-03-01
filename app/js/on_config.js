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

    .when('/labs/:labId', {
        templateUrl: 'lab-post.html',
        controller: 'PostCtrl',
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
        accessToken: '37ea751bb3db1bc93d472306ef11cc1e648ef8d3992be8213b6691dc2a6aa067',
        space: 'c3gv6lh5al82'
    });

}

export default OnConfig;
