import { Footers } from "../../Organism/Footers/Footers";
import { Headers } from "../../Organism/Headers.js/Headers";
import { PerfilArea } from "../../Organism/PerfilArea/PerfilArea";

export function Perfil(){
    return(
        <div>
            <Headers/>
            <PerfilArea/>
            <Footers/>
        </div>
    )
}