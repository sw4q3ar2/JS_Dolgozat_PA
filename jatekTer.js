import Cella from "./cella.js";
import { adatLista } from "./kepek.js";

class JaterTer{
    #allapotLista = [];
    #lepes;

    constructor(){
        this.#allapotLista = ["♙","♟","♙"," "," "," ","♙","♟","♙"];
        this.#lepes = 0;
        const szuloElem = $("article");
        for (let index = 0; index < 9; index++) {
            const cella = new Cella(szuloElem, index, this.#allapotLista[index]); 
        }

        $(window).on("elemKatt", (event) => {
            let aktElem = event.detail;


        });

        
    }

    #jatekter(){

    }

    #lepeskkeresese(kivalasztottIndex){

    }

    #ellenorzes(){

    }
}

export default JaterTer;