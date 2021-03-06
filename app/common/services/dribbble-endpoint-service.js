'use strict';

var ACCESS_TOKEN_PARAM="access_token=2399f6e03f2c03e028113a3ebc765181a0c1f657a5985237331c2366e2c28544";

angular.module('dribbbleService', ['ngResource'])

.factory('Shot', ['$resource',
  function($resource){
    return $resource('https://api.dribbble.com/v1/shots?:access_token&page=:pageNumber',
    	{},
    	{
	      query: {
	      	method:'GET',
	      	params:{access_token:ACCESS_TOKEN_PARAM},
	      	isArray:true
      }
    });
  }
]);