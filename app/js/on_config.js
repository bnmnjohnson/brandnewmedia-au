function OnConfig($routeProvider, $locationProvider, ngMdIconServiceProvider) {
    'ngInject';

    ngMdIconServiceProvider.addShapes({
        'close': '<polygon points="16,0.7 15.3,0 8,7.3 0.7,0 0,0.7 7.3,8 0,15.3 0.7,16 8,8.7 15.3,16 16,15.3 8.7,8 "/>',
        'next' : '<g><g id="g20" transform="translate(30.6068,16.0141)"><g id="path22"><rect x="-29.6" y="-8.3" width="13.3" height="0.9"/></g></g><g id="g24" transform="translate(12.4427,4.9714)"><g id="path26"><polygon points="2.6,3.2 -1.6,-0.8 -2.3,-0.1 1.2,3.2 -2.3,6.6 -1.6,7.2"/></g></g></g>'
    });

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

    .when('/tag/:tag', {
        templateUrl: 'blog.tpl.html',
        controller: 'BlogController as vm',
        title: 'Labs'
    })

    .when('/author/:author', {
        templateUrl: 'blog.tpl.html',
        controller: 'BlogController as vm',
        title: 'Labs'
    })

    .when('/search/:searchTerm', {
        templateUrl: 'blog.tpl.html',
        controller: 'BlogController as vm',
        title: 'Labs'
    })

    .when('/contact', {
        templateUrl: 'contact.tpl.html',
        controller: 'ContactCtrl as vm',
        title: 'Contact'
    })

    .when('/contact/:country', {
        templateUrl: 'contact.tpl.html',
        controller: 'ContactCtrl as vm',
        title: 'Contact'
    })

    .otherwise({
        redirectTo: '/'
    });

    // contentfulProvider.setOptions({
    //     accessToken: '37ea751bb3db1bc93d472306ef11cc1e648ef8d3992be8213b6691dc2a6aa067',
    //     space: 'c3gv6lh5al82'
    // });

}

export default OnConfig;