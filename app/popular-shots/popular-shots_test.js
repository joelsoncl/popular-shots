'use strict';

describe('myApp module', function() {

	describe('PopularShotsCtrl', function() {
		beforeEach(module('myApp'));

		var $controller;

		beforeEach(inject(function(_$controller_){
	    // The injector unwraps the underscores (_) from around the parameter names when matching
	    $controller = _$controller_;
	  }));

		// ---------------------------------------------------------

	  describe('Testing default scoped variables values.', function() {

	  	it('should check that $scope.shots is null', function() {
	      var $scope = {};
	      var controller = $controller('PopularShotsCtrl', { $scope: $scope });

	      expect($scope.shots).toEqual(null);
	    });

	  	it('should check that $scope.selectedShot is null', function() {
	      var $scope = {};
	      var controller = $controller('PopularShotsCtrl', { $scope: $scope });

	      expect($scope.selectedShot).toEqual(null);
	    });

	    it('should check that $scope.currentPage value is 1', function() {
	      var $scope = {};
	      var controller = $controller('PopularShotsCtrl', { $scope: $scope });

	      expect($scope.currentPage).toEqual(1);
	    });

	    it('should check that $scope.hasPrevLink is false', function() {
	      var $scope = {};
	      var controller = $controller('PopularShotsCtrl', { $scope: $scope });

	      expect($scope.hasPrevLink).toEqual(false);
	    });

	    it('should check that $scope.hasNextLink is false', function() {
	      var $scope = {};
	      var controller = $controller('PopularShotsCtrl', { $scope: $scope });

	      expect($scope.hasNextLink).toEqual(false);
	    });

	  });

		// ---------------------------------------------------------

		describe('Testing the scoped methods.', function() {

			var $httpBackend, $rootScope, createController, authRequestHandler;

			beforeEach(inject(function($injector) {
				// Set up the mock http service responses
				$httpBackend = $injector.get('$httpBackend');
				// backend definition common for all tests
				authRequestHandler = $httpBackend.when('GET', 'https://api.dribbble.com/v1/shots?access_token=2399f6e03f2c03e028113a3ebc765181a0c1f657a5985237331c2366e2c28544&page=1')
					.respond(WEB_SERVICE_RESPONSE_MOCK);

				// Get hold of a scope (i.e. the root scope)
				$rootScope = $injector.get('$rootScope');
				// The $controller service is used to create instances of controllers
				var $controller = $injector.get('$controller');

				createController = function() {
				 return $controller('PopularShotsCtrl', {'$scope' : $rootScope });
				};
		  }));

	  	it('should check that navigateTo method is working', function() {
	      var $scope = {};
	      var controller = $controller('PopularShotsCtrl', { $scope: $scope });

	      $scope.navigateTo(1);
	      $httpBackend.flush();
	      expect($scope.shots.toString()).toEqual(WEB_SERVICE_RESPONSE_MOCK.toString());
	    });

	    it('should check that selectShot method is working', function() {
	      var $scope = {};
	      var controller = $controller('PopularShotsCtrl', { $scope: $scope });

	      $scope.navigateTo(1);
	      $httpBackend.flush();
	      $scope.selectShot($scope.shots[0]);
	      expect($scope.selectedShot.id).toEqual(WEB_SERVICE_RESPONSE_MOCK[0].id);
	    });
    });

	});

});

