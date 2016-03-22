function ImagePanel() {

    return {
        restrict: 'E',
        templateUrl: 'directives/image-panel.html',
        scope: {
            story: '='
        }
    }
}

export default {
    name: 'imagePanel',
    fn: ImagePanel
};
