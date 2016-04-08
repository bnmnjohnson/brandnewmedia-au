function ImageInterchange() {
    // from here http://jsfiddle.net/WickyNilliams/9jsZR/
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            scope.$watch(attrs.imageInterchange, function(value) {
                var $targets = element;

                enquire.register("screen and (min-width:40em)", {

                    match: function() {
                        $targets.each(function() {
                            var $this = $(this);

                            //toggle src and store old img
                            $this.data("lowRes", $this.attr("src"));
                            $this.attr("src", $this.data("hiRes"));
                        });
                    },

                    unmatch: function() {
                        $targets.each(function() {
                            var $this = $(this);

                            //restore low res src
                            $this.attr("src", $this.data("lowRes"));
                        });
                    }

                });
            });
        }
    }
}

export default {
    name: 'imageInterchange',
    fn: ImageInterchange
};
