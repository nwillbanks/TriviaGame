$(function() {
const questions = [
	{
		question: "Which type of coffee contains the most caffeine?",
		answers: [
			{
				name: "Light Roast",
				value: true
			},
			{
				name: "Medium Roast",
				value: false
			},
			{
				name: "Dark Roast",
				value: false
			}
		],
	},
	{

		question: "What animal is responsible for the discovery of coffee?",
		answers: [
			{
				name: "camel",
				value: false
			},
			{
				name: "llama",
				value: false
			},
			{
				name: "goat",
				value: true
			},
			{
				name: "cow",
				value: false
			}
		],
	},
	{

		question: "Where was the very first coffee house located?",
		answers: [
			{
				name: "Paris",
				value: false
			},
			{
				name: "England",
				value: false
			},
			{
				name: "Seattle",
				value: false
			},
			{
				name: "Italy",
				value: true
			}
		],
	},
	{

		question: "What country has the most coffee consumed per capita?",
		answers: [
			{
				name: "Finland",
				value: true
			},
			{
				name: "Norway",
				value: false
			},
			{
				name: "Iceland",
				value: false
			},
			{
				name: "Denmark",
				value: false
			}
		],
	},
	{

		question: "What is the name of the largest coffee chain in the world?",
		answers: [
			{
				name: "Starbucks",
				value: false
			},
			{
				name: "Gloria Jeans",
				value: false
			},
			{
				name: "Tim Hortons",
				value: true
			},
			{
				name: "Tully's",
				value: false
			}
		],
	},
	{

		question: "How long do the effects of caffeine last?",
		answers: [
			{
				name: "1-2 hours",
				value: false
			},
			{
				name: "3-4 hours",
				value: true
			},
			{
				name: "5-6 hours",
				value: false
			},
			{
				name: "7-8 hours",
				value: false
			}
		],
	},
	{

		question: "Caffeine is considered a ...",
		answers: [
			{
				name: "barbituate",
				value: false
			},
			{
				name: "hallucinogen",
				value: false
			},
			{
				name: "tranquilizer",
				value: false
			},
			{
				name: "stimulant",
				value: true
			}
		],
	}
];

function scoreResults() {
	
}
//set up on click from start screen to start trivia; set up timer & questions
$(".startTrivia").click(function() {
	console.log("yep!")
	let seconds = 30;
  $("#timeRemaining").text(seconds);
  $("#question-container").html("");
  for (let i = 0; i < questions.length; i++) {
    let question = questions[i];
    let html = "<h2>" + question.question + "</h2>";
    for (let j = 0; j < question.answers.length; j++) {
      let answer = question.answers[j];
      html += '<br><label><input type="radio" name="question-' + i + '" data-correct=' + answer.value + '>' + answer.name  + '</label>';
    }
    $("#question-container").append('<div class="row">' + html + '</div>');
  }
//hide start screen & show question screen
  $(".boxes").hide();
  $("#questions").show();
//count down from 30 seconds
  let interval = setInterval(function() {
	  console.log('interval');
  	seconds--;
    console.log(seconds);
    $("#timeRemaining").text(seconds);
  }, 1000);
//results screen when timer hits 0
	setTimeout(function() {
  	clearInterval(interval);
  	let correct = 0;
    let wrong = 0;
    let total = 0;
  	$("#question-container div.row").each(function() {
    	total++;
      let input = $(this).find('input:checked');
      if (input.length) {
      	if ($(input).data('correct')) {
        	correct++;
        } else {
        	wrong++;
        }
      }
    });
    
    $("#total").text(total);
    $("#correct").text(correct);
    $("#wrong").text(wrong);
  
  	$(".boxes").hide();
    $("#results").show();
  }, seconds * 1000 + 100); // add on 100ms so that we show 0 first
});
});




