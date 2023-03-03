import { Footer } from "../../Organism/Footer/Footer";
import { Header } from "../../Organism/Header/Header";
import { LoginArea } from "../../Organism/LoginArea/LoginArea";


export function Login(){
    return(
        <div className="grid grid-cols-12">
            <Header/>
            <LoginArea title="PowerUp" subTitle="Login" but="Login"/>
            <Footer/>
        </div>
    )
}