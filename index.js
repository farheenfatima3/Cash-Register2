const cashGiven=document.querySelector("#cash-given")
const billamount=document.querySelector("#bill")
const message=document.querySelector("#error")
const displayOutput=document.querySelectorAll(".totalNotes")
const checkButton=document.querySelector("#check-button")


let allNotes=[2000,1000,500,200,100,50,10,5,1]

checkButton.addEventListener("click", function validator(){
    message.style.display="none"
    
    if(billamount.value>0){
        const difference=cashGiven.value-billamount.value
// checks if given cash is greater than bill or not
    if(difference>=0){
        // if cash given by customer is greater perform newFun function
        newFun(difference)

}else{
    showMessage("Did not gave enough bill amount")
}
    }else{
        showMessage("Invalid bill")
    }
})

function newFun(difference){
//    Math.trunc removes decimal points so we we can know
//  how many times cash to be returned is divided by each note and add that 
// number in ith place of empty tags of td using innerText
    for(let i=0;i<allNotes.length;i++){
        let amountToReturn=Math.trunc(difference/allNotes[i])
        difference%=allNotes[i]
        displayOutput[i].innerText=amountToReturn
        
     }
    
}
// Object.style.display is used to hide or show things where block is to show hidden message 
// and none is don't show any message
function showMessage(msg){
    message.style.display="block"
    message.innerText=msg
}
