//Player Name
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

//Array of enemy names
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//Logs to show arrays in console
/*console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);*/

// Game States
// "WIN" - Player robot has defeated all enemy-robots.
//      * Fight all enemy-robots
//      *Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

//FIGHT FUNCTION
var fight = function(enemyName) {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    
    while (playerHealth > 0 && enemyHealth > 0) {
      // ask player if they'd like to fight or run
      var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 10;
          console.log("playerMoney", playerMoney)
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerMoney = playerMoney + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );
  
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
    }
  };
  // STATEMENTS COMMENTED OUT OF ORIGINAL FIGHT FUNCTION TO CONDENSE CODE

   //if no(false), ask the question again by running fight() again
  /* else{
       fight();
   }
   

    else{
       window.alert("You need to choose a valid option. Try again!");
   } */

        

//For Loop
var startGame = function(){
  //debugger;
for(var i = 0; i < enemyNames.length; i++){
    if(playerHealth > 0){
        // let player know what round they're in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    
    //pick new enemy to fight based on the index of the enemyNames array
    var pickEnemyName = enemyNames[i];
    //reset enemyHealth before starting new fight
    enemyHealth = 50;
    // use debugger to pause script from running and check what's going on at that moment in the code
    
    // pass the pickedEnemyName variables value into the fight function, where it will assume value of the enemyName parameter
    fight(pickEnemyName);
    if(playerHealth > 0 && i < enemyNames.length - 1){
      var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
      //if yes, take them to the store() function
      if(storeConfirm){
        shop();
      }
    }
}
else{
    window.alert("You have lost your robot in battle! Game Over!");
    break;
    }
}
  endGame();
};
// To end the game
var endGame = function(){
  // if player is still alive, player wins!
  if(playerHealth > 0){
    window.alert("Great job, youve survived the game! You now have a score of " + playerMoney + ".");
  }
  else{
    window.alert("You've lost your robot in battle.");
  }
  //ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");
  if(playAgainConfirm){
    //restart the game
    startGame();
  }
  else{
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};
//Shop Function (GLOBAL)
var shop = function(){
  //ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  //Use SWITCH to carry out action in shop prompt
  switch(shopOptionPrompt){
    //If they refill health && Must declare both innstances with SWITCH
    case "REFILL": //New Case
    case "refill":
      if(playerMoney >= 7){
      window.alert("Refilling " + playerName +"'s health by 20 for 7 dollars.");

      //Increase health and decrease money
      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
      }
      else{
        window.alert("You have insufficient funds!")
      }
      break;
    //If they increase attack
    case "UPGRADE": //New Case
    case "upgrade":
      if(playerMoney >= 7){
      window.alert("Upgrading " + playerName + "'s attack by 6 for 7 dollars");
      //Increase health and decrease money
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
      }
      else{
        window.alert("You have insufficient funds!")
      }
      break;
    //If they choose to leave
    case "LEAVE": //New Case
    case "leave":
      window.alert("Leaving the store.")

      //Do Nothting so fuinction will end
      break;
      default:
        window.alert("You did not enter a valid option. Try again.");

     //call shop() again to force player to pick a valid option
     shop();
     break;
    
  }
};
//Executes game when page loads (PLAY AGAIN)
startGame();







//fight();