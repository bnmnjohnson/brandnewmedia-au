function BackgroundImage() {
    // from here https://gist.github.com/andyshora/6045373
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            attrs.$observe('backgroundImage', function(value) {

                element.css({
                    'background-image': 'url(' + value + ')'
                });


            });
        }
    }
}

export default {
    name: 'backgroundImage',
    fn: BackgroundImage
};