var WEB_SERVICE_RESPONSE_MOCK = [
  {
    "id": 2132642,
    "title": "Analytics Landing Page",
    "description": "<p>Here is a second version we proposed as an option. The idea was to create something that was less modular and flowed more continuously. </p>\n\n<p>Check out the <a href=\"https://dribbble.com/shots/2132642-Landing-Page-Alt-4/attachments/389035\" rel=\"nofollow\">2x</a> and <a href=\"https://dribbble.com/shots/2132642-Landing-Page-Alt-4/attachments/389036\" rel=\"nofollow\">wireframes</a> here. </p>\n\n<p>Follow us on <a href=\"https://www.behance.net/wearepg\" rel=\"nofollow\">Behance</a> |  <a href=\"http://instagram.com/ponsgroup\" rel=\"nofollow\">Instagram</a> |  <a href=\"https://www.facebook.com/theponsgroup\" rel=\"nofollow\">Facebook</a> | <a href=\"https://dribbble.com/ponscreative\" rel=\"nofollow\">@PG</a></p>",
    "width": 400,
    "height": 300,
    "images": {
      "hidpi": "https://d13yacurqjgara.cloudfront.net/users/2532/screenshots/2132642/landing-page-alt-4.jpg",
      "normal": "https://d13yacurqjgara.cloudfront.net/users/2532/screenshots/2132642/landing-page-alt-4_1x.jpg",
      "teaser": "https://d13yacurqjgara.cloudfront.net/users/2532/screenshots/2132642/landing-page-alt-4_teaser.jpg"
    },
    "views_count": 3501,
    "likes_count": 322,
    "comments_count": 31,
    "attachments_count": 2,
    "rebounds_count": 0,
    "buckets_count": 50,
    "created_at": "2015-07-03T07:07:30Z",
    "updated_at": "2015-07-03T07:11:30Z",
    "html_url": "https://dribbble.com/shots/2132642-Analytics-Landing-Page",
    "attachments_url": "https://api.dribbble.com/v1/shots/2132642/attachments",
    "buckets_url": "https://api.dribbble.com/v1/shots/2132642/buckets",
    "comments_url": "https://api.dribbble.com/v1/shots/2132642/comments",
    "likes_url": "https://api.dribbble.com/v1/shots/2132642/likes",
    "projects_url": "https://api.dribbble.com/v1/shots/2132642/projects",
    "rebounds_url": "https://api.dribbble.com/v1/shots/2132642/rebounds",
    "rebound_source_url": "https://api.dribbble.com/v1/shots/2127494",
    "tags": [
      "chart",
      "clean",
      "design",
      "funnel",
      "home page",
      "ios",
      "landing",
      "landing page",
      "modern",
      "ui",
      "ux",
      "website"
    ],
    "user": {
      "id": 2532,
      "name": "Michael Pons",
      "username": "pons",
      "html_url": "https://dribbble.com/pons",
      "avatar_url": "https://d13yacurqjgara.cloudfront.net/users/2532/avatars/normal/MichaelPons.jpg?1389525825",
      "bio": "Co-Founder &amp; Experience Design Lead <a href=\"/wearepg\">@wearepg</a> \nPassionate about Product Development, Experience Design and  Branding. ",
      "location": "New York City, NY",
      "links": {
        "web": "http://www.wearepg.com"
      },
      "buckets_count": 10,
      "comments_received_count": 644,
      "followers_count": 2540,
      "followings_count": 1005,
      "likes_count": 2360,
      "likes_received_count": 10939,
      "projects_count": 12,
      "rebounds_received_count": 33,
      "shots_count": 155,
      "teams_count": 1,
      "can_upload_shot": true,
      "type": "Player",
      "pro": true,
      "buckets_url": "https://api.dribbble.com/v1/users/2532/buckets",
      "followers_url": "https://api.dribbble.com/v1/users/2532/followers",
      "following_url": "https://api.dribbble.com/v1/users/2532/following",
      "likes_url": "https://api.dribbble.com/v1/users/2532/likes",
      "projects_url": "https://api.dribbble.com/v1/users/2532/projects",
      "shots_url": "https://api.dribbble.com/v1/users/2532/shots",
      "teams_url": "https://api.dribbble.com/v1/users/2532/teams",
      "created_at": "2010-06-03T13:47:41Z",
      "updated_at": "2015-07-03T17:47:36Z"
    },
    "team": null
  },
  {
    "id": 2132481,
    "title": "Early Branding Process",
    "description": "<p>Here's an early look at a new branding project. We are starting to explore other aspects of the brand like color, secondary type and imagery.</p>\n\n<p>We're still tweaking the logo and mark but the rest of this is feeling nice already.</p>\n\n<p>Also, not that this is news to anyone but <a href=\"https://dribbble.com/385539\">@Summer Teal Simpson</a> and <a href=\"https://dribbble.com/16711\">@Bill S Kenney</a> rock. Fist bumps for <a href=\"https://dribbble.com/95862\">@Sam Stratton</a> and <a href=\"https://dribbble.com/7162\">@Joshua Krohn</a> too :)</p>\n\n<p>Can't complete this post without thanking two gentlemen for providing inspiration for type and color. <a href=\"https://dribbble.com/ariweinkle\" rel=\"nofollow\">@ariweinkle</a> and <a href=\"https://twitter.com/sigurarm\" rel=\"nofollow\">@sigurarm</a></p>",
    "width": 400,
    "height": 300,
    "images": {
      "hidpi": "https://d13yacurqjgara.cloudfront.net/users/66340/screenshots/2132481/early-hike.jpg",
      "normal": "https://d13yacurqjgara.cloudfront.net/users/66340/screenshots/2132481/early-hike_1x.jpg",
      "teaser": "https://d13yacurqjgara.cloudfront.net/users/66340/screenshots/2132481/early-hike_teaser.jpg"
    },
    "views_count": 2941,
    "likes_count": 199,
    "comments_count": 9,
    "attachments_count": 0,
    "rebounds_count": 0,
    "buckets_count": 12,
    "created_at": "2015-07-03T01:42:14Z",
    "updated_at": "2015-07-03T01:50:07Z",
    "html_url": "https://dribbble.com/shots/2132481-Early-Branding-Process",
    "attachments_url": "https://api.dribbble.com/v1/shots/2132481/attachments",
    "buckets_url": "https://api.dribbble.com/v1/shots/2132481/buckets",
    "comments_url": "https://api.dribbble.com/v1/shots/2132481/comments",
    "likes_url": "https://api.dribbble.com/v1/shots/2132481/likes",
    "projects_url": "https://api.dribbble.com/v1/shots/2132481/projects",
    "rebounds_url": "https://api.dribbble.com/v1/shots/2132481/rebounds",
    "rebound_source_url": "https://api.dribbble.com/v1/shots/2123685",
    "tags": [
      "brand",
      "branding",
      "focus lab",
      "layout",
      "logo",
      "typography"
    ],
    "user": {
      "id": 66340,
      "name": "Alex Sailer",
      "username": "alexsailer",
      "html_url": "https://dribbble.com/alexsailer",
      "avatar_url": "https://d13yacurqjgara.cloudfront.net/users/66340/avatars/normal/aebf47536acaf5baac5d85b1cab81af4.jpg?1433254366",
      "bio": "UI Designer <a href=\"/focuslab\">@focuslab</a>",
      "location": "Alexandria VA",
      "links": {
        "web": "http://alexsailer.com/",
        "twitter": "https://twitter.com/alexsailer"
      },
      "buckets_count": 9,
      "comments_received_count": 310,
      "followers_count": 1207,
      "followings_count": 850,
      "likes_count": 1939,
      "likes_received_count": 6140,
      "projects_count": 9,
      "rebounds_received_count": 4,
      "shots_count": 66,
      "teams_count": 1,
      "can_upload_shot": true,
      "type": "Player",
      "pro": true,
      "buckets_url": "https://api.dribbble.com/v1/users/66340/buckets",
      "followers_url": "https://api.dribbble.com/v1/users/66340/followers",
      "following_url": "https://api.dribbble.com/v1/users/66340/following",
      "likes_url": "https://api.dribbble.com/v1/users/66340/likes",
      "projects_url": "https://api.dribbble.com/v1/users/66340/projects",
      "shots_url": "https://api.dribbble.com/v1/users/66340/shots",
      "teams_url": "https://api.dribbble.com/v1/users/66340/teams",
      "created_at": "2011-10-05T13:53:41Z",
      "updated_at": "2015-07-03T15:41:55Z"
    },
    "team": {
      "id": 414899,
      "name": "Focus Lab",
      "username": "focuslab",
      "html_url": "https://dribbble.com/focuslab",
      "avatar_url": "https://d13yacurqjgara.cloudfront.net/users/414899/avatars/normal/c9364836c041ca20abd81fba2e52029f.png?1413484950",
      "bio": "Thinkers / Designers / Developers / Doers",
      "location": "Savannah, GA",
      "links": {
        "web": "http://focuslabllc.com",
        "twitter": "https://twitter.com/focuslabllc"
      },
      "buckets_count": 0,
      "comments_received_count": 0,
      "followers_count": 18936,
      "followings_count": 18,
      "likes_count": 298,
      "likes_received_count": 0,
      "projects_count": 0,
      "rebounds_received_count": 0,
      "shots_count": 884,
      "can_upload_shot": true,
      "type": "Team",
      "pro": false,
      "buckets_url": "https://api.dribbble.com/v1/users/414899/buckets",
      "followers_url": "https://api.dribbble.com/v1/users/414899/followers",
      "following_url": "https://api.dribbble.com/v1/users/414899/following",
      "likes_url": "https://api.dribbble.com/v1/users/414899/likes",
      "projects_url": "https://api.dribbble.com/v1/users/414899/projects",
      "shots_url": "https://api.dribbble.com/v1/users/414899/shots",
      "created_at": "2013-10-04T17:52:15Z",
      "updated_at": "2015-07-03T01:50:07Z",
      "members_count": 10,
      "members_url": "https://api.dribbble.com/v1/teams/414899/members",
      "team_shots_url": "https://api.dribbble.com/v1/teams/414899/shots"
    }
  }
];