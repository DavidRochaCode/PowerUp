import { Footers } from "../../Organism/Footers/Footers.js";
import { HeadersLogin } from "../../Organism/Headers.js/HeadersLogin.js";
import { SingAreas } from "../../Organism/SingArea/SingAreas.js";
import { IconArrowLeft } from '@tabler/icons-react';

export function SingUp(){
    return(
        <div className="grid grid-cols-12">
            <HeadersLogin/>
            <SingAreas title="PowerUp" subTitle="Cadastro" but1="Cadastrar" but2={<IconArrowLeft/>}/>
            <Footers/>
        </div>
    )
}