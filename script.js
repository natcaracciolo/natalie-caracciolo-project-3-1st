

// // quiz is going to correspond each answer with a point sytem, then create a result based on how many points the user got.


//create function for the submit button that 
const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", getScore);


//make function that return oblects with all elements in the HTML that match input. also target the 'my quiz sections'

function getScore() {
    const form = document.querySelector("#my-quiz");
    const inputs = form.querySelectorAll("input");

// give every option a value of 0 (starting point)
    let joyDivision = 0;
    let talkingHeads = 0;
    let pointerSisters = 0;
    
    
    let yourType;
    let winningScore = 1;
    

    //match every expression's value to a 'case', which makes the statments run that are associated with the 'case' and statements in the following case. 

    
    Array.prototype.forEach.call(inputs, function(input) {
        if (input.checked) {
        //switch is the expression
            switch (input.value) {
           // case is matched to the expression
                case "joyDivision": joyDivision++; break;
                // this is going to incriment when the value of the expression matches'joy division'
                case "talkingHeads": talkingHeads++; break;
                case "pointerSisters": pointerSisters++; break;
                
                default: 
                $('.quiz-answer').empty()
                $('.quiz-answer').append
            }
        }
    });

    
    largestScore = joyDivision;
    yourType = "Disorder by Joy Division";
    if (joyDivision > largestScore) {
        yourType = "Once In A Lifetime by Talking Heads";
        largestScore = talkingHeads;
    }
    if (pointerSisters > largestScore) {
        yourType = "I'm So Excited by The Pointer Sisters";
        largestScore = pointerSisters;
    }




        $('.quiz-answer').empty()
        $('.quiz-answer').append(`<p>our 80's jam is ${yourType}!</p>`)
  
    

}






    