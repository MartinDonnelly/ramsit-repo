// ==UserScript==
//
// @name         hideCreateCommunityButton
// @version      1.0
// @description  Hide the Create Community button except for a selected group of users
//
// @author       Wannes Rams
//
// ==/UserScript==

if(typeof(dojo) != "undefined") {
	require(["dojo/domReady!"], function(){
		var currentUserEmail = lconnCurrentUser.email;
		console.log(currentUserEmail);
		if(currentUserEmail == "wannes@ramsit.com" || currentUserEmail == "aria@shinythingzz.com" ){
			console.log("Showing Create Community button");
		} else{
			dojo.query("#createPlaceButton").style("display","none");
			console.log("Showing Create Community button");
		}
		});
}
