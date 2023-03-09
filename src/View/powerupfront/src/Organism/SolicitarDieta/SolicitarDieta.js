import { Buttons } from "../../Atomic/Buttons/Buttons";


export function SolicitarDieta(){
    const onRequestClick = () => {
        console.log("teste dieta")
    }
    return(
        <div>
            <p>Solicitar  dieta</p>
            <div>
                <select name="" id="">
                    <option value="">Ganho de massa</option>
                    <option value="">Emagrecimento</option>
                    <option value="">Manter</option>
                </select>
                <Buttons name="Solicitar" func={() => onRequestClick()}/>
            </div>
        </div>
    )
}