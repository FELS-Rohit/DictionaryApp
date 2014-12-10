angular.module('dictionary.services',['ionic','dictionary.controller'])
.factory('dictService',function(){
	return{
		getMeaning : function($scope,$ionicLoading,x2js,$http){
			
			var wordStr=$scope.word;
			//here will come the cordova exec code
			//alert(wordStr);
			if ( typeof(device) != 'undefined'){
$ionicLoading.show({
		template:'Searching please wait <i class=\'ion-loading-c\'>'
		});			
			cordova.exec(
					function success(data){
					//$scope.definitions=data.DATA;
					$scope.definitions=data.DATA.Definitions;
					$ionicLoading.hide();
				},
				function error(err){
				$ionicLoading.hide();
				alert(err);
				},
				'dictionaryPlugin',
				'define',
				[wordStr]
				);
			}
			else{
							//$ionicLoading.hide();
			$scope.definitions=[{
Dictionary:'test',
			Definition:'GO FOR IT'},
			{
Dictionary:'test',
			Definition:'GO FOR IT'},
			{
Dictionary:'test',
			Definition:'GO FOR IT'},
			{
Dictionary:'test',
			Definition:'GO FOR IT'},
			];
		
				/*
			
		$scope.definitions
		/*		 xmlDoc=x2js.parseXmlString(xmlText);
    
    var jsonObj = x2js.xml2json( xmlDoc );
    console.log(jsonObj.MyOperation.test); */
				}
		}
	}
})