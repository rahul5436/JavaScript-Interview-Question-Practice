//RENDERING STATIC DATA 

class cardTypeOne extends HTMLElement{
    constructor(){
        super()
        this.innerHTML=`
        <div>
            <p>productName</p>
            <p>productSubtitle</p>
            <p>productDescription</p>
        </div>
        `
    }
}


customElements.define("card-type-one",cardTypeOne)
