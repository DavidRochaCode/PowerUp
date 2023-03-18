import { CriarTreino } from "../../Organism/CriarTreino/CriarTreino";
import { Footers } from "../../Organism/Footers/Footers";
import { Headers } from "../../Organism/Headers.js/Headers";
import { SolicitarTreino } from "../../Organism/SolicitarTreino/SolicitarTreino";


export function Treino(){
    return(
        <div>
            <Headers/>
            <CriarTreino/>
            <SolicitarTreino/>
            <Footers/>
        </div>
    )
}