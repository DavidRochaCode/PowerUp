import { Footer } from "../../Organism/Footer/Footer";
import { Header } from "../../Organism/Header/Header";
import { SingArea } from "../../Organism/SingArea/SingArea";

export function SingUp(){
    return(
        <div className="grid grid-cols-12">
            <Header/>
            <SingArea title="PowerUp" subTitle="Cadastro" but="Cadastrar"/>
            <Footer/>
        </div>
    )
}