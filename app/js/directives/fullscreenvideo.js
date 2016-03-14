function FullScreenVideo() {

    return {
        restrict: 'A',
        link: function(scope, element, attrs, ctrl) {

            scope.$watch(attrs.fullScreenVideo, function(value) {
                setTimeout(function() {
                    $('#universal_video_background_default').universal_video_background({
                        width: 1920,
                        height: 1200,
                        autoPlayFirstVideo: true,
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

                    $('.play-pause-btn').on('click', function() {

                        if ($(this).attr('data-click') == 1) {
                            $(this).attr('data-click', 0)
                            $(this).text('Play')
                            $('#' + videoId)[0].pause();
                        } else {
                            $(this).attr('data-click', 1)
                            $(this).text('Pause')
                            $('#' + videoId)[0].play();
                        }

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
    name: 'fullScreenVideo',
    fn: FullScreenVideo
};
