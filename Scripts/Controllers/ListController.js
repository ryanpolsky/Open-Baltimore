
//Controller loads the data from Open Baltimore site into two lists, which are passed on to views 1 & 2
//via the $scope variable 

appMod.controller('ListController',function($scope){
     $(document).ready(function(){ 
        $.get("https://data.baltimorecity.gov/resource/5z6v-z7uh.json", function(data, status){         
            $scope.libraries = data;
        });  
    });
     $(document).ready(function(){ 
        $.get("https://data.baltimorecity.gov/resource/jmja-s2wq.json", function(data2, status){          
            $scope.museums = data2;
        });  
    });
        
        $scope.districtFilter = ["","Northern","Northeastern","Northwestern","Southern","Southeastern","Southwestern","Central","Western","Eastern"];
        $scope.orderList = ["A-Z","Z-A"];
  });
