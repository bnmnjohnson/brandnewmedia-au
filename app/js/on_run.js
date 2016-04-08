function OnRun($rootScope, $route, AppSettings) {
    'ngInject';

$rootScope.loadingView = false;

    $rootScope.$on('$routeChangeStart', function() {
        console.log("changing");
        $rootScope.loadingView = true;
    });

    $rootScope.$on('$routeChangeSuccess', function() {
        console.log("changing");
        $rootScope.loadingView = false;
    });


    // change page title based on route
    $rootScope.$on('$routeChangeSuccess', (event, currentRoute, toState) => {

        $rootScope.pageTitle = '';

        if ($route.current.title) {
            $rootScope.pageTitle += $route.current.title;
            $rootScope.pageTitle += ' \u007C ';
        }

        $rootScope.pageTitle += AppSettings.appTitle;
    });

}

export default OnRun;
