// 'use strict'
// // Initialize Game
// var game = new Phaser.Game();

// // Create States
// var MainMenu = function(game) {};
// var Play = function(game) {};

//     // Constants
//     var hexWidth = 100;  //80;
//     var hexHeight = 100; //70;
//     var gridWidth = 10;
//     var gridHeight = 12;
//     var columns = [Math.ceil(gridHeight/2),Math.floor(gridWidth/2)];
//     var spaceX = hexWidth/4*3;
//     var spaceY = hexHeight;

// MainMenu.prototype = {
//     preload: function(){
//         // Do Nothing
//     },
//     create: function(){
//         // Move to Play
//         console.log("Main Menu");
//         game.state.start("Play");
//     },
//     update: function(){
//         //Do Nothing
//     },
// }
// var hexGroup;
// Play.prototype = {
//     preload: function(){
//         var hexImage = game.load.image('hexagon','assets/img/Hex.png');
//     },
//     create: function(){
//         hexGroup = game.add.group();
//         game.stage.backgroundColor = '#facade';
//         for(var i = 0; i < gridWidth/2; ++i){
//             for(var j = 0; j < gridHeight; ++j){
//                 if(gridWidth%2==0 || i+1<gridWidth/2 || j%2==0){
//                     var xPos = hexWidth*i*1.5+(hexWidth/4*3)*(j%2);
//                     var yPos = hexHeight*j/2;
//                     var hexagon = game.add.sprite(xPos,yPos,'hexagon');
//                     //hexagon.scale.setTo(.5);
//                     hexGroup.add(hexagon);
//                 }
//             }
//         }
//         hexGroup.y = (game.height-hexHeight*Math.ceil(gridHeight/2))/2;
//         if(gridHeight%2 == 0){
//             hexGroup.y -= hexHeight/4;
//         }
//         if(gridWidth%2 == 0){
//             hexGroup.x -= hexWidth/8;
//         }


//     },
//     update: function(){

//     },
// }
// game.state.add("MainMenu", MainMenu);
// game.state.add("Play",Play);
// game.state.start("MainMenu");