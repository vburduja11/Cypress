/**
 * 
 */

function waitingForSomeServerToAct() {
    let dataNeeded;
    setTimeout(() => {
        console.log("BackEnd Information Have Just Been Received");
        dataNeeded = "Cydeo";
        console.log(dataNeeded);
    }, 5000);
    return dataNeeded;
}

function functionThatNeedsBackEndData(info) {
    console.log("I need to use BackEnd Data "+info);
    
}

let data = waitingForSomeServerToAct();//calling server conection, 
//geting the data and storring in to a variable

functionThatNeedsBackEndData(data);




