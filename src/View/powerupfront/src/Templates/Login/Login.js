
import { Footers } from "../../Organism/Footers/Footers.js";

import { HeadersLogin } from "../../Organism/Headers.js/HeadersLogin.js";
import { LoginAreas } from "../../Organism/LoginAreas/LoginAreas.js";



export function Login(){
    return(
        <div className="grid grid-cols-12">
            <HeadersLogin/>
            <LoginAreas title="PowerUp" subTitle="Login" but="Login"/>
            <Footers/>
        </div>
    )
}