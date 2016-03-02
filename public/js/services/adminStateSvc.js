angular.module( 'GamifyDevMountain' )
  .service( 'adminStateSvc', function ( $state, $http ) {



    /**######## Badges ########*/
    this.getBadges = function () {
      return $http( {
          method: 'GET',
          url: '/api/badges'
        } )
        .then( function ( badgeData ) {
          return badgeData.data;
        } )
    };

    this.getBadge = function () {
      return $http( {
        method: 'GET',
        url: '/badge?_id=' + id
      } );
    };


    this.createBadges = function () {
      return $http( {
          method: 'POST',
          url: '/api/badges',
          data: badge
        } )
        .then( function ( badgeData ) {
          return badgeData.data;
        } )
    };


    this.editBadges = function () {
      return $http( {
          method: 'PUT',
          url: '/api/badges' + id,
          data: badge
        } )
        .then( function ( badgeData ) {
          return badgeData.data;
        } )
    };


    this.deleteBadges = function () {
      return $http( {
          method: 'DELETE',
          url: '/api/badges' + id
        } )
        .then( function ( badgeData ) {
          return badgeData.data;
        } )
    };


    /*############## Catagories ##############*/

    this.getCatagories = function () {
      return $http( {
          method: 'GET',
          url: '/api/catagories'
        } )
        .then( function ( catagoryData ) {
          return catagoryData.data;
        } )
    };

    this.getCatagory = function () {
      return $http( {
        method: 'GET',
        url: '/catagory?_id=' + id
      } );
    };


    this.createCatagories = function () {
      return $http( {
          method: 'POST',
          url: '/api/Catagories',
          data: Catagory
        } )
        .then( function ( CatagoryData ) {
          return CatagoryData.data;
        } )
    };


    this.editCatagories = function () {
      return $http( {
          method: 'PUT',
          url: '/api/Catagories' + id,
          data: Catagory
        } )
        .then( function ( CatagoryData ) {
          return CatagoryData.data;
        } )
    };


    this.deleteCatagories = function () {
      return $http( {
          method: 'DELETE',
          url: '/api/Catagories' + id
        } )
        .then( function ( CatagoryData ) {
          return CatagoryData.data;
        } )
    };




    /** ###### Cards ###### */
    this.getCards = function () {
      return $http( {
          method: 'GET',
          url: '/api/cards'
        } )
        .then( function ( cardData ) {
          return cardData.data;
        } )
    };

    this.getCard = function () {
      return $http( {
        method: 'GET',
        url: '/card?_id=' + id
      } );
    };


    this.createCards = function () {
      return $http( {
          method: 'POST',
          url: '/api/cards',
          data: card
        } )
        .then( function ( cardData ) {
          return cardData.data;
        } )
    };


    this.editCards = function () {
      return $http( {
          method: 'PUT',
          url: '/api/cards' + id,
          data: card
        } )
        .then( function ( cardData ) {
          return cardData.data;
        } )
    };


    this.deleteCards = function () {
      return $http( {
          method: 'DELETE',
          url: '/api/cards' + id
        } )
        .then( function ( cardData ) {
          return cardData.data;
        } )
    };



    /**######## Cohorts ########*/
    this.getCohorts = function () {
      return $http( {
          method: 'GET',
          url: '/api/cohorts'
        } )
        .then( function ( cohortData ) {
          return cohortData.data;
        } )
    };

    this.getCohort = function () {
      return $http( {
        method: 'GET',
        url: '/cohort?_id=' + id
      } );
    };


    this.createCohorts = function () {
      return $http( {
          method: 'POST',
          url: '/api/cohorts',
          data: cohort
        } )
        .then( function ( cohortData ) {
          return cohortData.data;
        } )
    };


    this.editCohorts = function () {
      return $http( {
          method: 'PUT',
          url: '/api/cohorts' + id,
          data: cohort
        } )
        .then( function ( cohortData ) {
          return cohortData.data;
        } )
    };


    this.deleteCohorts = function () {
      return $http( {
          method: 'DELETE',
          url: '/api/cohorts' + id
        } )
        .then( function ( cohortData ) {
          return cohortData.data;
        } )
    };

    /**######## Curriculums ########*/
    this.getCurriculums = function () {
      return $http( {
          method: 'GET',
          url: '/api/curriculums'
        } )
        .then( function ( curriculumData ) {
          return curriculumData.data;
        } )
    };

    this.getCurriculum = function () {
      return $http( {
        method: 'GET',
        url: '/curriculum?_id=' + id
      } );
    };


    this.createCurriculums = function () {
      return $http( {
          method: 'POST',
          url: '/api/curriculums',
          data: curriculum
        } )
        .then( function ( curriculumData ) {
          return curriculumData.data;
        } )
    };


    this.editCurriculums = function () {
      return $http( {
          method: 'PUT',
          url: '/api/curriculums' + id,
          data: curriculum
        } )
        .then( function ( curriculumData ) {
          return curriculumData.data;
        } )
    };


    this.deleteCurriculums = function () {
      return $http( {
          method: 'DELETE',
          url: '/api/curriculums' + id
        } )
        .then( function ( curriculumData ) {
          return curriculumData.data;
        } )
    };




    /*############## Students ##############*/

    this.getStudents = function () {
      return $http( {
          method: 'GET',
          url: '/api/students'
        } )
        .then( function ( studentData ) {
          return studentData.data;
        } )
    };

    this.getStudent = function () {
      return $http( {
        method: 'GET',
        url: '/student?_id=' + id
      } );
    };


    this.createStudents = function () {
      return $http( {
          method: 'POST',
          url: '/api/students',
          data: student
        } )
        .then( function ( studentData ) {
          return studentData.data;
        } )
    };


    this.editStudents = function () {
      return $http( {
          method: 'PUT',
          url: '/api/students' + id,
          data: student
        } )
        .then( function ( studentData ) {
          return studentData.data;
        } )
    };


    this.deleteStudents = function () {
      return $http( {
          method: 'DELETE',
          url: '/api/students' + id
        } )
        .then( function ( studentData ) {
          return studentData.data;
        } )
    };




    // /**######## Categories ########*/
    // this.getCategories = function () {
    //   return $http( {
    //       method: "GET",
    //       url: '/api/categories'
    //     } )
    //     .then( function ( categoryData ) {
    //       return categoryData.data;
    //     } )
    // };


  } );
