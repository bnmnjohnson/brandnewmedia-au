function OnConfig(contentfulProvider, $routeProvider, $locationProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'home.html',
        controller: 'HomeCtrl as home',
        title: 'Home'
    })

    .when('/company', {
        templateUrl: 'company.html',
        controller: 'CompanyCtrl as company',
        title: 'Company'
    })

    .when('/case-story', {
        templateUrl: 'case-story.html',
        controller: 'CaseCtrl as case',
        title: 'Case Story'
    })

    .when('/people', {
        templateUrl: 'people.html',
        controller: 'PeopleCtrl as people',
        title: 'People'
    })

    .when('/labs', {
        templateUrl: 'labs.html',
        controller: 'LabsCtrl as labs',
        title: 'Labs'
    })

    .when('/labs/:labId', {
        templateUrl: 'lab-post.html',
        controller: 'PostCtrl as post',
        title: 'Labs'
    })

    .when('/contact', {
        templateUrl: 'contact.html',
        controller: 'ContactCtrl as contact',
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
