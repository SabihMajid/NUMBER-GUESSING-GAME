import inquirer from "inquirer";

const SystemGenreteNumber = Math.floor(Math.random()*10);

const {UserGuess} : {UserGuess:number} =await inquirer.prompt({
    type:"number",
    name:"UserGuess",
    message:("guess the number between 1to10")
});


if (UserGuess === SystemGenreteNumber){
    console.log("yuo are winner")
} else {
    console.log(`better luck next time the correct number is ${SystemGenreteNumber}`)
}


