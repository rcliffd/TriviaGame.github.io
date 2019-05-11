var anwsers={ 
    question-1:true, question-2:true, question-3:true, question-4:false, question-5:true


}
var timer = setInterval(function() {
  let timer = newTime().getTime(); 
  let timer = endTime - now; 
  

}, 1000);
if (t >= 0) {

 let secs = Math.floor((t % (1000 * 60)) / 1000);

}


//var q = questions[questionIndex];

// question.innerHTML = "</p>" + q.question + "<p>";
// question.innerHTML = "</p>" + q.question + "<p>";
// question.innerHTML = "</p>" + q.question + "<p>";
// question.innerHTML = "</p>" + q.question + "<p>";
// question.innerHTML = "</p>" + q.question + "<p>";

// choiceA.innerHTML = q.choiceTrue;

 document.getElementById("timer-secs").innerHTML =
  ("0" + secs).slice(-10) + "<span class='label'>SEC(S)</span>";

$(".Button").on("click", function() {
  console.log($(this).val());
});


