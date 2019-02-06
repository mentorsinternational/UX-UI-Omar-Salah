class Handle{
    constructor(element){
        this.handle = element
        this.data = this.handle.dataset.drawer
        this.drawer = new Drawer(document.querySelector(`.drawer[data-drawer='${this.data}']`))
        console.log(this.handle)
        this.handle.addEventListener("click", e => this.select());
    }
    select(){
        document.querySelectorAll('.handle').forEach(handle => handle.classList.remove('handle-selected'));
        this.handle.classList.add('handle-selected')
        this.drawer.select()
    }

}

class Drawer{
    constructor(element){
        this.drawerElement = element;
    }
    select(){
        document.querySelectorAll('.drawer').forEach(drawer => drawer.classList.remove("drawer-selected"));
        this.drawerElement.classList.add("drawer-selected")
}
}




let handles = document.querySelectorAll('.handle').forEach( handle => new Handle(handle));