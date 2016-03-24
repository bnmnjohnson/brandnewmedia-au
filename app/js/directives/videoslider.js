function VideoSlider() {

    return {
        restrict: 'EA',
        templateUrl: 'directives/videoslider.html',
        scope: {
            video: '='
        },
        link: function() {

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

                (function() {
                    function calculator(width) {
                        var percent = '72%';
                        if (width <= 480) {
                            percent = '72%';
                        } else if (width <= 767) {
                            percent = '82%';
                        } else {
                            percent = '92%';
                        }
                        return percent;
                    };

                    var $example = $('#example'),
                        $frame = $('.frame', $example),
                        $details = $('div.details', $example),
                        $title = $('#title', $details),
                        $photographer = $('#photographer', $details),
                        $description = $('#description', $details),
                        lastIndex = 0;

                    $frame.mightySlider({
                        speed: 1000,
                         startAt: 0,
                        autoScale: 1,
                        easing: 'easeOutExpo',
                        preloadMode: 'all',


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
                            loop: 1
                        }
                    }, {
                        active: function(name, index) {
                            var slideOptions = this.slides[index].options;

                            if (index == 0) {
                                console.log("add class now");
                                $('.slide_element').addClass('marginLeft');
                                $('.mSNext').addClass('buttonMarginRight');
                            } else {
                                console.log("remove class");
                                $('.slide_element').removeClass('marginLeft').addClass('normalMargin');
                                $('.mSNext').removeClass('buttonMarginRight').addClass('normalRight');
                            }

                            // if (lastIndex !== index)
                            //     $details.stop().animate({ opacity: 0 }, 500, function() {
                            //         $title.html(slideOptions.title);
                            //         $photographer.html(slideOptions.photographer);
                            //         $description.html(slideOptions.description);
                            //         $details.animate({ opacity: 1 }, 500);
                            //     });

                            //  lastIndex = index;
                        }
                    }).init();

                    var API = $frame.data().mightySlider;

                    $win.resize(function() {
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