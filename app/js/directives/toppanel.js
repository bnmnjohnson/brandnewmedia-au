function TopPanel() {

    return {
        restrict: 'E',
        templateUrl: 'directives/top-panel.html',
        scope: {
            message: '='
        }
    }
}

export default {
    name: 'topPanel',
    fn: TopPanel
};
