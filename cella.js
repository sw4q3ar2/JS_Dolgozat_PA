import JaterTer from "./jatekTer.js";

class Cella{
    #adat;
    #divElem;

    constructor(szuloElem, index, adat){
        this.index = index;
        this.#adat = adat;
        szuloElem.append(`
        <div class="Cella">
            ${this.#adat}
        </div>
        `);
        
        this.#divElem = $('.Cella:last-child');
        this.#divElem.on("click", () => {
            if(this.#adat != 0){
                this.#kattintasTrigger();
                console.log("nem ures");
            }else{
                console.log("Nem kattintható, ha nincs benne bábu!");
            }
        })

    }

    setAllapot(){

    }

    gyalogEltunik(){
        
    }

    #szinBeallit(){

    }

    #kattintasTrigger(){
        const esemeny = new CustomEvent("elemKatt", {detail: this});
        window.dispatchEvent(esemeny);
    }
}

export default Cella;