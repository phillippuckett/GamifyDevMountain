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





    /**#################  Cards #################*/

    $scope.getCards = function () {
        ass.getCards()
          .then( function ( response ) {
            $scope.cards = response;
          } );
      }
      // $scope.cards = $scope.getCards();

    $scope.getCard = function ( id ) {
      ass.getcard( id )
        .then( function ( response ) {
          $scope.card = response;
        } );
    }

    $scope.createCard = function ( card ) {
      ass.createCard( card )
        .then( function ( response ) {
          $scope.getCards();
        } );
    }

    $scope.updateCard = function ( id, updatedCard ) {
      $scope.getCards( id, updateCard )
        .then( function ( response ) {
          $scope.getCards();
        } );
    }

    $scope.deleteCard = function ( id ) {
      ass.deleteCard( id )
        .then( function ( response ) {
          $scope.getCards();
        } );
    }





    /**#################  Cohorts #################*/
    //
    // $scope.getCohorts = function () {
    //     ass.getCohorts()
    //       .then( function ( response ) {
    //         $scope.cohorts = response;
    //       } );
    //   }
    //   // $scope.cohorts = $scope.getCohorts();
    //
    // $scope.getCohort = function ( id ) {
    //   ass.getcohort( id )
    //     .then( function ( response ) {
    //       $scope.cohort = response;
    //     } );
    // }
    //
    // $scope.createCohort = function ( cohort ) {
    //   ass.createCohort( cohort )
    //     .then( function ( response ) {
    //       $scope.getCohorts();
    //     } );
    // }
    //
    // $scope.updateCohort = function ( id, updatedCohort ) {
    //   $scope.getCohorts( id, updateCohort )
    //     .then( function ( response ) {
    //       $scope.getCohorts();
    //     } );
    // }
    //
    // $scope.deleteCohort = function ( id ) {
    //   ass.deleteCohort( id )
    //     .then( function ( response ) {
    //       $scope.getCohorts();
    //     } );
    // }
    //


    /**############  Curriculums ############*/

    $scope.getCurriculums = function () {
        ass.getCurriculums()
          .then( function ( response ) {
            $scope.curriculums = response;
          } );
      }
      // $scope.curriculums = $scope.getCurriculums();

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
      // $scope.students = $scope.getStudents();

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



    /*############### Dummy Data ###############*/

    $scope.cards = [
      {
        cardName: 'CSS Card',
        otherKey: 'CSS',
        badges: [ {
          badgeName: 'badge1',
          badgeDescription: 'this is a badge'
              }, {
          badgeName: 'badge2',
          badgeDescription: 'this is a description'
              }, {
          badgeName: 'badge3',
          badgeDescription: 'this is an achievement'
              }, {
          badgeName: 'badge4',
          badgeDescription: 'this should reward a badge'
              }, {
          badgeName: 'badge5',
          badgeDescription: 'this is an badge for earning an achievement'
              } ]
              },
      {
        cardName: 'JS Card',
        cardKeyOne: 'JS',
        badges: [ {
          badgeName: 'badge1',
          badgeDescription: 'this is a badge'
                }, {
          badgeName: 'badge2',
          badgeDescription: 'this is a description'
                }, {
          badgeName: 'badge3',
          badgeDescription: 'this is an achievement'
                }, {
          badgeName: 'badge4',
          badgeDescription: 'this should reward a badge'
                }, {
          badgeName: 'badge5',
          badgeDescription: 'this is an badge for earning an achievement'
                } ]

              },
      {
        cardName: 'HTML Card',
        cardKeyOne: 'HTML',
        badges: [ {
          badgeName: 'badge1',
          badgeDescription: 'this is a badge'
                }, {
          badgeName: 'badge2',
          badgeDescription: 'this is a description'
                }, {
          badgeName: 'badge3',
          badgeDescription: 'this is an achievement'
                }, {
          badgeName: 'badge4',
          badgeDescription: 'this should reward a badge'
                }, {
          badgeName: 'badge5',
          badgeDescription: 'this is an badge for earning an achievement'
                } ]

              },
      {
        cardName: 'Angular Card',
        cardKeyOne: 'angular',
        badges: [ {
          badgeName: 'badge1',
          badgeDescription: 'this is a badge'
                }, {
          badgeName: 'badge2',
          badgeDescription: 'this is a description'
                }, {
          badgeName: 'badge3',
          badgeDescription: 'this is an achievement'
                }, {
          badgeName: 'badge4',
          badgeDescription: 'this should reward a badge'
                }, {
          badgeName: 'badge5',
          badgeDescription: 'this is an badge for earning an achievement'
                } ]

              },
      {
        cardName: 'Scss Card',
        cardKeyOne: 'Scss',
        badges: [ {
          badgeName: 'badge1',
          badgeDescription: 'this is a badge'
                }, {
          badgeName: 'badge2',
          badgeDescription: 'this is a description'
                }, {
          badgeName: 'badge3',
          badgeDescription: 'this is an achievement'
                }, {
          badgeName: 'badge4',
          badgeDescription: 'this should reward a badge'
                }, {
          badgeName: 'badge5',
          badgeDescription: 'this is an badge for earning an achievement'
                } ]

              } ]


    $scope.thisIsSomeData = [
          // {
          //   "firstName": "Box",
          //   "lastName": "Barney"
          // },
          // {
          //   "firstName": "Sketer",
          //   "lastName": "Skeetegrew"
          // },
      {
        "firstName": "Florraine",
        "lastName": "Flise",
        "company": "Flomveyer",
        "employed": false
         },
      {
        "firstName": "Prancy",
        "lastName": "Praters",
        "company": "Pruelton",
        "employed": false
          }
        ];

    $scope.thisIsMyData = [
      {
        "firstName": "Cox",
        "lastName": "Carney"
          },
      {
        "firstName": "peter",
        "lastName": "petegrew"
          },
      {
        "firstName": "Lorraine",
        "lastName": "Wise",
        "company": "Comveyer",
        "employed": false
         },
      {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "Fuelton",
        "employed": false
          }
        ];



  } ] );
