

//Then,this inputArr will basically take all the things from index 2 onwards(index 2 included).
let inputArr=process.argv.slice(2);
let fs=require("fs"); //a function called sfexistssync will let you know if a path is valid or not.
let path=require("path"); // PATH JOIN, to create folders.


let command=inputArr[0];

switch(command){
    case "tree":
        treeFn(inputArr[1]);
        break;
    case "organize":
        organizeFn(inputArr[1]);
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
    //  1. input : directory path given.
    if(dirPath==undefined){
        console.log("kindly enter the path.");
        return;
    }else{
        let doesExist=fs.existsSync(dirPath); // WILL CHECK IF THIS PARTICULAR DIRECTORY PATH IS VALID OR NOT.
        if(doesExist){//START ORGANIZING.
                    //  2. create a directory called organized_files inside that directory path.
            let destPath =  path.join(dirPath,"organized_files"); //create this organized files directory here.
             fs.mkdirSync(destPath);

        }else{
            console.log("Kindly enter a correct path");
            return;
        }
    }


    //3. check all files to check which category they belong to of the ones present in that path.
    //4. copy/cut files to that organized directory inside of any of that category folder.
    //
}

function helpFn(){
    console.log(`List of all the commands:
    node main.js tree "directorypath"
    node main.js organie "directorypath"
    node main.js help`);
}

