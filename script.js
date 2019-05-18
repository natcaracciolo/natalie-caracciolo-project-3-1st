
$(document).ready(function(){

    const submitButton = document.querySelector(".submit-button");

    // $(`#submit-button`)
    const test = $('.submit-button');
    console.log('logging out submit button', submitButton);
    console.log('logging out test', test[0]);
    submitButton.addEventListener("click", getScore);

}) 

    $(".button1").click(function() {
        $('html,body').animate({
            scrollTop: $("form").offset().top},
             'slow');

          

});


function getScore() {
    const form = document.querySelector("#quiz");
    const inputs = form.querySelectorAll("input");


    let joyDivision = 0;
    let talkingHeads = 0;
    let pointerSisters = 0;
    
    
    let yourType;
    let winningScore = 0;
    
    
    Array.prototype.forEach.call(inputs, function(input) {
        if (input.checked) {
      
            switch (input.value) {
           // case is matched to the expression
                case "joyDivision": joyDivision++; break;
                // this is going to incriment when the value of the expression matches'joy division'
                case "talkingHeads": talkingHeads++; break;
                case "pointerSisters": pointerSisters++; break;
                
                default: 
                $('.quiz-answer').empty()
                // $('.quiz-answer').append
            }
        }
    });


    largestScore = joyDivision;
    yourType = "Disorder by Joy Division. You must be super fun at parties...";
    if (talkingHeads > largestScore) {
        yourType = "Once In A Lifetime by Talking Heads. Stay weird!";
        largestScore = talkingHeads;
    }
    if (pointerSisters > largestScore) {
        yourType = "I'm So Excited by The Pointer Sisters. Show me one person that doesnt like this song.";
        largestScore = pointerSisters;
    }
  

        $('.quiz-answer').empty()
        $('.quiz-answer').append(`<p>Your 80's jam is: ${yourType}</p>`)
    

}






    