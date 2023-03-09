import { CriarDieta } from "../../Organism/CriarDieta/CriarDieta";
import { Footers } from "../../Organism/Footers/Footers";
import { Headers } from "../../Organism/Headers.js/Headers";
import { SolicitarDieta } from "../../Organism/SolicitarDieta/SolicitarDieta";

export function Dieta(){
    return(
        <div>
            <Headers/>
            <CriarDieta/>
            <SolicitarDieta/>
            <Footers/>
        </div>
    )
}