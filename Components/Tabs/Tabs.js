class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
      this.tabItem = new TabItem(this.itemElement)
      this.element.addEventListener("click", e => this.select());
    }
    select() {
      const links = document.querySelectorAll('.tabs-link');
      links.forEach(link => link.classList.remove('tabs-link-selected'));
      this.element.classList.add('tabs-link-selected')
      this.tabItem.select()

    }
}
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
    select() {
      const items = document.querySelectorAll('.tabs-item').forEach(item => {item.classList.remove("tabs-item-selected"), TweenMax.to( this.element , 0, {opacity:0} )});
      this.element.classList.add("tabs-item-selected")
      TweenMax.to( this.element , 4, {opacity:1} )
    }
}   
  
let links = document.querySelectorAll('.tabs-link').forEach( link => new TabLink(link));
  