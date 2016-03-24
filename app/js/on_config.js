function OnConfig($routeProvider, $locationProvider, ngMdIconServiceProvider) {
    'ngInject';

    ngMdIconServiceProvider.addShapes({
        '25-next': '<polygon points="27,4 23,0 23,3 0,3 0,5 23,5 23,8 "/>',
        'play': '<circle fill="#FFFFFF" cx="28.5" cy="28.5" r="27.5"/><g><polygon fill="#FF5200" points="24.5,37.5 36.5,28.5 24.5,19.5   "/></g>',
        'pause': '<g><rect width="2" height="9"/><rect x="5.1" width="2" height="9"/></g>',
        'next': '<g><g><rect y="5.7" width="20" height="2"/></g><g><polygon points="14.7,13.4 13.3,12 18.6,6.7 13.4,1.4 14.8,0 21.4,6.7        "/></g></g>',
        'close': '<polygon points="10.1,8.7 17.3,1.4 15.9,0 8.7,7.2 1.5,0 0.1,1.4 7.3,8.7 0,16 1.4,17.4 8.7,10.1 16,17.4 17.4,16 "/>',
        'chevron': '<polygon points="1.4,17.4 0,16 7.3,8.7 0.1,1.4 1.5,0 10.1,8.7   "/>',
        '55-next': '<polygon points="52,0 52,3 0,3 0,5 52,5 52,8 56,4 "/>'
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

    .when('/luna-park', {
        templateUrl: 'case-story.tpl.html',
        controller: 'LunaCtrl as vm',
        title: 'Luna Park'
    })

    .when('/bayer', {
        templateUrl: 'case-story.tpl.html',
        controller: 'CaseCtrl as vm',
        title: 'Case Story'
    })

    .when('/bupa', {
        templateUrl: 'case-story.tpl.html',
        controller: 'BupaCtrl as vm',
        title: 'Bupa'
    })

    .when('/surfing-australia', {
        templateUrl: 'case-story.tpl.html',
        controller: 'SurfCtrl as vm',
        title: 'Surfing Australia'
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