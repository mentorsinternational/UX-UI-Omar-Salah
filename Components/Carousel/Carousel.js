class Carousel {
    constructor (carousel) {
        this.leftBtn = carousel.querySelector(".left-button");
        this.rightBtn = carousel.querySelector(".right-button");
        this.itemList = Array.from(carousel.querySelectorAll(".item"));
        // Set Defaults
        this.index = 0
        this.itemList[this.index].style.display = 'flex'
        this.itemList[this.index].style.opacity = '1'
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
    }
    
    cycleRight () {
        this.itemList.forEach(story => TweenMax.to(story, 2, {opacity: 0}))
        TweenMax.to(this.itemList[this.index] , 1.5, {x: 1500} )
        TweenMax.to(this.itemList[this.index] , 0, { delay: .80, display: 'none', x: 0})
        this.index == this.itemList.length - 1 ? this.index = 0 : this.index ++;
        TweenMax.to(this.itemList[this.index] , 2, { display: 'block', delay: .8, opacity :1})
    }
  }
   
  let carousels = document.querySelectorAll(".carousel").forEach(carousel => new Carousel(carousel));