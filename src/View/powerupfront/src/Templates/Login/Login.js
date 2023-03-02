import { Header } from "../../Organism/Header/Header";
import { LoginArea } from "../../Organism/LoginArea/LoginArea";

export function Login(){
    return(
        <div className="grid grid-cols-12">
            <Header/>
            <LoginArea/>
            <div>
                <p>footer</p>
            </div>
        </div>
    )
}