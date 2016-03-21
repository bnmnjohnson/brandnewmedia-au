function SvgIcon() {
    return {
        restrict: 'AE',
        type: 'svg',
        scope: {
            icon: '='
        },
        template: '<svg viewBox="0 0 32 32"><path d="{{icon}}"> </path></svg>',
        link: function() {

        }

    }
}

export default {
    name: 'svgIcon',
    fn: SvgIcon
};