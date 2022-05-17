export class Router{

    routes = {}

    add(routeName, link){
        this.routes[routeName] = link
    }

    preventDefault() {
        window.event.preventDefault();
        window.history.pushState({}, "", event.target.href)
    
        this.myRoute()
    }

    myRoute(){
        const {pathname} = window.location;
        const newRoute = this.routes[pathname] || this.routes[404]
        
        fetch(newRoute)
            .then(page => page.text())
            .then(html => {
                document.querySelector('#app').innerHTML = html
            })
    
    }
    
}