function SingleImage() {

    return {
        restrict: 'E',
        templateUrl: 'directives/singleimage.html',
        scope: {
            info: '='
        }
    }
}

export default {
    name: 'singleImage',
    fn: SingleImage
};
