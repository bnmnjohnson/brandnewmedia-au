function disableable($parse) {

    return {
        restrict: 'C',
        priority: 1000000,
        require: '?ngClick',
        link: function (scope, elem, attrs, ngClick) {
            if (attrs.disable){
                var disable = $parse(attrs.disable);

                elem.bind('click', function (e) {
                    if (disable(scope)){
                        console.log("preventDefault");
                        e.preventDefault();
                        //e.stopImmediatePropagation();
                        return false;
                    }

                    return true;
                });

                scope.$watch(disable, function (val) {
                    if (val){
                        elem.addClass('disabled');
                        elem.css('cursor', 'default');
                        elem.prop('disabled', true);
                    }
                    else {
                        elem.removeClass('disabled');
                        elem.css('cursor', 'pointer');
                        elem.prop('disabled', false);
                    }
                });
            }
        }
    };
}

disableable.$inject = ["$parse"];

export default {
    name: 'disableable',
    fn: disableable
};
