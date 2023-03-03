import { Button } from "../../Button/Button";
import { Footer } from "../../Organism/Footer/Footer";
import { Link } from "react-router-dom";
import { Header } from "../../Organism/Header/Header";

export function Home(){
    return(
        <div>
            <Header/>
            <div>
                <Link to='/login'>
                    <Button name="login"/>
                </Link>
               
            </div>
            <Footer/>
        </div>
    )
}