
import { Footers } from "../../Organism/Footers/Footers.js";
import { Headers } from "../../Organism/Headers.js/Headers.js";
import { LoginAreas } from "../../Organism/LoginAreas/LoginAreas.js";



export function Login(){
    return(
        <div className="grid grid-cols-12">
            <Headers/>
            <LoginAreas title="PowerUp" subTitle="Login" but="Login"/>
            <Footers/>
        </div>
    )
}