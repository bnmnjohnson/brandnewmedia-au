function VideoSlider() {

    return {
        restrict: 'EA',
        templateUrl: 'directives/videoslider.html',
        scope: {
            video: '='
        },
        link: function() {
      

            /**
             * Get viewport/window size (width and height).
             *
             * @return {Object}
             */
            function getViewport() {
                var e = window,
                    a = 'inner';
                if (!('innerWidth' in window)) {
                    a = 'client';
                    e = document.documentElement || document.body;
                }
                return {
                    width: e[a + 'Width'],
                    height: e[a + 'Height']
                }
            }


            jQuery(document).ready(function($) {
                var $win = $(window),
                    isTouch = !!('ontouchstart' in window),
                    clickEvent = isTouch ? 'tap' : 'click';

                (function(){
                    function calculator(width){
                        var percent = '94%';
                        if (width <= 480) {
                            percent = '94%';
                        }
                        else if (width <= 767) {
                            percent = '94%';
                        }
                        else {
                            percent = '94%';
                        }
                        return percent;
                    };

                    var $example = $('#example'),
                        $frame = $('.frame', $example),
                        $details = $('div.details', $example),
                        $title = $('#title', $details),
                        $photographer = $('#photographer', $details),
                        $description = $('#description', $details),
                        lastIndex = -1;

                    $frame.mightySlider({
                        speed: 1000,
                        // startAt: 1,
                        autoScale: 1,
                        easing: 'easeOutExpo',

                        
                        // Navigation options
                        navigation: {
                            slideSize: calculator(getViewport().width),
                            keyboardNavBy: 'slides',
                            activateOn: clickEvent
                        },

                        // Dragging
                        dragging: {
                            swingSpeed: 0.12,
                            onePage: 1
                        },

                        // Buttons
                        buttons: !isTouch ? {
                            prev: $('a.mSPrev', $frame),
                            next: $('a.mSNext', $frame)
                        } : {},

                        // Cycling
                        cycling: {
                            cycleBy: null
                        }
                    }, {
                        active: function(name, index) {
                            var slideOptions = this.slides[index].options;

                            if (lastIndex !== index)
                                $details.stop().animate({ opacity: 0 }, 500, function(){
                                    $title.html(slideOptions.title);
                                    $photographer.html(slideOptions.photographer);
                                    $description.html(slideOptions.description);
                                    $details.animate({ opacity: 1 }, 500);
                                });

                            lastIndex = index;
                        }
                    });

                    var API = $frame.data().mightySlider;

                    $win.resize(function(){
                        API.set({
                            navigation: {
                                slideSize: calculator(getViewport().width)
                            }
                        });
                    });
                })();
            });

        }
    }
}

export default {
    name: 'videoSlider',
    fn: VideoSlider
};
