function CaseCtrl($scope, $rootScope, DarkBackground, MetadataService) {


    var vm = this;

    var title = 'Love is a roller coaster';
    var description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum tortor augue.';

    MetadataService.setMetadata({
        title: 'Brand New Media | ' + title,
        description: description
    });


    var act = new gigya.socialize.UserAction();
    act.setTitle(title);
    act.setDescription(description);
    act.setLinkBack("http://brandnewmedia.com.au/our-flickbook/lifestyle-focused-digital-summit-proves-successful-acquiring-global-audience");
    act.addMediaItem({ type: 'image', src: 'http://demo.gigya.com/images/recipe2.png', href: 'http://demo.gigya.com/recipe2.php' });
    var showShareBarUI_params = {
        containerID: 'componentDiv',
        shareButtons: 'Facebook,Twitter,Linkedin,googleplus,Email,Print',
        iconsOnly: 'true',
        userAction: act,
        shareButtons:
        [
            { // Facebook
                provider:'facebook',
                tooltip:'Recommend this on Facebook',
                iconImgUp:'images/icons/social-icons-facebook.png'
            },
            { // Twitter
                provider:'Twitter',
                tooltip:'Tweet this',
                iconImgUp:'images/icons/social-icons-twitter.png'
            },
            { // Linkedin
                provider:'Linkedin',
                tooltip:'Twitter',
                iconImgUp:'images/icons/social-icons-linkedin.png'
            },
            { // Google+
                provider:'googleplus',
                tooltip:'Share this on Google+',
                iconImgUp:'images/icons/social-icons-google.png'
            },
            { // Email
                provider:'Email',
                tooltip:'Email this',
                iconImgUp:'images/icons/social-icons-email.png'
            },
            { // Print
                provider:'Print',
                tooltip:'Print this page',
                iconImgUp:'images/icons/social-icons-print.png'
            }
            
        ],
        buttonWithCountTemplate: '<div class="gigya-icon" style="padding-right: 20px; padding-top: 10px; height: 26px;" onclick="$onClick"><img src="$iconImg" height="16"/></div>',
        buttonTemplate: '<div class="gigya-icon" style="padding-right: 20px; padding-top: 10px; height: 26px;" onclick="$onClick"><img src="$iconImg" height="16"/></div>',
        noButtonBorders: true

    }

    gigya.socialize.showShareBarUI(showShareBarUI_params);


    $rootScope.bodyclass = DarkBackground.bodyClass.data;

    $scope.intro = {
        'title': title,
        'description': 'Realising they were missing an online presence, Luna Park knew video content was needed to drive brand awareness through digital audiences. They wanted to engage people socially and activate peer-to-peer sharing, demonstrating they offer something for everyone.',
        'link': 'https://www.youtube.com/watch?v=AB1PpQlRyds&list=PL9RaBFzxpPDBwpkCvMgNsvrNpZRKgM1Ey',
        'linkTitle': 'Watch online',
        'client': 'Luna Park Sydney',
        'services': 'Content Production, Distribution & Amplification'
    }

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

    $scope.results = [
        { number: '360,000', description: 'video views and still growing' },
        { number: '50%', description: 'of video views were driven through earned media' },
        { number: '30%', description: 'higher than average video retention rate' },
        { number: '900,000', description: 'Facebook reach' },
    ]





}

CaseCtrl.$inject = ["$scope", "$rootScope", "DarkBackground", "MetadataService"];

export default {
    name: 'CaseCtrl',
    fn: CaseCtrl
};