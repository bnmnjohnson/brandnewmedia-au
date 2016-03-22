function CaseCtrl($scope, $rootScope, DarkBackground, $timeout) {


    var vm = this;

    var icons = [
        'office', 'facebook', 'twitter', 'apple', 'whatsapp', 'linkedin', 'windows',
        'accessibility', 'alarm', 'aspect_ratio', 'autorenew', 'bookmark_outline', 'dashboard', 'dns', 'favorite_outline', 'get_app', 'highlight_remove', 'history', 'list', 'picture_in_picture', 'print', 'settings_ethernet', 'settings_power', 'shopping_cart', 'spellcheck', 'swap_horiz', 'swap_vert', 'thumb_up', 'thumbs_up_down', 'translate', 'trending_up', 'visibility', 'warning', 'mic', 'play_circle_outline', 'repeat', 'skip_next', 'call', 'chat', 'clear_all', 'dialpad', 'dnd_on', 'forum', 'location_on', 'vpn_key', 'filter_list', 'inbox', 'link', 'remove_circle_outline', 'save', 'text_format', 'access_time', 'airplanemode_on', 'bluetooth', 'data_usage', 'gps_fixed', 'now_wallpaper', 'now_widgets', 'storage', 'wifi_tethering', 'attach_file', 'format_line_spacing', 'format_list_numbered', 'format_quote', 'vertical_align_center', 'wrap_text', 'cloud_queue', 'file_download', 'folder_open', 'cast', 'headset', 'keyboard_backspace', 'mouse', 'speaker', 'watch', 'audiotrack', 'edit', 'brush', 'looks', 'crop_free', 'camera', 'filter_vintage', 'hdr_strong', 'photo_camera', 'slideshow', 'timer', 'directions_bike', 'hotel', 'local_library', 'directions_walk', 'local_cafe', 'local_pizza', 'local_florist', 'my_location', 'navigation', 'pin_drop', 'arrow_back', 'menu', 'close', 'more_horiz', 'more_vert', 'refresh', 'phone_paused', 'vibration', 'cake', 'group', 'mood', 'person', 'notifications_none', 'plus_one', 'school', 'share', 'star_outline'
    ];

    var colors = ['lightgreen', 'pink', 'wheat', '#cc99ff', '#abcdef'];

    $scope.cnt = Math.floor(Math.random() * icons.length);
    $scope.icon = icons[$scope.cnt];
    $scope.fill = colors[0];
    $scope.size = 48;


    $rootScope.bodyclass = DarkBackground.bodyClass.data;

    $scope.hero = {
        'url': 'http://cdn.brandnewmedia.global/wp-content/uploads/2016/03/10125033/ChannelPLAY2-AU.mp4',
        'thumbnail': 'images/AB1PpQlRyds.jpg'
    }

    $scope.lunaimage = {
        'url': 'images/AB1PpQlRyds.jpg',
        'alt': 'Here is some alt text'
    }
    $scope.lunagif = {
        'url': 'images/ezgif-2280143617.gif',
        'alt': 'Here is some alt text'
    }

    $scope.idea = {
        title: 'The idea',
        description: 'Praesent vel felis quis velit condimentum sodales. Proin ultrices justo at tempus fringilla. Proin vestibulum luctus sem eu sagittis. Duis non quam et orci volutpat bibendum sed et metus. Sed aliquet convallis ligula id cursus. Quisque et ornare ex. Nullam vulputate tellus elit. Morbi ornare consequat mi, in consequat dui gravida vitae. Maecenas id erat in mauris mattis vulputate in nec tortor. Pellentesque bibendum nisl ut lacus egestas finibus.'
    }

    $scope.solution = {
        title: 'The solution',
        description: 'Praesent vel felis quis velit condimentum sodales. Proin ultrices justo at tempus fringilla. Proin vestibulum luctus sem eu sagittis. Duis non quam et orci volutpat bibendum sed et metus. Sed aliquet convallis ligula id cursus. Quisque et ornare ex. Nullam vulputate tellus elit. Morbi ornare consequat mi, in consequat dui gravida vitae. Maecenas id erat in mauris mattis vulputate in nec tortor. Pellentesque bibendum nisl ut lacus egestas finibus.'
    }

    $scope.results = {
        title: 'AB1PpQlRyds',
        description: 'images/AB1PpQlRyds.jpg'
    }





}

CaseCtrl.$inject = ["$scope", "$rootScope", "DarkBackground", "$timeout"];

export default {
    name: 'CaseCtrl',
    fn: CaseCtrl
};