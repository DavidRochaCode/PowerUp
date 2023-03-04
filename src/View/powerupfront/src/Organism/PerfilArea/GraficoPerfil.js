import { Footers } from "../Footers/Footers";
import { Headers } from "../Headers.js/Headers";

export function GraficoPerfil(){
    return(
        <div>
            <Headers/>
            <div className="flex flex-row">
                <div>
                    <p>Dados</p>
                </div>
                <div>
                    <p>
                        Grafico
                    </p>
                </div>
            </div>
            <Footers/>
        </div>
    )
}