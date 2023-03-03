import { Footers } from "../../Organism/Footers/Footers.js";
import { Headers } from "../../Organism/Headers.js/Headers.js";
import { SingAreas } from "../../Organism/SingArea/SingAreas.js";
import { IconArrowLeft } from '@tabler/icons-react';

export function SingUp(){
    return(
        <div className="grid grid-cols-12">
            <Headers/>
            <SingAreas title="PowerUp" subTitle="Cadastro" but1="Cadastrar" but2={<IconArrowLeft/>}/>
            <Footers/>
        </div>
    )
}