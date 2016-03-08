function FullScreenVideo() {

    return {
        restrict: 'EA',
        templateUrl: 'directives/fullscreenvideo.html',
        scope: {
            info: '='
        },
        link: function() {
            console.log("video");

            $('#universal_video_background_default').universal_video_background({
                width: 1920,
                height: 1200,
                autoPlayFirstVideo: true,
                width100Proc: true,
                height100Proc: true,
                responsive: true,
                setAsBg: true,
                showVideoControls: true,
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


        }
    }
}

export default {
    name: 'fullScreenVideo',
    fn: FullScreenVideo
};
