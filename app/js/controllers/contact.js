function ContactCtrl($rootScope, $scope, WhiteBackground, $location, $routeParams) {

    var vm = this;

    $rootScope.bodyclass = WhiteBackground.bodyClass.data;
    $scope.contact = {
        "title": "Let's work together. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }

    // vm.menuItem = 'australia';
    vm.menuState = $location.path();
    console.log(vm.menuState);



    vm.menuItem = $routeParams.country;

    // vm.catSort = "Australia";

    // vm.changeHref = function() {
    //     if (vm.catSort == 'Australia') {
    //         alert("change href")
    //         $location.hash('australia');
    //     }

    // }

    // vm.changeCat = function() {
    //     if ($location.hash() == 'Singapore') {
    //         alert("Singapore")
    //         vm.catSort = "Singapore";
    //     }
    // }

    vm.australiaDetails = [{
        "name": "Sydney Office",
        "country": "australia",
        "city": "Sydney",
        "address": "The Pavilion, 201 Miller Street",
        "suburb": "North Sydney",
        "state": "NSW",
        "postcode": "2060",
        "phone": "61299013100",
        "email": "hello@brandnewmedia.com.au",
        "id": '1'
    }, {
        "name": "Sydney Studio",
        "country": "australia",
        "city": "Sydney",
        "address": "The Pavilion, 201 Miller Street",
        "suburb": "North Sydney",
        "state": "NSW",
        "postcode": "2060",
        "phone": "61299013100",
        "email": "hello@brandnewmedia.com.au",
        "id": '1'
    }, {
        "name": "Melbourne Office",
        "country": "australia",
        "city": "Sydney",
        "address": "The Pavilion, 201 Miller Street",
        "suburb": "North Sydney",
        "state": "NSW",
        "postcode": "2060",
        "phone": "61299013100",
        "email": "hello@brandnewmedia.com.au",
        "id": '1'
    }, {
        "name": "Melbourne Studio",
        "country": "australia",
        "city": "Sydney",
        "address": "The Pavilion, 201 Miller Street",
        "suburb": "North Sydney",
        "state": "NSW",
        "postcode": "2060",
        "phone": "61299013100",
        "email": "hello@brandnewmedia.com.au",
        "id": '1'
    }]

    vm.singaporeDetails = [{
        "name": "Singapore Office",
        "country": "australia",
        "city": "Sydney",
        "address": "The Pavilion, 201 Miller Street",
        "suburb": "North Sydney",
        "state": "NSW",
        "postcode": "2060",
        "phone": "61299013100",
        "email": "hello@brandnewmedia.com.au",
        "id": '1'
    }, {
        "name": "Singapore Studio",
        "country": "australia",
        "city": "Sydney",
        "address": "The Pavilion, 201 Miller Street",
        "suburb": "North Sydney",
        "state": "NSW",
        "postcode": "2060",
        "phone": "61299013100",
        "email": "hello@brandnewmedia.com.au",
        "id": '1'
    }]

    vm.countries = [{
        "australia": [{
            "name": "Sydney Office",
            "country": "australia",
            "city": "Sydney",
            "address": "The Pavilion, 201 Miller Street",
            "suburb": "North Sydney",
            "state": "NSW",
            "postcode": "2060",
            "phone": "61299013100",
            "email": "hello@brandnewmedia.com.au",
            "id": '1'
        }, {
            "name": "Sydney Studio",
            "country": "australia",
            "city": "Sydney",
            "address": "The Pavilion, 201 Miller Street",
            "suburb": "North Sydney",
            "state": "NSW",
            "postcode": "2060",
            "phone": "61299013100",
            "email": "hello@brandnewmedia.com.au",
            "id": '1'
        }]
    }, {
        "singapore": [{
            "name": "Singapore Office",
            "country": "australia",
            "city": "Sydney",
            "address": "The Pavilion, 201 Miller Street",
            "suburb": "North Sydney",
            "state": "NSW",
            "postcode": "2060",
            "phone": "61299013100",
            "email": "hello@brandnewmedia.com.au",
            "id": '1'
        }, {
            "name": "Singapore Studio",
            "country": "australia",
            "city": "Sydney",
            "address": "The Pavilion, 201 Miller Street",
            "suburb": "North Sydney",
            "state": "NSW",
            "postcode": "2060",
            "phone": "61299013100",
            "email": "hello@brandnewmedia.com.au",
            "id": '1'
        }]
    }, {
        "philippines": [{
            "name": "Sydney",
            "country": "Australia"
        }]
    }, {
        "germany": [{
            "name": "Sydney",
            "country": "Australia"
        }]
    }, {
        "america": [{
            "name": "Sydney",
            "country": "Australia"
        }]
    }]



    // vm.Australia = [{
    //     "Australia": [{
    //             "name": "Sydney Office",
    //             "country": "australia",
    //             "city": "Sydney",
    //             "address": "The Pavilion, 201 Miller Street",
    //             "suburb": "North Sydney",
    //             "state": "NSW",
    //             "postcode": "2060",
    //             "phone": "61299013100",
    //             "email": "hello@brandnewmedia.com.au",
    //             "id": '1'
    //         }, {
    //             "name": "Sydney Studio",
    //             "country": "australia",
    //             "city": "Sydney",
    //             "address": "The Pavilion, 201 Miller Street",
    //             "suburb": "North Sydney",
    //             "state": "NSW",
    //             "postcode": "2060",
    //             "phone": "61299013100",
    //             "email": "hello@brandnewmedia.com.au",
    //             "id": '1'
    //         }, {
    //             "name": "Melbourne Office",
    //             "country": "australia",
    //             "city": "Sydney",
    //             "address": "The Pavilion, 201 Miller Street",
    //             "suburb": "North Sydney",
    //             "state": "NSW",
    //             "postcode": "2060",
    //             "phone": "61299013100",
    //             "email": "hello@brandnewmedia.com.au",
    //             "id": '1'
    //         }, {
    //             "name": "Melbourne Studio",
    //             "country": "australia",
    //             "city": "Sydney",
    //             "address": "The Pavilion, 201 Miller Street",
    //             "suburb": "North Sydney",
    //             "state": "NSW",
    //             "postcode": "2060",
    //             "phone": "61299013100",
    //             "email": "hello@brandnewmedia.com.au",
    //             "id": '1'
    //         }
    //     }], {


}

ContactCtrl.$inject = ["$rootScope", "$scope", "WhiteBackground", "$location", "$routeParams"];

export default {
    name: 'ContactCtrl',
    fn: ContactCtrl
};