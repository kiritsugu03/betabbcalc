var app = angular.module('bbcalc', []);

app.controller('main', ['$scope', function($scope) {
  $scope.data = [
    {
      "sbtsSmMode": "G",
      "noOfRats": 1,
      "sbtsSmConfiguration": "FSMF",
      "sm1Deployment": {
        "fsmf1" : "gsm",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "sm2Deployment": {
        "fsmf1" : "",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : "",
        "ecs": ""
      },
      "wcdmaSu": "",
      "gsmBbCapacity": 24
    },
    {
      "sbtsSmMode": "G",
      "noOfRats": 1,
      "sbtsSmConfiguration": "FSMF+FBBC",
      "sm1Deployment": {
        "fsmf1" : "gsm",
        "fbbx1" : "gsm",
        "fbbx2": ""
      },
      "sm2Deployment": {
        "fsmf1" : "",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : "",
        "ecs": ""
      },
      "wcdmaSu": "",
      "gsmBbCapacity": 24
    },
    {
      "sbtsSmMode": "L",
      "noOfRats": 1,
      "sbtsSmConfiguration": "FSMF+FBBC+FBBC",
      "sm1Deployment": {
        "fsmf1" : "lte",
        "fbbx1" : "lte",
        "fbbx2": "lte"
      },
      "sm2Deployment": {
        "fsmf1" : "",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : 3,
        "ecs": ""
      },
      "wcdmaSu": "",
      "gsmBbCapacity": ""
    },
    {
      "sbtsSmMode": "L",
      "noOfRats": 1,
      "sbtsSmConfiguration": "FSMF+FBBC+FBBC",
      "sm1Deployment": {
        "fsmf1" : "lte",
        "fbbx1" : "lte",
        "fbbx2": "lte"
      },
      "sm2Deployment": {
        "fsmf1" : "",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : 1,
        "ecs": 1
      },
      "wcdmaSu": "",
      "gsmBbCapacity": ""
    },
    {
      "sbtsSmMode": "L",
      "noOfRats": 1,
      "sbtsSmConfiguration": "FSMF+FBBC",
      "sm1Deployment": {
        "fsmf1" : "lte",
        "fbbx1" : "lte",
        "fbbx2": ""
      },
      "sm2Deployment": {
        "fsmf1" : "",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : 2,
        "ecs": ""
      },
      "wcdmaSu": "",
      "gsmBbCapacity": ""
    },
    {
      "sbtsSmMode": "L",
      "noOfRats": 1,
      "sbtsSmConfiguration": "FSMF+FBBC",
      "sm1Deployment": {
        "fsmf1" : "lte",
        "fbbx1" : "lte",
        "fbbx2": ""
      },
      "sm2Deployment": {
        "fsmf1" : "",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : "",
        "ecs": 1
      },
      "wcdmaSu": "",
      "gsmBbCapacity": ""
    },
    {
      "sbtsSmMode": "L",
      "noOfRats": 1,
      "sbtsSmConfiguration": "FSMF",
      "sm1Deployment": {
        "fsmf1" : "lte",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "sm2Deployment": {
        "fsmf1" : "",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : 1,
        "ecs": ""
      },
      "wcdmaSu": "",
      "gsmBbCapacity": ""
    },
    {
      "sbtsSmMode": "W",
      "noOfRats": 1,
      "sbtsSmConfiguration": "FSMF+FBBA/C+FBBA/C",
      "sm1Deployment": {
        "fsmf1" : "wcdma",
        "fbbx1" : "wcdma",
        "fbbx2": "wcdma"
      },
      "sm2Deployment": {
        "fsmf1" : "",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : "",
        "ecs": ""
      },
      "wcdmaSu": 17.5,
      "gsmBbCapacity": ""
    },
    {
      "sbtsSmMode": "W",
      "noOfRats": 1,
      "sbtsSmConfiguration": "FSMF+FBBA/C",
      "sm1Deployment": {
        "fsmf1" : "wcdma",
        "fbbx1" : "wcdma",
        "fbbx2": ""
      },
      "sm2Deployment": {
        "fsmf1" : "",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : "",
        "ecs": ""
      },
      "wcdmaSu": 11.5,
      "gsmBbCapacity": ""
    },
    {
      "sbtsSmMode": "W",
      "noOfRats": 1,
      "sbtsSmConfiguration": "FSMF",
      "sm1Deployment": {
        "fsmf1" : "wcdma",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "sm2Deployment": {
        "fsmf1" : "",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : "",
        "ecs": ""
      },
      "wcdmaSu": 5.5,
      "gsmBbCapacity": ""
    },
    {
      "sbtsSmMode": "WG",
      "noOfRats": 2,
      "sbtsSmConfiguration": "FSMF+FBBA/C+FBBA/C",
      "sm1Deployment": {
        "fsmf1" : "wg",
        "fbbx1" : "wcdma",
        "fbbx2": "wcdma"
      },
      "sm2Deployment": {
        "fsmf1" : "",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : "",
        "ecs": ""
      },
      "wcdmaSu": 15.5,
      "gsmBbCapacity": 24
    },
    {
      "sbtsSmMode": "WG",
      "noOfRats": 2,
      "sbtsSmConfiguration": "FSMF+FBBA/C",
      "sm1Deployment": {
        "fsmf1" : "wg",
        "fbbx1" : "wcdma",
        "fbbx2": ""
      },
      "sm2Deployment": {
        "fsmf1" : "",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : "",
        "ecs": ""
      },
      "wcdmaSu": 9.5,
      "gsmBbCapacity": 24
    },
    {
      "sbtsSmMode": "LG",
      "noOfRats": 2,
      "sbtsSmConfiguration": "FSMF+FBBC+FBBC",
      "sm1Deployment": {
        "fsmf1" : "LTE-GSM",
        "fbbx1" : "LTE",
        "fbbx2": "LTE"
      },
      "sm2Deployment": {
        "fsmf1" : "",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "1",
        "bcs" : "2",
        "ecs": ""
      },
      "wcdmaSu": "",
      "gsmBbCapacity": "24"
    },
    {
      "sbtsSmMode": "LG",
      "noOfRats": 2,
      "sbtsSmConfiguration": "FSMF+FBBC",
      "sm1Deployment": {
        "fsmf1" : "LTE-GSM",
        "fbbx1" : "LTE",
        "fbbx2": ""
      },
      "sm2Deployment": {
        "fsmf1" : "",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "1",
        "bcs" : "1",
        "ecs": ""
      },
      "wcdmaSu": "",
      "gsmBbCapacity": "24"
    },
    {
      "sbtsSmMode": "LW",
      "noOfRats": 2,
      "sbtsSmConfiguration": "FSMF+FBBA/C+FBBC",
      "sm1Deployment": {
        "fsmf1" : "WCDMA",
        "fbbx1" : "LTE",
        "fbbx2": "LTE"
      },
      "sm2Deployment": {
        "fsmf1" : "",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : "1",
        "ecs": ""
      },
      "wcdmaSu": "5.5",
      "gsmBbCapacity": ""
    },
    {
      "sbtsSmMode": "LW",
      "noOfRats": 2,
      "sbtsSmConfiguration": "FSMF+FBBA/C",
      "sm1Deployment": {
        "fsmf1" : "WCDMA",
        "fbbx1" : "LTE",
        "fbbx2": ""
      },
      "sm2Deployment": {
        "fsmf1" : "",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : "1",
        "ecs": ""
      },
      "wcdmaSu": "5.5",
      "gsmBbCapacity": ""
    },
    {
      "sbtsSmMode": "LW",
      "noOfRats": 2,
      "sbtsSmConfiguration": "FSMF+FBBA/C+FBBC",
      "sm1Deployment": {
        "fsmf1" : "WCDMA",
        "fbbx1" : "WCDMA",
        "fbbx2": "LTE"
      },
      "sm2Deployment": {
        "fsmf1" : "",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : "1",
        "ecs": ""
      },
      "wcdmaSu": "11.5",
      "gsmBbCapacity": ""
    },
    {
      "sbtsSmMode": "LW",
      "noOfRats": 2,
      "sbtsSmConfiguration": "FSMF+FBBA/C+FBBA/C+FSMF+FBBC+FBBC",
      "sm1Deployment": {
        "fsmf1" : "WCDMA",
        "fbbx1" : "WCDMA",
        "fbbx2": "WCDMA"
      },
      "sm2Deployment": {
        "fsmf1" : "LTE",
        "fbbx1" : "LTE",
        "fbbx2": "LTE"
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : "1",
        "ecs": "1"
      },
      "wcdmaSu": "17.5",
      "gsmBbCapacity": ""
    },
    {
      "sbtsSmMode": "LW",
      "noOfRats": 2,
      "sbtsSmConfiguration": "FSMF+FBBA/C+FBBA/C+FSMF+FBBC",
      "sm1Deployment": {
        "fsmf1" : "WCDMA",
        "fbbx1" : "WCDMA",
        "fbbx2": "WCDMA"
      },
      "sm2Deployment": {
        "fsmf1" : "LTE",
        "fbbx1" : "LTE",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : "",
        "ecs": "1"
      },
      "wcdmaSu": "17.5",
      "gsmBbCapacity": ""
    },
    {
      "sbtsSmMode": "LW",
      "noOfRats": 2,
      "sbtsSmConfiguration": "FSMF+FBBA/C+FBBA/C+FSMF",
      "sm1Deployment": {
        "fsmf1" : "WCDMA",
        "fbbx1" : "WCDMA",
        "fbbx2": "WCDMA"
      },
      "sm2Deployment": {
        "fsmf1" : "LTE",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : "1",
        "ecs": ""
      },
      "wcdmaSu": "17.5",
      "gsmBbCapacity": ""
    },
    {
      "sbtsSmMode": "LW",
      "noOfRats": 2,
      "sbtsSmConfiguration": "FSMF+FBBA/C+FBBA/C+FSMF+FBBC",
      "sm1Deployment": {
        "fsmf1" : "WCDMA",
        "fbbx1" : "WCDMA",
        "fbbx2": "WCDMA"
      },
      "sm2Deployment": {
        "fsmf1" : "LTE",
        "fbbx1" : "LTE",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : "2",
        "ecs": ""
      },
      "wcdmaSu": "17.5",
      "gsmBbCapacity": ""
    },
    {
      "sbtsSmMode": "LW",
      "noOfRats": 2,
      "sbtsSmConfiguration": "FSMF+FBBA/C+FBBA/C+FSMF+FBBC+FBBC",
      "sm1Deployment": {
        "fsmf1" : "WCDMA",
        "fbbx1" : "WCDMA",
        "fbbx2": "WCDMA"
      },
      "sm2Deployment": {
        "fsmf1" : "LTE",
        "fbbx1" : "LTE",
        "fbbx2": "LTE"
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : "3",
        "ecs": ""
      },
      "wcdmaSu": "17.5",
      "gsmBbCapacity": ""
    },
    {
      "sbtsSmMode": "LWG",
      "noOfRats": "3",
      "sbtsSmConfiguration": "FSMF+FBBC+FBBC",
      "sm1Deployment": {
        "fsmf1" : "WG",
        "fbbx1" : "LTE",
        "fbbx2": "LTE"
      },
      "sm2Deployment": {
        "fsmf1" : "",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : "2",
        "ecs": ""
      },
      "wcdmaSu": "3.5",
      "gsmBbCapacity": "24"

    },
    {
      "sbtsSmMode": "LWG",
      "noOfRats": "3",
      "sbtsSmConfiguration": "FSMF+FBBC",
      "sm1Deployment": {
        "fsmf1" : "WG",
        "fbbx1" : "LTE",
        "fbbx2": ""
      },
      "sm2Deployment": {
        "fsmf1" : "",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : "1",
        "ecs": ""
      },
      "wcdmaSu": "3.5",
      "gsmBbCapacity": "24"
    },
    {
      "sbtsSmMode": "LWG",
      "noOfRats": "3",
      "sbtsSmConfiguration": "FSMF+FBBA/C+FBBC",
      "sm1Deployment": {
        "fsmf1" : "WG",
        "fbbx1" : "WCDMA",
        "fbbx2": "LTE"
      },
      "sm2Deployment": {
        "fsmf1" : "",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : "1",
        "ecs": ""
      },
      "wcdmaSu": "9.5",
      "gsmBbCapacity": "24"
    },
    {
      "sbtsSmMode": "LWG",
      "noOfRats": "3",
      "sbtsSmConfiguration": "FSMF+FBBC+FBBA/C",
      "sm1Deployment": {
        "fsmf1" : "LG",
        "fbbx1" : "LTE",
        "fbbx2": "WCDMA"
      },
      "sm2Deployment": {
        "fsmf1" : "",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : "1",
        "ecs": "1"
      },
      "wcdmaSu": "5.5",
      "gsmBbCapacity": "24"
    },
    {
      "sbtsSmMode": "LWG",
      "noOfRats": "3",
      "sbtsSmConfiguration": "FSMF+FBBA/C+FBBA/C",
      "sm1Deployment": {
        "fsmf1" : "LG",
        "fbbx1" : "WCDMA",
        "fbbx2": "WCDMA"
      },
      "sm2Deployment": {
        "fsmf1" : "",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "1",
        "bcs" : "",
        "ecs": ""
      },
      "wcdmaSu": "11.5",
      "gsmBbCapacity": "24"
    },
    {
      "sbtsSmMode": "LWG",
      "noOfRats": "3",
      "sbtsSmConfiguration": "FSMF+FBBA/C",
      "sm1Deployment": {
        "fsmf1" : "LG",
        "fbbx1" : "WCDMA",
        "fbbx2": ""
      },
      "sm2Deployment": {
        "fsmf1" : "",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "1",
        "bcs" : "",
        "ecs": ""
      },
      "wcdmaSu": "5.5",
      "gsmBbCapacity": "24"
    },
    {
      "sbtsSmMode": "LWG",
      "noOfRats": "3",
      "sbtsSmConfiguration": "FSMF+FBBA/C+FBBA/C+FSMF+FBBC+FBBC",
      "sm1Deployment": {
        "fsmf1" : "WG",
        "fbbx1" : "WCDMA",
        "fbbx2": "WCDMA"
      },
      "sm2Deployment": {
        "fsmf1" : "LTE",
        "fbbx1" : "LTE",
        "fbbx2": "LTE"
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : "3",
        "ecs": ""
      },
      "wcdmaSu": "15.5",
      "gsmBbCapacity": "24"
    },
    {
      "sbtsSmMode": "LWG",
      "noOfRats": "3",
      "sbtsSmConfiguration": "FSMF+FBBA/C+FBBA/C+FSMF+FBBC+FBBC",
      "sm1Deployment": {
        "fsmf1" : "WG",
        "fbbx1" : "WCDMA",
        "fbbx2": "WCDMA"
      },
      "sm2Deployment": {
        "fsmf1" : "LTE",
        "fbbx1" : "LTE",
        "fbbx2": "LTE"
      },
      "lteBbCapacity": {
        "rcs" : "",
        "bcs" : "1",
        "ecs": "1"
      },
      "wcdmaSu": "15.5",
      "gsmBbCapacity": "24"
    },
    {
      "sbtsSmMode": "LWG",
      "noOfRats": "3",
      "sbtsSmConfiguration": "FSMF+FBBA/C+FBBA/C+FSMF+FBBC",
      "sm1Deployment": {
        "fsmf1" : "WG",
        "fbbx1" : "WCDMA",
        "fbbx2": "WCDMA"
      },
      "sm2Deployment": {
        "fsmf1" : "LTE",
        "fbbx1" : "LTE",
        "fbbx2": ""
      },
        "lteBbCapacity": {
        "rcs" : "",
        "bcs" : "2",
        "ecs": ""
      },
      "wcdmaSu": "15.5",
      "gsmBbCapacity": "24"
    },
    {
      "sbtsSmMode": "LWG",
      "noOfRats": "3",
      "sbtsSmConfiguration": "FSMF+FBBA/C+FBBA/C+FSMF+FBBC",
      "sm1Deployment": {
        "fsmf1" : "WG",
        "fbbx1" : "WCDMA",
        "fbbx2": "WCDMA"
      },
      "sm2Deployment": {
        "fsmf1" : "LTE",
        "fbbx1" : "LTE",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "1",
        "bcs" : "",
        "ecs": "1"
      },
      "wcdmaSu": "15.5",
      "gsmBbCapacity": "24"
    },
    {
      "sbtsSmMode": "LWG",
      "noOfRats": "3",
      "sbtsSmConfiguration": "FSMF+FBBA/C+FBBA/C+FSMF",
      "sm1Deployment": {
        "fsmf1" : "WG",
        "fbbx1" : "WCDMA",
        "fbbx2": "WCDMA"
      },
      "sm2Deployment": {
        "fsmf1" : "LTE",
        "fbbx1" : "",
        "fbbx2": ""
      },
      "lteBbCapacity": {
        "rcs" : "1",
        "bcs" : "",
        "ecs": ""
      },
      "wcdmaSu": "15.5",
      "gsmBbCapacity": "24"
    }
  ]
}]);
