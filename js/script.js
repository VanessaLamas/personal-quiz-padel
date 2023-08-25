let counter = 0;
let points = [];

class gameMain {
  constructor(title, background, options) {
    this.title = title;
    this.background = background;
    this.result = document.getElementById('result');
    this.options = options;
    this.buttonAction();
  }

  // increment adding the function incrementPoints
  incrementCounter() {
    this.incrementPoints();
    counter++;
    if (counter === gameStory.length) {
      this.showResult();
    } else {
      this.changeContent();
    }
  };
  changeContent() {
    this.title = gameStory[counter].title;
    this.background = gameStory[counter].background;
    this.options = gameStory[counter].options;
    let title = document.querySelector("#game-container h2");
    title.innerHTML = gameStory[counter].title;
    let background = document.querySelector(".background")
    background.style.backgroundImage = gameStory[counter].background;
    let options = document.querySelector(".options");
    options.innerHTML = gameStory[counter].options.map(item => `<input type="radio" id="item" name="itemOption" value=${item.keyword}> <label for="item">  ${item.option} </label>`).join('');
  }

  // add the button action:
  buttonAction() {
    const button = document.querySelector("#button");
    button.addEventListener("click", () => {
      this.incrementCounter()
    });
  }

  incrementPoints() {
    const selectedOption = document.querySelector('input[name="itemOption"]:checked');
    if (selectedOption) {
      const keyword = selectedOption.value;
      points.push(keyword); // Store the selected keyword
      console.log("Keywords:", keyword);
    } else {
      alert("Please select a choice to continue!");
      throw new Error("Option not selected");
    }
  }


  // show result page and hide the game container and the button:
  showResult() {
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('button').style.display = 'none';
    const selectedKeywords = new Set(points);
    const selectedOptions = {};
    for (const story of gameStory) {
      for (const option of story.options) {
        if (selectedKeywords.has(option.keyword)) {
          selectedOptions[story.title] = option.keyword;
          break; // Once an option is found for the story, move to the next story
        }
      }
    }
    const result1 = selectedOptions[`How is the sensation on your skin today?`] === 'oily';
    const result2 = selectedOptions[`How is the sensation on your skin today?`] === 'dry';

    
   
    
    if (result1 || result2) {
      if (result1) {
        this.result.innerHTML = "Based on your selections, you have oily skin and have chosen a 5-Step Enhanced Routine.";
      } else if (result2) {
        this.result.innerHTML = "Based on your selections, you have dry skin and have chosen a 5-Step Enhanced Routine.";
      }
    } else {
      this.result.innerHTML = "Sorry, we don't have a specific recommendation based on your answers.";
    }
  }
}

// start without the game container and the game button:
document.getElementById('game-container').style.display = "none";
document.getElementById('button').style.display = 'none';

// Welcome page and start button:
function welcomePage() {
  document.querySelector("#start").addEventListener("click", () => {
    document.getElementById('welcomePage').style.display = "none";
    document.getElementById('game-container').style.display = "inline";
    document.getElementById('button').style.display = 'inline';
    initGame()
  });
}
welcomePage();

// display the game container:
function initGame() {
  const game = new gameMain(gameStory[0].title, gameStory[0].background, gameStory[0].options);
  const container = document.getElementById('game-container');
  container.innerHTML =
    `<div class="background" style="background-image: ${game.background}">
<div class="content-box">
<h2 class="options-question">${game.title}</h2>
<div class="options">${game.options.map(item => `<input type="radio" id="item" name="itemOption" value=${item.keyword}> <label for="item">  ${item.option} </label>`).join('')}</div>
</div>
</div>`;
};
