function NewsletterService($rootScope, $timeout) {
    'ngInject';



    var max720 = {

        watch: function() { 
          enquire.register('screen and (min-width: 27.5em)', max720handler); 
        },

        unwatch: function() { 
          enquire.unregister('screen and (min-width: 27.5em)'); 
        },

        ismatch: function(callback) { 
          $rootScope.$on('match720', callback); 
        },

        notmatch: function(callback) { 
          $rootScope.$on('unmatch720', callback); 
        },

    };

    var max720handler = {

        match: function() {
            $timeout(function() { // timeout ensures that this fires after your controller has loaded
                $rootScope.$emit('match720');
            });
        },

        unmatch: function() {
            $rootScope.$emit('unmatch720');
        }
    };

    return max720;

}

export default {
    name: 'NewsletterService',
    fn: NewsletterService
};
