

//You can also log multiple values at once like this


//Array of enemy names
//var enemy.names = ["Roborto", "Amy Android", "Robo Trumble"];
//function to generate random numbers for health and attack
var randomNumber = function(min, max){
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value
};



//Logs to show arrays in console
/*console.log(enemy.names);
console.log(enemy.names[0]);
console.log(enemy.names[1]);
console.log(enemy.names[2]);
console.log(enemy.names.length);*/

// Game States
// "WIN" - Player robot has defeated all enemy-robots.
//      * Fight all enemy-robots
//      *Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

//Function to Fight or Skip / reduce null values
var fightOrSkip = function(){
  //ask player if they'd like to fight or skip using fightOrSkip() Function
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

  //Enter condtional recursive function call here!
  if(!promptFight){
    window.alert("You need to provide a valid answer! Try Again.");
    return fightOrSkip();
  }

  //if player picks "skip" confirm and then stop the loop
  promptFight = promptFight.toLowerCase();
  if(promptFight === "skip"){
    //confirm player wants to skip
    var confirmSkip = window.prompt("Are you sure you'd like to quit?");

    //if yes(true), leave fight
    if(confirmSkip){
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      //subtract playerMoney for skipping
      playerInfo.money = playerInfo.money - 10;
      
      // return true if player wants to skip
      return true;
    }
  }
      return false;
}
//FIGHT FUNCTION
var fight = function(enemy) {
    // reset player stats
    playerInfo.health = 100;
    playerInfo.attack = 10;
    playerInfo.money = 10;
    
    
    while (playerInfo.health > 0 && enemy.health > 0) {
      // ask player if they'd like to fight or run
     if (fightOrSkip()){
       //if true, leave fight by breaking loop
       break;
     }
    
  
      // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
      //generate random damage value based on player's attack power
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
      );
  
      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');
  
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
      }
  
      // Add random value to enemy attack damage
      var damage = randomNumber(enemy.attack - 3, enemy.attack);

      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
      );
  
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
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
//Function to set name
var getPlayerName = function(){
  var name = "";

  //************************
  // ADD THE LOOP HERE WITH PROMPT AND CONDITION
  while(name === "" || name === null){
    name = prompt("What is your robot's name?")
  }
  
  console.log("Your robot's name is " + name);
  return name;
};
//Player Object
var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function(){
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHeath: function(){
    if(this.money >= 7){
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    }
  },
  upgradeAttack: function(){
    if(this.money >= 7){
      window.prompt("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    }
    else{
      window.alert("You have insufficient funds!")
    }
    }
 };
 //Enemy Object Array
 var enemyInfo =[
 {
   name: "Roborto",
   attack: randomNumber(10, 14)
 },
 {
   name: "Amy Android",
   attack: randomNumber(10, 14)
 },
 {
   name: "Robo Trumble",
   attack: randomNumber(10, 14)
 }
 ];
        
 console.log(playerInfo.name, playerInfo.attack, playerInfo.health);
//For Loop
var startGame = function(){
  //Reset player stats
  playerInfo.reset();
for(var i = 0; i < enemyInfo.length; i++){
    if(playerInfo.health > 0){
        // let player know what round they're in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
    
    //pick new enemy to fight based on the index of the enemy.names array
    var pickedEnemyObjectsInfo = enemyInfo[i];
    //reset enemy.health before starting new fight
      pickedEnemyObjectsInfo.health = randomNumber(40,60);
    // use debugger to pause script from running and check what's going on at that moment in the code
    
    // pass the pickedenemy.name variables value into the fight function, where it will assume value of the enemy.name parameter
    fight(pickedEnemyObjectsInfo);
    if(playerInfo.health > 0 && i < enemyInfo.length - 1){
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
  if(playerInfo.health > 0){
    window.alert("Great job, youve survived the game! You now have a score of " + playerInfo.money + ".");
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
     playerInfo.refillHealth();
      break;
    //If they increase attack
    case "UPGRADE": //New Case
    case "upgrade":
     playerInfo.upgradeAttack();
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