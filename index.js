const rl = require('readline');

const interface = rl.createInterface({ 
    input: process.stdin,
    output: process.stdout
})
//function to create an interface
interface.question('input student marks', (input)=>{
    const marks = input;
    inPutStudentMarks(marks);
    interface.close();
});
   
//function that performs the grading
function inPutStudentMarks(marks){
    if (marks >79){
        
        console.log("A")
    }
    else if(marks >=60 & marks <=79){
        console.log("B")
    }
    else if(marks >=49 & marks  <=59){
        console.log("C")
    }
    else if(marks >=40 & marks <=49){
        console.log("D")
    }
    else if(marks <40){
        console.log("E")
    }
}


