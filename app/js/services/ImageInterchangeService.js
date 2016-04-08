// function ImageInterchangeService($rootScope, $timeout) {
//     'ngInject';

//     var max720 = {

//         watch: function() { 
//           enquire.register('screen and (min-width: 27.5em)', max720handler); 

//         },

//         unwatch: function() { 
//           enquire.unregister('screen and (min-width: 27.5em)'); 
//         },

//         match: function(callback) { 
//           $rootScope.$on('match720', callback); 
//           console.log("hai");
//         },

//         notmatch: function(callback) { 
//           $rootScope.$on('unmatch720', callback); 
//         },
//     };

//     var max720handler = {

//         match: function() {
//             $timeout(function() { // timeout ensures that this fires after your controller has loaded
//                 $rootScope.$emit('match720');
//             });
//         },

//         unmatch: function() {
//             $rootScope.$emit('unmatch720');
//         }
//     };


//     return max720;
// }

// export default {
//     name: 'ImageInterchangeService',
//     fn: ImageInterchangeService
// };
