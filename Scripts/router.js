
    //Handles the dispalying of partial views in the mainContent section of the html, sets default to View1 (Home),
    //additionally, the router dictates which controller will be used to load each partial view
    
    var appMod = angular.module('appMod',["ngRoute","chart.js"]);
    appMod.config(function($routeProvider){

        $routeProvider
        .when("/", {
           controller: 'ListController',
           templateUrl : 'Views/View1.html'
           })
        .when("/view1", {
           controller: 'ListController',
           templateUrl : 'Views/View1.html'
           })
         .when("/view2", {
            controller: 'ListController',
            templateUrl : 'Views/View2.html'
          })
        .when("/view3", {
            controller: 'BarGraphController',
            templateUrl : 'Views/View 3.html'
          })
        .when("/view4", {
            controller: 'LineChartController',
            templateUrl : 'Views/View 3.html'
          })
        .when("/view5", {
            controller: 'RadarGraphController',
            templateUrl : 'Views/View 3.html'
          });
    
        
    });
 

