let index = 0

export default class VMItem {
    /**
     * 
     * @param {String} name 
     * @param {Number} price 
     * @param {String} image
     */
    constructor(name, price, image = 'http://placehold.it/300x200') {
        this.name = name
        this.price = price
        this.image = image
        this.index = index
        index++
    }

    get Template() {
        return `
            <div class="card">
                <img src="${this.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">${this.price}</p>
                    <a href="#" class="btn btn-primary" onclick="app.VMController.buy(${this.index})">Buy Item</a>
                </div>
            </div>`
    }
}