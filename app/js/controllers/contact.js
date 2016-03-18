function ContactCtrl($rootScope, $scope, WhiteBackground, $location) {

    var vm = this;

    $rootScope.bodyclass = WhiteBackground.bodyClass.data;
    $scope.contact = {
        "title": "Let's work together. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum tortor augue."
    }

    vm.catSort = "Australia";

    vm.changeHref = function() {
        if (vm.catSort == 'Australia') {
            alert("change href")
            $location.hash('australia');
        }

    }

    vm.changeCat = function() {
        if ($location.hash() == 'Singapore') {
            alert("Singapore")
            vm.catSort = "Singapore";
        }
    }

    vm.countries = [
    {
            "name": "Sydney Office",
            "country": "Australia",
            "city": "Sydney",
            "address": "The Pavilion, 201 Miller Street",
            "suburb": "North Sydney",
            "state": "NSW",
            "postcode": "2060",
            "phone": "61299013100",
            "email": "hello@brandnewmedia.com.au",
            "id" : '1'
        },
        {
            "name": "Sydney Studio",
            "country": "Australia",
            "city": "Sydney",
            "address": "The Pavilion, 201 Miller Street",
            "suburb": "North Sydney",
            "state": "NSW",
            "postcode": "2060",
            "phone": "61299013100",
            "email": "hello@brandnewmedia.com.au",
            "id" : '1'
        },
        {
            "name": "Signapore Office",
            "country": "Singapore",
            "city": "Sydney",
            "address": "The Pavilion, 201 Miller Street",
            "suburb": "North Sydney",
            "state": "NSW",
            "postcode": "2060",
            "phone": "61299013100",
            "email": "hello@brandnewmedia.com.au",
            "id" : '2'
        },
        {
            "name": "Singapore Studio",
            "country": "Singapore",
            "city": "Sydney",
            "address": "The Pavilion, 201 Miller Street",
            "suburb": "North Sydney",
            "state": "NSW",
            "postcode": "2060",
            "phone": "61299013100",
            "email": "hello@brandnewmedia.com.au",
            "id" : '2'
        },
        {
            "name": "Melbourne Office",
            "country": "Australia",
            "city": "Sydney",
            "address": "The Pavilion, 201 Miller Street",
            "suburb": "North Sydney",
            "state": "NSW",
            "postcode": "2060",
            "phone": "61299013100",
            "email": "hello@brandnewmedia.com.au",
            "id" : '1'
        },
        {
            "name": "Melbourne Studio",
            "country": "Australia",
            "city": "Sydney",
            "address": "The Pavilion, 201 Miller Street",
            "suburb": "North Sydney",
            "state": "NSW",
            "postcode": "2060",
            "phone": "61299013100",
            "email": "hello@brandnewmedia.com.au",
            "id" : '1'
        }

    ]

    vm.filterCountries = function (country) {
        //console.log(tag, $scope.catSort);
        return !vm.catSort ? 
                   country : (country.country == vm.catSort);

    };




}

ContactCtrl.$inject = ["$rootScope", "$scope", "WhiteBackground", "$location"];

export default {
    name: 'ContactCtrl',
    fn: ContactCtrl
};
