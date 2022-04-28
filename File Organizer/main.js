

//Then,this inputArr will basically take all the things from index 2 onwards(index 2 included).
let inputArr=process.argv.slice(2);


let command=inputArr[0];

switch(command){
    case "tree":
        treeFn(input[1]);
        break;
    case "organize":
        organizeFn(input[1]);
        break;
    case "help":
        helpFn();
        break;
    default:
        console.log("lease input the right command");
        break;        
}

function treeFn(dirPath){
    console.log("Tree command implemented for the directory : ",dirPath);
}

function organizeFn(dirPath){
    console.log("organize command implemented for : ",dirPath);
}

function helpFn(){
    console.log("help function called");
}

