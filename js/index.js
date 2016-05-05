
angular.module('MyApp', ['ngSanitize'])
        .controller('ExampleController', ['$scope','$http', function($scope, $http)
        {
            $http.get('js/json/info.json').success(function(data) {
              $scope.data = data;

              function res(data){
                 var s="";
                 console.log(data);
                  data.forEach(function(entry){s+=entry.content+"\n";});
                 console.log(s);
                  return s;
              };

              $scope.summarycontent=res($scope.data.summary.contents);
              $scope.educationcontent=res($scope.data.education.contents);
              $scope.educationcontent=res($scope.data.education.contents);
              $scope.projectcontent=res($scope.data.project.contents);

            }); 

          


           $scope.edit = {statusfullname:{name:"hello", status:false},
                    statusjob:{name:"hello",  status:false},
                    statushistory:{name:"hello",  status:false},
                    statusinformationme:{name:"hello",  status:false},
                    statesummary:{name:"hello",  status:false},
                    stateeducation:{name:"hello",  status:false},
                    stateproject:{name:"hello",  status:false},
                    stateavatar:{name:"hello",  status:false},
                    stateskill:{name:"hello",  status:false}
                  };

            $scope.hidetextbox = function(nameshow){
              nameshow.status = !nameshow.status;
              console.log(nameshow);   
            };

         
        }]);





