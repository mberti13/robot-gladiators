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
    // Repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0){
        //FIGHT FUNCTION code block
        
        // Alert players that they are starting the round
   //window.alert("Welcome to Robot Gladiators!");

   var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
   //If a player chooses to fight, then fight
   if(promptFight === "fight" || promptFight === "FIGHT"){
   
       //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
   enemyHealth = enemyHealth - playerAttack;
   
   // Log a resulting message to the console so we know that it worked.
   console.log(
       playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
       );
   
   //Check enemy's health
   if(enemyHealth <= 0){
       window.alert(enemyName + " has died!");
   }
   else{
       window.alert(enemyName + " still has " + enemyHealth + " health left.");
   }
   // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
   playerHealth = playerHealth - enemyAttack;
   
   // Log a resulting message to the console so we know that it worked.
   console.log(
       enemyName + " attacked " + playerName + ". " + playerName +" now has " + playerHealth + " health remaining."
   );
   // Check player's health
   if(playerHealth <= 0){
       window.alert(playerName + " has died!");
   }
   else{
       window.alert(playerName + " still has " + playerHealth + " health left!");
   }
   //if player chooses to SKIP
}else if(promptFight === "skip" || promptFight === "SKIP"){
   //Confirm player wants to skip
   var confirmSkip = window.confirm("Are you sure you'd like to quit?");

   //if yes(true), leave fight
   if(confirmSkip){
       window.alert(playerName + " has decided to skip this fight. Goodbye!");
       //subtract money from playerMoney for skipping
       playerMoney = playerMoney - 2;
   }
   //if no(false), ask the question again by running fight() again
   else{
       fight();
   }
   

   } else{
       window.alert("You need to choose a valid option. Try again!");
   }
}
        
}
//For Loop
for(var i = 0; i < enemyNames.length; i++){
    var pickEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickEnemyName);
}






//fight();