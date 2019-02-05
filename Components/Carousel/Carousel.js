class Carousel {
    constructor (carousel) {
        this.leftBtn = carousel.querySelector(".left-button");
        this.rightBtn = carousel.querySelector(".right-button");
        this.storyList = Array.from(carousel.querySelectorAll(".testimony"));
        this.storyList.sort();
        // Set Defaults story
        this.index = 0
        this.storyList[this.index].style.display = 'flex'
        this.storyList[this.index].style.opacity = '1'
        this.leftBtn.addEventListener("click", () => this.cycleLeft());
        this.rightBtn.addEventListener("click", () => this.cycleRight());
    }
    
    cycleLeft () {
        this.storyList.forEach(story => TweenMax.to(story, 2, {opacity: 0}))
        TweenMax.to(this.storyList[this.index] , 1.5, {x: 1500} )
        TweenMax.to(this.storyList[this.index] , 0, { delay: .80,  x: 0, display: 'none'} )
        this.index === 0 ? this.index = this.storyList.length-1 : this.index --
        TweenMax.to(this.storyList[this.index] , 1.5, { display: 'block', delay: 1, opacity :1} )
    }
    
    cycleRight () {
        this.storyList.forEach(story => TweenMax.to(story, 2, {opacity: 0}))
        TweenMax.to(this.storyList[this.index] , 1.5, {x: -1500} )
        TweenMax.to(this.storyList[this.index] , 0, { delay: .80, display: 'none', x: 0} )
        this.index == this.storyList.length - 1 ? this.index = 0 : this.index ++;
        TweenMax.to(this.storyList[this.index] , 1.5, { display: 'block', delay: 1, opacity :1} )
    }
  }
   
  let carousels = document.querySelectorAll(".carousel").forEach(carousel => new Carousel(carousel));