import { CriarTreino } from "../../Organism/CriarTreino/CriarTreino";
import { Footers } from "../../Organism/Footers/Footers";
import { Headers } from "../../Organism/Headers.js/Headers";


export function Treino(){
    return(
        <div>
            <Headers/>
            <CriarTreino/>
            <Footers/>
        </div>
    )
}