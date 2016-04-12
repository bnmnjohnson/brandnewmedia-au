function OnRun($rootScope, $route, AppSettings) {
    'ngInject';

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
