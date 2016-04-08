// function RouteLoadingIndicator($rootScope, $route) {
//     return {
//         restrict: 'E',
//         template: '<div id="loading-bg" class="loading-bg"><div class="loading-spinner"></div></div>',
//         link: function(scope, element, attrs) {

//             scope.isRouteLoading = false;

//             $rootScope.$on('$routeChangeStart', function() {
//                 scope.isRouteLoading = true;
//             });

//             $rootScope.$on('$routeChangeSuccess', function() {
//                 scope.isRouteLoading = false;
//             });

//         }
//     }
// }

// export default {
//     name: 'routeLoadingIndicator',
//     fn: RouteLoadingIndicator
// };
