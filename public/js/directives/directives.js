angular.module( "GamifyDevMountain" )


.directive( "badgeAdminDir", function () {
  return {
    templateUrl: './html/templates/badgeTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
} )

.directive( "cardAdminDir", function () {
  return {
    templateUrl: './../html/templates/adminStuff/cardAdminTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
} )

.directive( "crudButtonsDir", function () {
  return {
    templateUrl: './html/templates/adminStuff/crudButtonsTmpl.html',
    controller: 'crudButtonCtrl',
    restrict: 'E'
  }
} )

.directive( "gridDir", function () {
  return {
    templateUrl: './../html/templates/adminStuff/gridTmpl.html',
    // controller: 'adminCtrl',
    // controller: 'mainCtrl',
    restrict: 'E'
  }
} )

.directive( "headerAdminDir", function () {
  return {
    templateUrl: './../html/templates/adminStuff/headerAdminTemplate.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
} )

.directive( "leftNavAreaDir", function () {
  return {
    templateUrl: './html/templates/adminStuff/leftNavAreaTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
} );
