//The line chart controller loads data from the Open Baltimore cite and loops through both the Library and Museum data sets
//to determine the count of each per Baltimore police district. After the counts are set in the musData and libData arrays,
//a chart.js Chart object is created using the arrays and the 'line' tag, and the line chart is passed on to View 3 (Visualize) 
//via the $scope variable


appMod.controller("LineChartController", function ($scope) { 
    var musData = [0,0,0,0,0,0,0,0,0];
    var libData = [0,0,0,0,0,0,0,0,0];       
    $(document).ready(function(){ 
        var museumJson = [];
        var libraryJson = [];
        //Museum data set
        $.get("https://data.baltimorecity.gov/resource/jmja-s2wq.json", function(data, status){  
            museumJson = data;
        });
        //Library data set
        $.get("https://data.baltimorecity.gov/resource/5z6v-z7uh.json", function(data, status){            
            libraryJson = data;
            var datum;
             for(datum in libraryJson){  
                var dist = libraryJson[datum].policedistrict;
                switch(dist){
                    case "NORTHERN":
                        libData[0]++;
                        break;
                    case "NORTHEASTERN":
                        libData[1]++;
                        break;
                    case "NORTHWESTERN":
                        libData[2]++;
                        break;
                    case "SOUTHERN":
                        libData[3]++;
                        break;
                    case "SOUTHEASTERN":
                        libData[4]++;
                        break;
                    case "SOUTHWESTERN":
                        libData[5]++;
                        break;
                    case "CENTRAL":
                        libData[6]++;
                        break;
                    case "EASTERN":
                        libData[7]++;
                        break;
                    case "WESTERN":
                        libData[8]++;
                        break;
                    default:
                        break;
                }
            }

            var datumM;
            for(datumM in museumJson){  
                var dist = museumJson[datumM].policedistrict;
                switch(dist){
                    case "NORTHERN":
                        musData[0]++;
                        break;
                    case "NORTHEASTERN":
                        musData[1]++;
                        break;
                    case "NORTHWESTERN":
                        musData[2]++;
                        break;
                    case "SOUTHERN":
                        musData[3]++;
                        break;
                    case "SOUTHEASTERN":
                        musData[4]++;
                        break;
                    case "SOUTHWESTERN":
                        musData[5]++;
                        break;
                    case "CENTRAL":
                        musData[6]++;
                        break;
                    case "EASTERN":
                        musData[7]++;
                        break;
                    case "WESTERN":
                        musData[8]++;
                        break;
                    default:
                        break;
                }
            }
             var ctx = document.getElementById('myChart').getContext('2d');
             myChart = new Chart(ctx, {
                 type: 'line',
                 data: {
                 labels: ['Northern', 'Northeastern', 'Northwestern', 'Southern', 'Southeastern', 'Southwestern', 'Central','Eastern','Western'],
                 datasets: [{
                     label: 'Libraries',
                     data: libData ,
                     backgroundColor: "rgba(153,255,51,0.4)"
                    }, {
                      label: 'Museums',
                      data:  musData,
                      backgroundColor: "rgba(255,153,0,0.4)"
                   }]
                  }, options: {
                       animation: {
                         duration:5000
                       },
                      responsive:false,
                      maintainAspectRatio: false
                    }
                });
        });   
             

           
    });


});