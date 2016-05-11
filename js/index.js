
    var data = new Firebase('https://dagk-quochan-1312179.firebaseio.com/web/data');
    var avatar = data.child('data/avatar');
	var education = data.child('data/education');
	var experience = data.child('data/experience');
	var footer = data.child('data/footer');
	var header_banner = data.child('data/header_banner');
	var history_me = data.child('data/history_me');
	var introduce = data.child('data/introduce');
	var infomation_me = data.child('data/infomation_me');
	var project = data.child('data/project');
	var skill = data.child('data/skill');
	var summary = data.child('data/summary');
	

angular.module('MyApp', ['ngSanitize'])
        .controller('ExampleController', ['$scope','$http', function($scope, $http)
        {
            $http.get('info.json').success(function(data) {
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





