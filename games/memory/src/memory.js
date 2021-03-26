document.addEventListener('DOMContentLoaded', () => {

  // Cards
  const cardArray = [
    {
      name: 'blue',
      img: 'images/blue.png'
    },
    {
      name: 'yellow',
      img: 'images/yellow.png'
    },
    {
      name: 'red',
      img: 'images/red.png'
    },
    {
      name: 'green',
      img: 'images/green.png'
    },
    {
      name: 'orange',
      img: 'images/orange.png'
    },
    {
      name: 'purple',
      img: 'images/purple.png'
    },
    {
      name: 'blue',
      img: 'images/blue.png'
    },
    {
      name: 'yellow',
      img: 'images/yellow.png'
    },
    {
      name: 'red',
      img: 'images/red.png'
    },
    {
      name: 'green',
      img: 'images/green.png'
    },
    {
      name: 'orange',
      img: 'images/orange.png'
    },
    {
      name: 'purple',
      img: 'images/purple.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector(".grid")
  const resultDisplay = document.getElementById('result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

  // Create gameboard
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/SLogo.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  // Check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute('src', 'images/SlackLogo.png')
      cards[optionTwoId].setAttribute('src', 'images/SlackLogo.png')
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/SLogo.png')
      cards[optionTwoId].setAttribute('src', 'images/SLogo.png')
    }

    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2){
      resultDisplay.textContent = 'Congratulatioons! You found them all'
    }
  }

  // Flip card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }


  createBoard()
})