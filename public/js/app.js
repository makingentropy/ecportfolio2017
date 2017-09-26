const app = angular.module("AppJS",[]);

app.controller("appjsController", ['$http', function($http){
  const controller = this;
  this.test="portfolio test good";
  this.displayIncludes="";
//////////////////////////////////////// MENU:
  this.menuDisplaysNum=2; //start on flowtracker
  this.arrExamples=['includes/dynamic_example_choicevip.html', 'includes/dynamic_example_elderHelper.html', 'includes/dynamic_example_flowtracker.html', 'includes/dynamic_example_game.html', 'includes/dynamic_example_seedtrader.html'];
  this.menuShowing=this.arrExamples[this.menuDisplaysNum];
  this.menuSelection=(direction)=>{
    var length=controller.arrExamples.length;
    console.log("length: ",length);
    if(direction=="L"){
      controller.menuDisplaysNum--;
      if (controller.menuDisplaysNum<0) {
        controller.menuDisplaysNum=length-1
      }
    }else if(direction=="R"){
      controller.menuDisplaysNum++;
      if (controller.menuDisplaysNum>length-1) {
        controller.menuDisplaysNum=0;
      }
    }
    else{console.log("ERROR in navigating menu direction: ",direction);}
    controller.menuShowing=controller.arrExamples[controller.menuDisplaysNum];
  };
//: END MENU////////////////////////////////////////////////

}]); //end rtController
