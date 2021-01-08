const input = require("readline-sync");
const chalk = require('chalk');
const log = console.log;
const green = chalk.greenBright.bold.bgBlackBright;
const red = chalk.redBright.bgBlackBright.bold;
const white = chalk.whiteBright.bgBlackBright.bold;
var score = 0;
var top=[{
  name:green("DEVELOPER"),
  score:green("4"),
}];

log("               "+green.underline("WELCOME TO QUIZ")+"            \n");

var userName = input.question(red("ENTER YOUR NAME : "));

log("\n"+green.underline("WELCOME! "+userName.toUpperCase()));

log("\n"+red("LET'S BEGIN ....."));

//----FUNCTION-----
function play(question,answer){
    log("\n"+question);
    var creater=['BJARNE STROUSTRUP','GUIDO VAN ROSSUM','BRENDEN EICH','DENNIS RITCHIE'];
    var index=input.keyInSelect(creater);
    if(creater[index]===answer){
      log("\n"+green("CORRECT"));
      log("\n"+"---------------------------------------------------------------");
      score=score+1;
    }
    else{
      log("\n"+red("WRONG"));
    }
}

//----ARRAY+OBJECTS-----
var quelist=[{
  question:white("1.WHO CREATED THE PYTHON PROGRAMMING LANGUAGE ? "),
  answer:"GUIDO VAN ROSSUM",
},
{
  question:white("2.WHO CREATED THE c++ PROGRAMMING LANGUAGE ? "),
  answer:"BJARNE STROUSTRUP",
},{
  question:white("3.WHO CREATED THE JAVASCRIPT PROGRAMMING LANGUAGE ? "),
  answer:"BRENDEN EICH",
},{
  question:white("4.WHO CREATED THE C  PROGRAMMING LANGUAGE ? "),
  answer:"DENNIS RITCHIE",
}
];

//----LOOPS----
for(i=0;i<quelist.length;i++){
  var current=quelist[i];
  play(current.question,current.answer);
}

log("\n"+green("YOUR SCORE : ",score));
log("\n"+white.underline("TOP SCORE : "));

//----TOP -----
for(var i=0;i<top.length;i++){
  var c=top[i];
  log("\nNAME: "+c.name);
  log("\nSCORE: "+c.score);
}

log("\n"+"                 "+green.underline("THANKS FOR PLAYING !!")+"                         ");

