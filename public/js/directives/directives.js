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

.directive( "categoryAdminDir", function () {
  return {
    templateUrl: './../html/templates/adminStuff/categoryAdminTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
} )

.directive( "cohortsDir", function () {
  return {
    templateUrl: './../html/templates/adminStuff/gridTmpl.html',
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

.directive( "curriculumAdminDir", function () {
  return {
    templateUrl: './../html/templates/adminStuff/curriculumAdminTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
} )


.directive( "gridDir", function () {
  return {
    templateUrl: './../html/templates/adminStuff/gridTmpl.html',
    controller: 'adminCtrl',
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
} )

.directive( "poptartDir", function () {
  return {
    templateUrl: './../html/templates/adminStuff/poptartTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
} )

.directive( "studentsDir", function () {
  return {
    templateUrl: './../html/templates/adminStuff/studentsTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
} )

// .directive( "statusDir", function () {
//   return {
//     templateUrl: './../html/templates/statusTmpl.html',
//     controller: 'adminCtrl',
//     restrict: 'E'
//   }
// })
;
