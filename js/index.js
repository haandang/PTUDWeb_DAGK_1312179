angular
      .module('MyApp', ['ngMaterial', 'tabs'])
      .config(function( $mdIconProvider ){
      });
      
      
      angular.module('tabs', [ 'ngMaterial' ])
     .controller('AppController', ['fieldService', '$mdBottomSheet', '$mdSidenav', AppController ])
     .service('fieldService', ['$q', FieldService]);

function AppController( fieldService, $mdBottomSheet, $mdSidenav) {
  
  var prop = this;

  prop.selected     = null;
  prop.tabs        = [ ];
  prop.selectfield   = selectfield;
  prop.info = {
    name: 'Tr?n Van Ð?c',
    avatar: "http://www.upsieutoc.com/images/2016/03/08/duc.jpg",
    phone: '01668150363',
    address: '147, Nguyen Thi Nho St, Ward 16, District 11, Ho Chi Minh, Viet Nam ',
    email: 'tranvanducqng@gmail.com',
    facebook: 'www.facebook.com/duc.otaku'
  };
  prop.makeContact = makeContact;
  prop.toggleList   = toggleUsersList;

  // Load all registered fields

  fieldService
      .loadAllfields()
      .then( function( tabs ) {
        prop.tabs    = [].concat(tabs);
        prop.selected = tabs[0];
      });

  function toggleUsersList() {
      $mdSidenav('left').toggle();
    }
  
  /**
    * Select the current avatars
    * @param menuId
    */
  function selectfield(field) {
     prop.selected =  field;
   }
  
  function makeContact(info){
    $mdBottomSheet.show(
    {
      controllerAs     : "vm",
      controller       : [ '$mdBottomSheet', ContactSheetController],
      template: '<md-bottom-sheet class="md-list md-has-header"><md-subheader>Contact <span class="name">{{ vm.user.name }}</span>:</md-subheader><md-list><md-list-item ng-repeat="item in vm.items"><md-button ng-click="vm.contactUser(item)"><md-icon id="padding" md-svg-icon="{{ item.icon_url }}"></md-icon>{{item.name}}</md-button></md-list-item></md-list></md-bottom-sheet>',
      parent           : angular.element(document.getElementById('showBottomSheet'))
    });
    
    function ContactSheetController( $mdBottomSheet ) {
       this.user = info;
       this.items = [
         { name: 'Google',
           icon_url: 'https://rawgit.com/angular/material-start/es5-tutorial/app/assets/svg/google_plus.svg'},
         {
           name: 'Facebook',
           icon_url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg'
         }
       ];
       this.contactUser = function(action) {
         $mdBottomSheet.hide();
        if (action.name == "Facebook"){
          window.location="https://www.facebook.com/duc.otaku"
        }else if(action.name == "Google"){
          window.location="mailto:tranvanducqng@gmail.com";
        }
          
       };
     }
  }
}


// fields DataService

function FieldService($q){
  var cv = [
		{
	"document": "Han DANG | CURRICULUM VITAE",
	"firstname": "DANG", 
	"middlename": "Van",
	"lastname": "Quoc Han",
	"phones": {
		"mobile": "+84 1649375184"
	},
	"email": [
		"dvqhan@gmail.com",
	],	
 
 
	"education": [
		{
			"title": "Majoring in Software Engineering",
			"place": "Ho Chi Minh University of Science",
			"period": "Sept, 2013 to now"
		},
	],
  
	"skills": [
		{
			"skill": [
				"C",
				"C++",
				"C#",
				"Java",
				"HTML",
				"CSS",
				"JavaScript"
			],
			"others": [
				"SQL",
				"Linux"
			]
		},
	],
	
	"projects": [
		{
			"title": "My Calendar Application",
			"subject": "Introduction Software Engineering",
			"describe": "An appliaction can notify user about events established in timetable of this appliaction.",
			"period": "Mar, 2015 to May, 2015"
		},
		{
			"title": "TrollChat Application",
			"subject": "Software Analysis and Design",
			"describe": "A chat application which users can chat like yahoo.",
			"period": "Sept, 2015 to Dec, 2015"
		},
		
	],
	
	"sumary": [
		{
			"Born in Hue on January 1st, 1995."
		},
	],
	
	"experience": [
		{
			"Soft skill"
		},
	],
  
  
  
}
	];

  // Promise-based API
  return {
    loadAllfields : function() {
      // Simulate async nature of real remote calls
      return $q.when(tabs);
    }
  };
}