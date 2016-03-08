/* Administrator */
angular.module( 'GamifyDevMountain' )
  .controller( 'adminCtrl', [ "ModalService", "$state", "adminStateSvc", "$scope", function ( ModalService, $state, adminStateSvc, $scope ) {
    $scope.test = 'testingfrom adminCtrl';

    var ass = adminStateSvc;

    // $scope.badges = {
    //   badgeImage: ''
    //   badgeName: ''
    //   desc: ''
    // }

    // ############### Badges ################ \\
    $scope.badges = [];
    $scope.getBadges = function () {
      ass.getBadges()
        .then( function ( response ) {
          $scope.badges = response;
        } );
    }
    $scope.getBadge = function ( id ) {
      ass.getbadge( id )
        .then( function ( response ) {
          $scope.badge = response;
        } );
    }

    $scope.createBadge = function ( badge ) {
      ass.createBadge( badge )
        .then( function ( response ) {
          $scope.getBadges();
        } );
    }

    $scope.updateBadge = function ( id, updatedBadge ) {
      $scope.getBadges( id, updateBadge )
        .then( function ( response ) {
          $scope.getBadges();
        } );
    }

    $scope.deleteBadge = function ( id ) {
      ass.deleteBadge( id )
        .then( function ( response ) {
          $scope.getBadges();
        } );
    }
    $scope.getCurriculums = function () {
        ass.getCurriculums()
          .then( function ( response ) {
            $scope.curriculums = response;
          } );
      }
    $scope.getCurriculum = function ( id ) {
      ass.getcurriculum( id )
        .then( function ( response ) {
          $scope.curriculum = response;
        } );
    }
    $scope.createCurriculum = function ( curriculum ) {
      ass.createCurriculum( curriculum )
        .then( function ( response ) {
          $scope.getCurriculums();
        } );
    }
    $scope.updateCurriculum = function ( id, updatedCurriculum ) {
      $scope.getCurriculums( id, updateCurriculum )
        .then( function ( response ) {
          $scope.getCurriculums();
        } );
    }
    $scope.deleteCurriculum = function ( id ) {
      ass.deleteCurriculum( id )
        .then( function ( response ) {
          $scope.getCurriculums();
        } );
    }
    /** ############## Students ############## */
    $scope.getStudents = function () {
        ass.getStudents()
          .then( function ( response ) {
            $scope.students = response;
          } );
      }
    $scope.getStudent = function ( id ) {
      ass.getstudent( id )
        .then( function ( response ) {
          $scope.student = response;
        } );
    }
    $scope.createStudent = function ( student ) {
      ass.createStudent( student )
        .then( function ( response ) {
          $scope.getStudents();
        } );
    }
    $scope.updateStudent = function ( id, updatedStudent ) {
      $scope.getStudents( id, updateStudent )
        .then( function ( response ) {
          $scope.getStudents();
        } );
    }
    $scope.deleteStudent = function ( id ) {
      ass.deleteStudent( id )
        .then( function ( response ) {
          $scope.getStudents();
        } );
    }
    // ####### ui-grid stuff ####### \\
    $scope.selected = null;
    $scope.gridData = [];
    $scope.activeData = function ( selected ) {
      console.log( selected );
      // $scope.gridData[ selected ] = 'true';
      // console.log( $scope.gridData );
      $scope.selected = selected;
    }
    $scope.gridOptions = {
      enableSorting: true,
      columnDefs: [
        {
          name: 'field1',
          enableSorting: false
            },
        {
          name: 'field2'
            },
        {
          name: 'field3',
          enableSorting: true
            }
          ]
    };
    // NOTE: There is an issue, where if the first objects within the array are smaller, than the others, the default grid view will only display the same amount of values that the first couple objects have, not the full objects'key:value pairs of the larger objects, later in the array.
  } ] );