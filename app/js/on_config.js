function OnConfig(contentfulProvider, $routeProvider, $locationProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'home.tpl.html',
        controller: 'HomeCtrl as vm',
        title: 'Home'
    })

    .when('/company', {
        templateUrl: 'company.tpl.html',
        controller: 'CompanyCtrl as vm',
        title: 'Company'
    })

    .when('/case-story', {
        templateUrl: 'case-story.tpl.html',
        controller: 'CaseCtrl as vm',
        title: 'Case Story'
    })

    .when('/people', {
        templateUrl: 'people.tpl.html',
        controller: 'PeopleCtrl as vm',
        title: 'People'
    })

    .when('/labs', {
        templateUrl: 'blog.tpl.html',
        controller: 'BlogController as vm',
        title: 'Labs'
    })

    .when('/labs/:id/:title', {
        templateUrl: 'post.tpl.html',
        controller: 'PostController as vm',
        title: 'Labs'
    })

    .when('/contact', {
        templateUrl: 'contact.tpl.html',
        controller: 'ContactCtrl as vm',
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
