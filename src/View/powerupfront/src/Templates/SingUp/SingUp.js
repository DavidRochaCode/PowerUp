import { Footer } from "../../Organism/Footer/Footer";
import { Header } from "../../Organism/Header/Header";
import { SingArea } from "../../Organism/SingArea/SingArea";
import { IconArrowLeft } from '@tabler/icons-react';

export function SingUp(){
    return(
        <div className="grid grid-cols-12">
            <Header/>
            <SingArea title="PowerUp" subTitle="Cadastro" but1="Cadastrar" but2={<IconArrowLeft/>}/>
            <Footer/>
        </div>
    )
}