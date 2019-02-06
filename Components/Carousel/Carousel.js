class Carousel {
    constructor (carousel) {
        this.leftBtn = carousel.querySelector(".left-button");
        this.rightBtn = carousel.querySelector(".right-button");
        this.itemList = carousel.querySelectorAll(".item")
        // Set Item Defaults
        this.index = 0
        this.itemList[this.index].style.display = 'flex'
        this.itemList[this.index].style.opacity = '1'
        // Optional tracked Card element
        this.data = this.itemList[this.index].dataset.card
        this.card = new Card(document.querySelector(`.card[data-card='${this.data}']`))
        this.leftBtn.addEventListener("click", () => this.cycleLeft());
        this.rightBtn.addEventListener("click", () => this.cycleRight());
        setInterval(() => this.cycleRight(), 10000)
    }
    
    cycleLeft () {
        this.itemList.forEach(story => TweenMax.to(story, 2, {opacity: 0, display: 'none'}))
        TweenMax.to(this.itemList[this.index] , 1.5, {x: -1500} )
        TweenMax.to(this.itemList[this.index] , 0, { delay: .80,  x: 0, display: 'none'})
        this.index === 0 ? this.index = this.itemList.length-1 : this.index --
        TweenMax.to(this.itemList[this.index] , 1.5, { display: 'block', delay: .8, opacity :1})
        this.card.cycleLeft()
    }
    
    cycleRight () {
        this.itemList.forEach(story => TweenMax.to(story, 2, {opacity: 0}))
        TweenMax.to(this.itemList[this.index] , 1.5, {x: 1500} )
        TweenMax.to(this.itemList[this.index] , 0, { delay: .80, display: 'none', x: 0})
        this.index == this.itemList.length - 1 ? this.index = 0 : this.index ++;
        TweenMax.to(this.itemList[this.index] , 2, { display: 'block', delay: .8, opacity :1})
        this.card.cycleRight()
    }
  }
  
  class Card{
    constructor(element){
        this.card = element;
        // Set Card Defaults
        document.querySelectorAll('.card').forEach(card => card.style.display = 'none')
        this.card.style.opacity = '1'
        this.card.style.display = 'block'
    }
    cycleLeft () {
        // document.querySelectorAll('.card').forEach(story => TweenMax.to(story, 2, {opacity: 0, display: 'none'}))
        TweenMax.to(this.card , 1.5, {x: -1500} )
        TweenMax.to(this.card , 0, { delay: .80,  x: 0, display: 'none'})
        TweenMax.to(this.card , 1.5, { display: 'block', delay: .8, opacity :1})
    }
    
    cycleRight () {
        // document.querySelectorAll('.card').forEach(card => TweenMax.to(card, 2, {opacity: 0, display: 'none'}))
        TweenMax.to(this.card , 1.5, {x: 1500} )
        TweenMax.to(this.card , 0, { delay: .80, display: 'none', x: 0})
        TweenMax.to(this.card , 2, { display: 'block', delay: .8, opacity :1})
    }
    
}
  let carousels = document.querySelectorAll(".carousel").forEach(carousel => new Carousel(carousel));