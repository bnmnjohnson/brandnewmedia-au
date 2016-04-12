function FullWidthVideo() {

    return {
        restrict: 'A',
        link: function(scope, element, attrs, ctrl) {

            scope.$watch(attrs.fullWidthVideo, function(value) {
                setTimeout(function() {
                    $('#universal_video_background_default').universal_video_background({
                        width: 1250,
                        height: 620,
                        autoPlayFirstVideo: false,
                        width100Proc: true,
                        responsive: true,
                        showVideoControls: false,
                        borderWidth: 0,
                        borderColor: '#FFFFFF',
                        showBottomNav: false,

                        texturePath: 'skins/patternFullScreenBg_1.png',

                        thumbsWrapperTopPadding: 14,
                        thumbsWrapperBottomPadding: 14,
                        thumbsBorderColorON: '#FFFFFF',
                        thumbsBorderColorOFF: '#cccccc',
                        thumbsWrapperBg: 'transparent', //hexa or image
                        thumbsBgOffImgOpacity: 70,
                        thumbsWrapperMarginTop: -70

                    });


                    var videoId = ($(".html5-video-player").attr('id'));
                    // alert(videoId);

                    $('#' + videoId).on("timeupdate", function() {
                        $('.progress .video-progress').css('width', (100 / $('#' + videoId)[0].duration) * $('#' + videoId)[0].currentTime + '%')
                    });

                    $('.play-pause-btn').on('click', function() {
                        // remove background image
                        $('.controls-container').css("background-image", "none");

                        // check if paused
                        if ($('.play-pause-btn').attr('data-click') == 0) {
                            $('.play-pause-btn').attr('data-click', 0)
                                // if visible, hide play button
                            $('.play-pause-btn').hide();
                            // if hidden, show progress 
                            $('.progress-container').show();
                        }




                        // if paused, play video
                        $('#' + videoId)[0].play();
                    });


                    // paused: show play button and progress

                    // if 'pause' button clicked
                    $('.pause').on('click', function() {

                        // if hidden, show play button
                        $('.play-pause-btn').show();

                        // if showing, hide progress
                        $('.progress-container').hide();

                        // pause video
                        $('#' + videoId)[0].pause();
                    });



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
    name: 'fullWidthVideo',
    fn: FullWidthVideo
};
