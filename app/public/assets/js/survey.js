$(document).ready(function() {
  const subjects = [
    "aardvarks",
    "pizza",
    "handlebars",
    "Sriracha",
    "folk music",
    "Jimmy Johns",
    "sushi",
    "Noah King",
    "cats",
    "hamburgers"
  ];

  var questionNum = 0; //counter to make each question a unique so radio can be used properly

  subjects.forEach(subject => {
    questionNum++;
    var valueNum = 1;
    $("#questionaire").append(`
            <div>How do you feel about ${subject}?</div>
                <br>
                <div class="form-group">
                <label class="radio-inline">
                    <input type="radio" name="optradio${questionNum}" value = ${valueNum} checked/>Bleh
                </label>
                <label class="radio-inline">
                    <input type="radio" name="optradio${questionNum}" value = ${valueNum +
      1}  />Meh
                </label>
                <label class="radio-inline">
                    <input type="radio" name="optradio${questionNum}" value = ${valueNum +
      2} />They're okay, I guess
                </label>
                <label class="radio-inline">
                    <input type="radio" name="optradio${questionNum}" value = ${valueNum +
      3}   />Sure, I like 'em
                </label>
                <label class="radio-inline">
                    <input type="radio" name="optradio${questionNum}" value = ${valueNum +
      4}  />Love 'em!
                </label>
            </div>
        `);
  });

  $("#submit").on("click", function(event) {
    event.preventDefault();

    var userScore = [];

    for (let i = 1; i < subjects.length; i++) {
      var userAnswer = $("input[name='optradio" + [i] + "']:checked").val();
      userScore.push(parseInt(userAnswer));
    }

    var user = {
      name: "user",
      scores: userScore
    };

    $.get("/api/friends", function(data) {
      var friends = data;
      // take an array and total up each element
      function total(sum, element) {
        return (sum += element);
      }

      var userScore = user.scores.reduce(total); // used to get total user's score

      // totals friends score and added to scoreTotal array
      var scoreTotal = [];

      function scoreTotaler() {
        for (let i = 0; i < friends.length; i++) {
          var score = friends[i].scores;
          scoreTotal.push(score.reduce(total));
        }
      }

      //finds the difference between two numbers
      function difference(num1, num2) {
        return Math.abs(num1 - num2);
      }

      // substracts each friends' scores with user score
      var diff = [];

      function diffFunct() {
        scoreTotaler();

        for (let i = 0; i < friends.length; i++) {
          var differ = difference(scoreTotal[i], userScore);
          diff.push(differ);
        }
      }

      // take an array in finds the lowest number
      function lowestNum(arr) {
        return Math.min(...arr); // three periods are needed to use Math.min() with an array
      }

      // take an array in finds the highest number
      function highestNum(arr) {
        return Math.max(...arr);
      }

      // compares the lowest difference between friend and user
      function friendFinder() {
        diffFunct();

        var minimize = lowestNum(diff);

        for (let i = 0; i < friends.length - 1; i++) {
          if (diff[i] === minimize) {
            var findDiv = $("<div id='findDiv'>");
            var image = friends[i].photo;
            var name = friends[i].name;

            var addName = $(`<p> Meet your new best friend! ${name}</p>`);
            var addImage = $(`<img src = '${image}'>`);

            findDiv.append(addName);
            findDiv.append(addImage);

            $(".modal-body").prepend(findDiv);
          }
        }
      }

      // compares the largest difference between friend and user
      function foeFinder() {
        diffFunct();

        var maximum = highestNum(diff);

        for (let i = 0; i < friends.length - 1; i++) {
          if (diff[i] === maximum) {
            var findDiv = $("<div id='findDiv'>");
            var image = friends[i].photo;
            var name = friends[i].name;

            var addName = $(`<p> Meet your new best friend! ${name}</p>`);
            var addImage = $(`<img src = '${image}'>`);

            findDiv.append(addName);
            findDiv.append(addImage);

            $(".modal-body").prepend(findDiv);
          }
        }
      }

      friendFinder();
      foeFinder();
      $.post("/api/friends", user, function(data) {
        if (data) {
          console.log("posted:", user);
        } else {
          console.log("error");
        }
      });
    });
  });

  // triggers modal
  $("#friendModal").on("shown.bs.modal", function() {
    $("#submit").trigger("focus");
  });
});
