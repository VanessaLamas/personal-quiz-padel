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
    options.innerHTML = gameStory[counter].options.map(item =>
      `<div class="option-container">
      <label class="container" for="item">
  <input type="radio" id="item" name="itemOption" 
  value=${item.keyword}>
  <span>${item.option}</span>
</label>
    </div>`).join('');
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

    const result1 = selectedOptions[`What percentage of importance do you place on having control of the racket to match your playing style?`] === '6' && selectedOptions[`How important is feeling power in your paddle swings to you?`] === '10' && selectedOptions[`When it comes to paddle racket shape, what's your go-to?`] === 'round';
    const result2 = selectedOptions[`What percentage of importance do you place on having control of the racket to match your playing style?`] === '6' && selectedOptions[`How important is feeling power in your paddle swings to you?`] === '5' && selectedOptions[`When it comes to paddle racket shape, what's your go-to?`] === 'circle';
    const result3 = selectedOptions[`What percentage of importance do you place on having control of the racket to match your playing style?`] === '6' && selectedOptions[`How important is feeling power in your paddle swings to you?`] === '5' && selectedOptions[`When it comes to paddle racket shape, what's your go-to?`] === 'round';
    const result5 = selectedOptions[`What percentage of importance do you place on having control of the racket to match your playing style?`] === '6' && selectedOptions[`How important is feeling power in your paddle swings to you?`] === '5' && selectedOptions[`When it comes to paddle racket shape, what's your go-to?`] === 'tear';
     const result6 = selectedOptions[`What percentage of importance do you place on having control of the racket to match your playing style?`] === '6' && selectedOptions[`How important is feeling power in your paddle swings to you?`] === '10' && selectedOptions[`When it comes to paddle racket shape, what's your go-to?`] === 'tear';
    const result7 = selectedOptions[`What percentage of importance do you place on having control of the racket to match your playing style?`] === '9' && selectedOptions[`How important is feeling power in your paddle swings to you?`] === '10' && selectedOptions[`When it comes to paddle racket shape, what's your go-to?`] === 'round';
    const result8 = selectedOptions[`What percentage of importance do you place on having control of the racket to match your playing style?`] === '9' && selectedOptions[`How important is feeling power in your paddle swings to you?`] === '10' && selectedOptions[`When it comes to paddle racket shape, what's your go-to?`] === 'circle';
    const result9 = selectedOptions[`What percentage of importance do you place on having control of the racket to match your playing style?`] === '9' && selectedOptions[`How important is feeling power in your paddle swings to you?`] === '10' && selectedOptions[`When it comes to paddle racket shape, what's your go-to?`] === 'tear';
    const result10 = selectedOptions[`What percentage of importance do you place on having control of the racket to match your playing style?`] === '10' && selectedOptions[`How important is feeling power in your paddle swings to you?`] === '10' && selectedOptions[`When it comes to paddle racket shape, what's your go-to?`] === 'circle';
    const result11 = selectedOptions[`What percentage of importance do you place on having control of the racket to match your playing style?`] === '10' && selectedOptions[`How important is feeling power in your paddle swings to you?`] === '10' && selectedOptions[`When it comes to paddle racket shape, what's your go-to?`] === 'round';
    const result12 = selectedOptions[`What percentage of importance do you place on having control of the racket to match your playing style?`] === '10' && selectedOptions[`How important is feeling power in your paddle swings to you?`] === '10' && selectedOptions[`When it comes to paddle racket shape, what's your go-to?`] === 'tear';

    if (result1
      || result2
      || result3
      || result5
      || result6
      || result7
      || result8
      || result9
      || result10
      || result11
      || result12
    ) {
      if (result1) {
        this.result.innerHTML =
        `
        <h5 class="title-result">Great news! We've found some
        rackets that match your requirements perfectly. 
        Take a look at the available options and 
        find the one that suits you best.</h5>
       <div class="grid-center-container">
        <div class="grid-container">
        <div class="grid-item">
        <a href="https://blackcrownkw.com/products/snake-padel-racket">
        <img class="image-item"
        src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-snake-1.jpg?v=1654533464">
        </a>
        <h5 class="grid-item-title">Snake Padel Racket</h5>
        <h6 class="grid-item-description">Power: 40%<br>Control: 60%</h6>
        </div>
        <div class="grid-item">
        <a href="https://blackcrownkw.com/products/piton-air-plus">
        <img class="image-item"
        src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Piton-Air-Plus-1.jpg?v=1654533073&width=990">
        </a>
        <h5 class="grid-item-title">Piton Air Plus</h5>
        <h6 class="grid-item-description">Power: 40%<br>Control: 60%</h6>
        </div>
        </div>
        </div>
        `;
      } else if (result2) {
        this.result.innerHTML = 
        `
        <h5 class="title-result">Great news! We've found some
        rackets that match your requirements perfectly. 
        Take a look at the available options and 
        find the one that suits you best.</h5>
       <div class="grid-center-container">
        <div class="grid-container">
        <div class="grid-item">
        <a href="https://blackcrownkw.com/products/hurricane-pro">
        <img class="image-item"
        src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Hurricane-Pro-1.jpg?v=1655986525&width=990">
        </a>
        <h5 class="grid-item-title">Hurricane Pro</h5>
        <h6 class="grid-item-description">Power: 60%<br>Control: 40%</h6>
        </div>
        <div class="grid-item">
        <a href="https://blackcrownkw.com/products/piton-10-padel-racket">
        <img class="image-item"
        src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Piton-10-1.jpg?v=1654531330&width=990">
        </a>
        <h5 class="grid-item-title">Piton 10 Padel Racket</h5>
        <h6 class="grid-item-description">Power: 60%<br>Control: 40%</h6>
        </div>
        </div>
        </div>
        `;
      }
      else if (result3) {
        this.result.innerHTML = 
        `
        <h5 class="title-result">Great news! We've found a
        racket that matches your requirements perfectly. </h5>
       <div class="grid-center-container">
        <div class="grid-container">
        <div class="grid-item">
        <a href="https://blackcrownkw.com/products/hurricane-pro-2-0">
        <img class="image-item"
        src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Hurricane-1_7901d1e5-fc2f-4643-9049-ce1b8cfd8ee2.jpg?v=1675936750&width=990">
        </a>
        <h5 class="grid-item-title">Hurricane Pro 2</h5>
        <h6 class="grid-item-description">Power: 60%<br>Control: 40%</h6>
        </div>
        <div class="grid-item">
        <a href="https://blackcrownkw.com/products/piton-11-padel-racket">
        <img class="image-item"
        src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Piton-11-1.jpg?v=1675937668&width=990">
        </a>
        <h5 class="grid-item-title">Piton 11 Padel Racket</h5>
        <h6 class="grid-item-description">Power: 55%<br>Control: 45%</h6>
        </div>
        </div>
        </div>
        `
        ;
      } 
      else if (result5) {
        this.result.innerHTML =  
        `
        <h5 class="title-result">Great news! We've found some
        rackets that match your requirements perfectly. 
        Take a look at the available options and 
        find the one that suits you best.</h5>
       <div class="grid-center-container">
        <div class="grid-container">
        <div class="grid-item">
        <a href="https://blackcrownkw.com/products/special-16k-padel-racket">
        <img class="image-item"
        src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Special-16k-2-1280x1088.jpg?v=1675937253">
        </a>
        <h5 class="grid-item-title">Special 16K Padel Racket</h5>
        <h6 class="grid-item-description">Power: 60%<br>Control: 40%</h6>
        </div>
        <div class="grid-item">
        <a href="https://blackcrownkw.com/products/piton-attack-12k-padel-racket">
        <img class="image-item"
        src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Piton-Attack-12k-1.jpg?v=1654534812&width=990">
        </a>
        <h5 class="grid-item-title">Piton Attack 12K Padel Racket</h5>
        <h6 class="grid-item-description">Power: 60%<br>Control: 40%</h6>
        </div>
        </div>
        </div>
        `;
      }
      else if (result6) {
        this.result.innerHTML =
        `
        <h5 class="title-result">Great news! We've found a
        racket that matches your requirements perfectly. </h5>
       <div class="grid-center-container">
        <div class="grid-container">
        <div class="grid-item">
        <a href="https://blackcrownkw.com/products/special-soft-padel-racket">
        <img class="image-item"
        src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Special-Soft-1-scaled.jpg?v=1675937354&width=990">
        </a>
        <h5 class="grid-item-title">Special Soft Padel Racket</h5>
        <h6 class="grid-item-description">Power: 45%<br>Control: 55%</h6>
        </div>
        </div>
        </div>
        `;
      }
      else if (result7) {
        this.result.innerHTML = 
        `
        <h5 class="title-result">Great news! We've found some
        rackets that match your requirements perfectly. 
        Take a look at the available options and 
        find the one that suits you best.</h5>
       <div class="grid-center-container">
        <div class="grid-container">
        <div class="grid-item">
        <a href="https://blackcrownkw.com/products/wolf-padel-racket">
        <img class="image-item"
        src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Wolf-1.jpg?v=1654534712&width=990">
        </a>
        <h5 class="grid-item-title">Wolf Padel Racket</h5>
        <h6 class="grid-item-description">Power: 70%<br>Control: 90%</h6>
        </div>
        <div class="grid-item">
        <a href="https://blackcrownkw.com/products/piton-9-0-padel-racket">
        <img class="image-item"
        src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Piton-9-1.jpg?v=1654534529&width=990">
        </a>
        <h5 class="grid-item-title">Piton 9.0 Padel Racket</h5>
        <h6 class="grid-item-description">Power: 80%<br>Control: 90%</h6>
        </div>
        </div>
        </div>
        `;
      }
      else if (result8) {
        this.result.innerHTML = 
        `
        <h5 class="title-result">Great news! We've found a
        racket that matches your requirements perfectly. </h5>
       <div class="grid-center-container">
        <div class="grid-container">
        <div class="grid-item">
        <a href="https://blackcrownkw.com/products/piton-9-0-soft-padel-racket">
        <img class="image-item"
        src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Piton-9.0-Soft-1.jpg?v=1654532558&width=990">
        </a>
        <h5 class="grid-item-title">Piton 9.0 Soft Padel Racket</h5>
        <h6 class="grid-item-description">Power: 90%<br>Control: 100%</h6>
        </div>
        </div>
        </div>
        `;
      }
      else if (result9) {
        this.result.innerHTML = 
        `
        <h5 class="title-result">Great news! We've found a
        racket that matches your requirements perfectly. </h5>
       <div class="grid-center-container">
        <div class="grid-container">
        <div class="grid-item">
        <a href="https://blackcrownkw.com/products/special-padel-racket">
        <img class="image-item"
        src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Special-1-1.jpg?v=1654529267&width=990">
        </a>
        <h5 class="grid-item-title">Special Padel Racket</h5>
        <h6 class="grid-item-description">Power: 90%<br>Control: 100%</h6>
        </div>
        </div>
        </div>
        `;
         }
      else if (result10) {
        this.result.innerHTML = 
        `
        <h5 class="title-result">Great news! We've found some
        rackets that match your requirements perfectly. 
        Take a look at the available options and 
        find the one that suits you best.</h5>
       <div class="grid-center-container">
        <div class="grid-container">
        <div class="grid-item">
        <a href="https://blackcrownkw.com/products/hurricane-padel-racket">
        <img class="image-item"
        src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Hurricane-1.jpg?v=1654533234&width=990">
        </a>
        <h5 class="grid-item-title">Hurricane Padel Racket</h5>
        <h6 class="grid-item-description">Power: 95%<br>Control: 90%</h6>
        </div>
        <div class="grid-item">
        <a href="https://blackcrownkw.com/products/piton-nakano-15k">
        <img class="image-item"
        src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Piton-Nakano-15k-1.jpg?v=1654531721&width=990">
        </a>
        <h5 class="grid-item-title">Piton Nakano 15K</h5>
        <h6 class="grid-item-description">Power: 95%<br>Control: 90%</h6>
        </div>
        <div class="grid-item">
        <a href="https://blackcrownkw.com/products/piton-air-padel-racket">
        <img class="image-item"
        src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Piton-Air-1.jpg?v=1654532780&width=990">
        </a>
        <h5 class="grid-item-title">Piton Air Padel Racket</h5>
        <h6 class="grid-item-description">Power: 95%<br>Control: 100%</h6>
        </div>
        </div>
        </div>
        `;
      }
      else if (result11) {
        this.result.innerHTML = 
        `
        <h5 class="title-result">Great news! We've found a
        racket that matches your requirements perfectly. </h5>
       <div class="grid-center-container">
        <div class="grid-container">
        <div class="grid-item">
        <a href="https://blackcrownkw.com/products/piton-limited-padel-racket">
        <img class="image-item"
        src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Piton-Limited-1.jpg?v=1654534356&width=990">
        </a>
        <h5 class="grid-item-title">Piton Limited Padel Racket</h5>
        <h6 class="grid-item-description">Power: 95%<br>Control: 100%</h6>
        </div>
        </div>
        </div>
        `;
      }
      else if (result12) {
        this.result.innerHTML = 
        `
        <h5 class="title-result">Great news! We've found some
         rackets that match your requirements perfectly. 
         Take a look at the available options and 
         find the one that suits you best.</h5>
        <div class="grid-center-container">
        <div class="grid-container">
        <div class="grid-item">
        <a href="https://blackcrownkw.com/products/piton-attack-plus-padel-racket">
        <img class="image-item"
        src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Piton-Attack-Plus-1.jpg?v=1654529396&width=990">
        </a>
        <h5 class="grid-item-title">Piton Attack Plus Padel Racket</h5>
        <h6 class="grid-item-description">Power: 95%<br>Control: 90%</h6>
        </div>
        <div class="grid-item">
        <a href="https://blackcrownkw.com/products/special-power">
        <img class="image-item"
        src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Special-Power-1.jpg?v=1654534998&width=990">
        </a>
        <h5 class="grid-item-title">Special Power</h5>
        <h6 class="grid-item-description">Power: 100%<br>Control: 90%</h6>
        </div>
        </div>
        </div>
        `;
      }
    } else {
      this.result.innerHTML = 
      `
      <h5 class="title-result">We couldn't locate the exact racket 
      that fits your criteria, but don't worry!</h5>
      <h6 class="description-result">We've gathered all the rackets we currently 
      have below for you to discover them. 
      Feel free to explore these options.</h6>
      <div class="grid-center-container">
      <div class="grid-container">
      <div class="grid-item">
      <a href="https://blackcrownkw.com/products/snake-padel-racket">
      <img class="image-item"
      src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-snake-1.jpg?v=1654533464">
      </a>
      <h5 class="grid-item-title">Snake Padel Racket</h5>
      <h6 class="grid-item-description">Power: 40%<br>Control: 60%</h6>
      </div>

      <div class="grid-item">
      <a href="https://blackcrownkw.com/products/piton-air-plus">
      <img class="image-item"
      src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Piton-Air-Plus-1.jpg?v=1654533073&width=990">
      </a>
      <h5 class="grid-item-title">Piton Air Plus</h5>
      <h6 class="grid-item-description">Power: 40%<br>Control: 60%</h6>
      </div>

      <div class="grid-item">
      <a href="https://blackcrownkw.com/products/piton-11-padel-racket">
      <img class="image-item"
      src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Piton-11-1.jpg?v=1675937668&width=990">
      </a>
      <h5 class="grid-item-title">Piton 11 Padel Racket</h5>
      <h6 class="grid-item-description">Power: 55%<br>Control: 45%</h6>
      </div>
    
      <div class="grid-item">
      <a href="https://blackcrownkw.com/products/hurricane-pro">
      <img class="image-item"
      src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Hurricane-Pro-1.jpg?v=1655986525&width=990">
      </a>
      <h5 class="grid-item-title">Hurricane Pro</h5>
      <h6 class="grid-item-description">Power: 60%<br>Control: 40%</h6>
      </div>

      <div class="grid-item">
      <a href="https://blackcrownkw.com/products/piton-10-padel-racket">
      <img class="image-item"
      src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Piton-10-1.jpg?v=1654531330&width=990">
      </a>
      <h5 class="grid-item-title">Piton 10 Padel Racket</h5>
      <h6 class="grid-item-description">Power: 60%<br>Control: 40%</h6>
      </div>
     
      <div class="grid-item">
      <a href="https://blackcrownkw.com/products/hurricane-pro-2-0">
      <img class="image-item"
      src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Hurricane-1_7901d1e5-fc2f-4643-9049-ce1b8cfd8ee2.jpg?v=1675936750&width=990">
      </a>
      <h5 class="grid-item-title">Hurricane Pro 2</h5>
      <h6 class="grid-item-description">Power: 60%<br>Control: 40%</h6>
      </div>
    
      <div class="grid-item">
      <a href="https://blackcrownkw.com/products/special-16k-padel-racket">
      <img class="image-item"
      src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Special-16k-2-1280x1088.jpg?v=1675937253">
      </a>
      <h5 class="grid-item-title">Special 16K Padel Racket</h5>
      <h6 class="grid-item-description">Power: 60%<br>Control: 40%</h6>

      </div>
      <div class="grid-item">
      <a href="https://blackcrownkw.com/products/piton-attack-12k-padel-racket">
      <img class="image-item"
      src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Piton-Attack-12k-1.jpg?v=1654534812&width=990">
      </a>
      <h5 class="grid-item-title">Piton Attack 12K Padel Racket</h5>
      <h6 class="grid-item-description">Power: 60%<br>Control: 40%</h6>
      </div>
     
      <div class="grid-item">
      <a href="https://blackcrownkw.com/products/special-soft-padel-racket">
      <img class="image-item"
      src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Special-Soft-1-scaled.jpg?v=1675937354&width=990">
      </a>
      <h5 class="grid-item-title">Special Soft Padel Racket</h5>
      <h6 class="grid-item-description">Power: 45%<br>Control: 55%</h6>
      </div>
    
      <div class="grid-item">
      <a href="https://blackcrownkw.com/products/wolf-padel-racket">
      <img class="image-item"
      src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Wolf-1.jpg?v=1654534712&width=990">
      </a>
      <h5 class="grid-item-title">Wolf Padel Racket</h5>
      <h6 class="grid-item-description">Power: 70%<br>Control: 90%</h6>
      </div>

      <div class="grid-item">
      <a href="https://blackcrownkw.com/products/piton-9-0-padel-racket">
      <img class="image-item"
      src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Piton-9-1.jpg?v=1654534529&width=990">
      </a>
      <h5 class="grid-item-title">Piton 9.0 Padel Racket</h5>
      <h6 class="grid-item-description">Power: 80%<br>Control: 90%</h6>
      </div>
     
      <div class="grid-item">
      <a href="https://blackcrownkw.com/products/piton-9-0-soft-padel-racket">
      <img class="image-item"
      src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Piton-9.0-Soft-1.jpg?v=1654532558&width=990">
      </a>
      <h5 class="grid-item-title">Piton 9.0 Soft Padel Racket</h5>
      <h6 class="grid-item-description">Power: 90%<br>Control: 100%</h6>
      </div>
     
      <div class="grid-item">
      <a href="https://blackcrownkw.com/products/special-padel-racket">
      <img class="image-item"
      src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Special-1-1.jpg?v=1654529267&width=990">
      </a>
      <h5 class="grid-item-title">Special Padel Racket</h5>
      <h6 class="grid-item-description">Power: 90%<br>Control: 100%</h6>
      </div>
     
      <div class="grid-item">
      <a href="https://blackcrownkw.com/products/hurricane-padel-racket">
      <img class="image-item"
      src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Hurricane-1.jpg?v=1654533234&width=990">
      </a>
      <h5 class="grid-item-title">Hurricane Padel Racket</h5>
      <h6 class="grid-item-description">Power: 95%<br>Control: 90%</h6>
      </div>

      <div class="grid-item">
      <a href="https://blackcrownkw.com/products/piton-nakano-15k">
      <img class="image-item"
      src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Piton-Nakano-15k-1.jpg?v=1654531721&width=990">
      </a>
      <h5 class="grid-item-title">Piton Nakano 15K</h5>
      <h6 class="grid-item-description">Power: 95%<br>Control: 90%</h6>
      </div>

      <div class="grid-item">
      <a href="https://blackcrownkw.com/products/piton-air-padel-racket">
      <img class="image-item"
      src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Piton-Air-1.jpg?v=1654532780&width=990">
      </a>
      <h5 class="grid-item-title">Piton Air Padel Racket</h5>
      <h6 class="grid-item-description">Power: 95%<br>Control: 100%</h6>
      </div>
 
      <div class="grid-item">
      <a href="https://blackcrownkw.com/products/piton-limited-padel-racket">
      <img class="image-item"
      src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Piton-Limited-1.jpg?v=1654534356&width=990">
      </a>
      <h5 class="grid-item-title">Piton Limited Padel Racket</h5>
      <h6 class="grid-item-description">Power: 95%<br>Control: 100%</h6>
      </div>
      
      <div class="grid-item">
      <a href="https://blackcrownkw.com/products/piton-attack-plus-padel-racket">
      <img class="image-item"
      src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Piton-Attack-Plus-1.jpg?v=1654529396&width=990">
      </a>
      <h5 class="grid-item-title">Piton Attack Plus Padel Racket</h5>
      <h6 class="grid-item-description">Power: 95%<br>Control: 90%</h6>
      </div>

      <div class="grid-item">
      <a href="https://blackcrownkw.com/products/special-power">
      <img class="image-item"
      src="https://blackcrownkw.com/cdn/shop/products/Black-Crown-racket-Special-Power-1.jpg?v=1654534998&width=990">
      </a>
      <h5 class="grid-item-title">Special Power</h5>
      <h6 class="grid-item-description">Power: 100%<br>Control: 90%</h6>
      </div>
      </div>
      </div>
      `;
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
<div class="options">${game.options.map(item =>
      `<div class="option-container">
  <label class="container" for="item">
  <input type="radio" id="item" name="itemOption" value=${item.keyword}>
  <span>${item.option}</span>
</label>
</div>`).join('')}
</div>
</div>`;
};
