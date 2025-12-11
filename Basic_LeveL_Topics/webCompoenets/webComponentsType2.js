// RENDERING DYNAMIC DATA WITH SLOT KEYWORD

class cardTypeTwo extends HTMLElement{
    set data(value){
        this._data = value
        this.render()
    }

    render(){
        if(!this._data) return;
        this.innerHTML= `
            <h2>${this._data.name}</h2>
            <p>${this._data.subtitle}</p>
            <p>ashiahsi</p>
            <strong>${this._data.price}</strong>
        `
    }

}

customElements.define('card-type-two',cardTypeTwo)