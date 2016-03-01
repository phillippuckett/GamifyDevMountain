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
    templateUrl: './../html/templates/cardAdminTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
} )

.directive( "categoryAdminDir", function () {
  return {
    templateUrl: './../html/templates/categoryAdminTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
} )

.directive( "cohortsDir", function () {
  return {
    templateUrl: './../html/templates/gridTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
} )


.directive( "crudButtonsDir", function () {
  return {
    templateUrl: './html/templates/crudButtonsTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
} )

.directive( "curriculumAdminDir", function () {
  return {
    templateUrl: './../html/templates/curriculumAdminTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
} )


.directive( "gridDir", function () {
  return {
    templateUrl: './../html/templates/gridTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
} )

.directive( "headerAdminDir", function () {
  return {
    templateUrl: './html/templates/headerAdminTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
} )

.directive( "leftNavAreaDir", function () {
  return {
    templateUrl: './html/templates/leftNavAreaTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
} )

.directive( "poptartDir", function () {
  return {
    templateUrl: './../html/templates/poptartTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
} )

.directive( "studentsDir", function () {
  return {
    templateUrl: './../html/templates/studentsTmpl.html',
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
