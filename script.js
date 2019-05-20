
$(document).ready(function(){

    const submitButton = document.querySelector(".submit-button");
    const test = $('.submit-button');
    console.log('logging out submit button', submitButton);
    console.log('logging out test', test[0]);
    submitButton.addEventListener("click", getScore);

}) 


function createScroller(clickElement, target) {
    $(clickElement).click(function() {
        $('html,body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
}

    createScroller('.button-1', 'form')
    createScroller('.question-1', '.question-2')
    createScroller('.question-2', '.question-3')
    createScroller('.submit-button', '.results')

function getScore() {
    const form = document.querySelector("#quiz");
    const inputs = form.querySelectorAll("input");


    let joyDivision = 0;
    let talkingHeads = 0;
    let newOrder = 0;
    let saltPeppa = 0;
    
    
    let yourType;
    let winningScore = 0;
    
    console.log(inputs)
    Array.prototype.forEach.call(inputs, function(input) {
       
    if (input.checked) {
      
        switch (input.value) {
            case "joyDivision": joyDivision++; break;
            case "talkingHeads": talkingHeads++; break;
            case "newOrder": newOrder++; break;
            case "saltPeppa": saltPeppa++; break;
            
                
            default: 
            $('.quiz-answer').empty()
                
        }
    }
});

    let largestScore = 0;
        yourType = "Nothing - because you need to select an option from each question to get your song!";

        if (joyDivision > largestScore) {
            yourType = "Joy Division, 'Disorder'. You must be super fun at parties....";
        }
        if (talkingHeads > largestScore) {
            yourType = "Talking Heads, 'Once In A Lifetime'. Stay weird!";
            largestScore = talkingHeads;
        }
        if (newOrder > largestScore) {
            yourType = "New Order, 'Bizarre Love Triangle'. Show me one person that doesn't like this song.";
            largestScore = newOrder;
        }
        if (saltPeppa > largestScore) {
             yourType = "Salt-N-Peppa, 'Push It'. Congratulations - You are super fly.";
            largestScore = saltPeppa;
        }

      
   

    $('.quiz-answer').empty()
    $('.quiz-answer').append(`<p>Your 80's jam is: ${yourType}</p>`)
    

       
    
}
