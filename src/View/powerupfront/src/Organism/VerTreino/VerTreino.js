import { Link } from "react-router-dom";
import { BackButtons } from "../../Atomic/Buttons/BackButtons";
import { Footers } from "../Footers/Footers";
import { Headers } from "../Headers.js/Headers";

export function VerTreino(){
    return(
        <div>
           
            <Headers/>
            <div className="m-[20px]">
                <Link to="/treino"><BackButtons name="<-"/></Link>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className=" w-max h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] ">
                    <p className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">
                        Segunda:
                    </p>
                    <p className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">
                        Terça:
                    </p>
                    <p className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">
                        Quarta:
                    </p>
                    <p className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">
                        Quinta:
                    </p>
                    <p className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">
                        Sexta:
                    </p>
                    <p className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">
                        Sábado:
                    </p>
                    <p className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl">
                        Domingo:
                    </p>
                </div>
            </div>
            <Footers/>
        </div>
    )
}