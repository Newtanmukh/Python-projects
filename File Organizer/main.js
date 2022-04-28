

//Then,this inputArr will basically take all the things from index 2 onwards(index 2 included).
let inputArr=process.argv.slice(2);
let fs=require("fs"); //a function called sfexistssync will let you know if a path is valid or not.
let path=require("path"); // PATH JOIN, to create folders.


let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}


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
    let destPath;
    if(dirPath==undefined){
        console.log("kindly enter the path.");
        return;
    }else{
        let doesExist=fs.existsSync(dirPath); // WILL CHECK IF THIS PARTICULAR DIRECTORY PATH IS VALID OR NOT.
        if(doesExist){//START ORGANIZING.
                    //  2. create a directory called organized_files inside that directory path.
            destPath =  path.join(dirPath,"organized_files"); //create this organized files directory here.
            
            if(fs.existsSync(destPath)==false){
            fs.mkdirSync(destPath);//but if that directory already exists, then it creating that folder again without checking if it already exists, would have given error.

            }


        }else{
            console.log("Kindly enter a correct path");
            return;
        }
    }

    organizeHelper(dirPath,destPath);


    
    
    //
}


function organizeHelper(src,dest){
//3. check all files to check which category they belong to of the ones present in that path.
   let childNames = fs.readdirSync(src) //will give the names of all the files indide this.
   for(let i=0;i<childNames.length;i++)
   {
       let childAddress=path.join(src,childNames[i]);
      let isFile= fs.lstatSync(childAddress).isFile();//checking if it is a file or not.
       if(isFile){
         
          let category=getCategory(childNames[i]);
             console.log(childAddress[i],"belongs to --> ",category);

               //4. copy/cut files to that organized directory inside of any of that category folder.
               sendFile(childAddress,dest,category);


       }

   }


}

function sendFile(srcFile,dest,category){

    let categoryPath = path.join(dest, category);
    if (fs.existsSync(categoryPath) == false) {
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName, "copied to ", category);
}


function getCategory(name){
    let ext = path.extname(name);//get the extension.
    ext = ext.slice(1);//remove the dot
    for (let type in types) { 
        let cTypeArray = types[type];
        for (let i = 0; i < cTypeArray.length; i++) {
            if (ext == cTypeArray[i]) {
                return type;
            }
        }
    }
    return "others";

}




function helpFn(){
    console.log(`List of all the commands:
    node main.js tree "directorypath"
    node main.js organie "directorypath"
    node main.js help`);
}

