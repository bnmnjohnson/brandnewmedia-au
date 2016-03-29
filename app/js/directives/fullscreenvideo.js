function FullScreenVideo() {

    return {
        restrict: 'A',
        link: function(scope, element, attrs, ctrl) {

            scope.$watch(attrs.fullScreenVideo, function(value) {
                setTimeout(function() {
                    $('#universal_video_background_default').universal_video_background({
                        width: 1920,
                        height: 1200,
                        autoPlayFirstVideo: false,
                        width100Proc: true,
                        height100Proc: true,
                        responsive: true,
                        setAsBg: true,
                        showVideoControls: false,
                        bottomNavPos: 'left', //left/center/right
                        showBottomNav: false,
                        showOnInitBottomNav: false,

                        borderWidth: 0,
                        borderColor: '#FFFFFF',


                        thumbsBorderColorON: '#FF0000',
                        thumbsBorderColorOFF: '#000000',
                        thumbsWrapperBg: 'transparent', //hexa or image
                        thumbsBgOffImgOpacity: 30,
                        thumbsWrapperMarginTop: 40

                    });
                    var videoId = ($(".html5-video-player").attr('id'));
                    // alert(videoId);

                    $('#' + videoId).on("timeupdate", function() {
                        $('.progress .video-progress').css('width', (100 / $('#' + videoId)[0].duration) * $('#' + videoId)[0].currentTime + '%')
                    });

                    // we have three states

                    // initial: show poster image and play button


                    // playing : show progress and hide play button

                    // if 'play' button clicked
                    $('.play-pause-btn').on('click', function() {
                        // remove background image
                        $('.controls-container').css("background-image", "none");

                        // check if paused
                        if ($('.play-pause-btn').attr('data-click') == 0) {
                            $('.play-pause-btn').attr('data-click', 1);
                                // if visible, hide play button
                            $('.play-pause-btn').hide();
                            // if hidden, show progress 
                            $('.progress-container').show();
                            $('#' + videoId)[0].play();
                        }


                    });


                    // paused: show play button and progress

                    // if 'pause' button clicked
                    $('.pause').on('click', function() {
                        if ($('.play-pause-btn').attr('data-click') == 1) {
                            $('.play-pause-btn').attr('data-click', 0);
                            // if hidden, show play button
                            $('.play-pause-btn').show();

                            // if showing, hide progress
                            $('.progress-container').hide();

                            // pause video
                            $('#' + videoId)[0].pause();
                        }
                    });



                    // $('.play-pause-btn').on('click', function() {

                    //     if ($(this).attr('data-click') == 1) {
                    //         $(this).attr('data-click', 0)
                    //         //$(this).text('Play')
                    //         // show controls,  video is not playing
                    //         $('#' + videoId)[0].pause();
                    //     } 

                    // });

                    // $('.pause').on('click', function() {

                    //     if ($('.play-pause-btn').attr('data-click') == 1) {
                    //         $('.play-pause-btn').attr('data-click', 0)
                    //         //$(this).text('Play')
                    //         // show controls and cover image  video is PAUSED and not playing
                    //         $('#' + videoId)[0].pause();
                    //     } else {
                    //         $('.play-pause-btn').attr('data-click', 1)
                    //         //$(this).text('Pause')
                    //         // hide controls and any cover image, video is playing
                    //         $('#' + videoId)[0].play();
                    //     }

                    // });


                    $('.progress').on('click', function(e) {

                        var relX = e.pageX - $(this).offset().left;
                        var percentageLeft = (relX / $(this).width()) * 100

                        $('.progress .video-progress').css('width', percentageLeft + '%')

                        $('#' + videoId)[0].currentTime = ($('#' + videoId)[0].duration / 100) * percentageLeft;

                    });
                }, 1)

            });

        }
    }
}


export default {
    name: 'fullScreenVideo',
    fn: FullScreenVideo
};
