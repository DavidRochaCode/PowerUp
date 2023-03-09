import { Footers } from "../Footers/Footers";
import { Headers } from "../Headers.js/Headers";
import { Link } from "react-router-dom";
import { BackButtons } from "../../Atomic/Buttons/BackButtons";
import { Buttons } from "../../Atomic/Buttons/Buttons";



export function VerDieta(){
    return(
        <div>
            <Headers/>
            <div className="m-[20px]">
                <Link to="/Dieta">
                    <BackButtons name="<-"/>
                </Link>
            </div>
           <div className="flex flex-col items-center justify-center">
            <div className=" w-max h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] ">
                <p>Segunda à domingo</p>
                <Buttons name="Deletar"/> 
            </div>

        </div> 
        
        <Footers/>
        </div>
        
    )
}