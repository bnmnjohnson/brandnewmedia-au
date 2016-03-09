function TextPanel() {

    return {
        restrict: 'E',
        templateUrl: 'directives/text-panel.html',
        scope: {
            info: '='
        }
    }
}

export default {
    name: 'textPanel',
    fn: TextPanel
};
