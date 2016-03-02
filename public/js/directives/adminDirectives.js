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
    templateUrl: './../html/templates/categoryAdminTmpl.html',
    controller: 'adminCtrl',
    restrict: 'E'
  }
} )

.directive( "cohortsDir", function () {
  return {
    templateUrl: './html/templates/adminStuff/crudButtonsTmpl.html',
    controller: 'crudButtonCtrl',
    restrict: 'E'
  }
} )



.directive( "crudButtonsDir", function () {
  return {
    templateUrl: './html/templates/adminStuff/crudButtonsTmpl.html',
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

.directive( "logoDir", function () {
  return {
    templateUrl: './html/templates/adminStuff/logoTmpl.html',
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
