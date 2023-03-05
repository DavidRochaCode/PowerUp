import { Link } from "react-router-dom";
import { Buttons } from '../../Atomic/Buttons/Buttons.js';
import { Headers } from "../../Organism/Headers.js/Headers.js";
import { Footers } from "../../Organism/Footers/Footers.js";

export function Home(){


    
    return(
        
        <div>
            <Headers/>
            <div>
                <Link to='/login'>
                    <Buttons name="login"/>
                </Link>
            </div>
            <Footers/>
        </div>

    
    )
    
}