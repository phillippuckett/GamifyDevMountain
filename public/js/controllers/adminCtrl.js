/* Administrator */
angular.module( 'GamifyDevMountain' )
  .controller( 'adminCtrl', function ( $scope, adminViewSvc ) {

      var avs = adminViewSvc;

      $scope.activeDir = {};
      $scope.toggleDirs = function ( selectedDir ) {
          // console.log( selectedDir );
          $scope.activeDir.student = false;
          $scope.activeDir.badgeAdmin = false;
          $scope.activeDir.cohorts = false;
          $scope.activeDir.cardAdmin = false;
          $scope.activeDir.poptart = false;
          $scope.activeDir.hideLogo = true;
          $scope.activeDir[ selectedDir ] = true;
          // console.log( $scope.activeDir );
          // console.log( $scope.cards );
        }
        // if ($scope.activeDir[student, badgeAdmin, cohorts, cardAdmin, poptart] == false) {
        //   $scope.activeDir.hideLogo = true;
        // }


      // ########### Cards ########### \\

      //the badge image has to be pulled in from a service somewhere, with a different query that matches the badge id to the image.

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


      // ####### ui-grid stuff ####### \\

      $scope.selected = null;

      $scope.gridData = [];
      $scope.activeData = function ( selected ) {
        // console.log( selected );
        $scope.gridData[ selected ] = 'true';
        // console.log( $scope.gridData );
        $scope.selected = selected;
      }


      // NOTE: There is an issue, where if the first objects within the array are smaller, than the others, the default grid view will only display the same amount of values that the first couple objects have, not the full objects'key:value pairs of the larger objects, later in the array.
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


      // ############### Badges ################ \\

    //   $scope.getBadges = function () {
    //     console.log('badges have been requested from mvs')
    //     avs.getBadges()
    //       .then( function ( response ) {
    //           $scope.badges = response.data;
    //           console.log(response);
    //       } );
    // }
    // $scope.badges = $scope.getBadges();
      $scope.badges = [
        {
          badgeName: 'CSS Card',
          badgeImgLink: './../media/Css100.png',
         },
        {
          badgeName: 'CSS Card',
          badgeImgLink: './../media/Css100.png',
        },
        {
          badgeName: 'CSS Card',
          badgeImgLink: './../media/Css100.png',
        },
        {
          badgeName: 'CSS Card',
          badgeImgLink: './../media/Css100.png',
        },
        {
          badgeName: 'CSS Card',
          badgeImgLink: './../media/Css100.png',
        },
        {
          badgeName: 'CSS Card',
          badgeImgLink: './../media/Css100.png',
        },
        {
          badgeName: 'CSS Card',
          badgeImgLink: './../media/Css100.png',
       },
        {
          badgeName: 'CSS Card',
          badgeImgLink: './../media/Css100.png',
        },
        {
          badgeName: 'CSS Card',
          badgeImgLink: './../media/Css100.png',
       }
     ];









  } );
