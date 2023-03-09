import { Link } from "react-router-dom";
import { Buttons } from "../../Atomic/Buttons/Buttons";
import { DietaForm } from "../DietaForm/DietaForm";

export function CriarDieta(){

    
    return(
        <div className="flex flex-col items-center justify-center">
            <div className=" w-max h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] ">
                <p>Dieta</p>
                <div className="grid grid-cols-10 gap-4">
                    <div className="col-span-2">
                        <DietaForm name="Café" nomeFunc="" quantidadeFunc="" proteinaFunc="" carboidratoFunc="" gorduraFunc="" butFunc=""/>
                    </div>
                    <div className="col-span-2">
                        <DietaForm name="Lanche Manhã" nomeFunc="" quantidadeFunc="" proteinaFunc="" carboidratoFunc="" gorduraFunc="" butFunc=""/>
                    </div>
                    <div className="col-span-2">
                        <DietaForm name="Almoço" nomeFunc="" quantidadeFunc="" proteinaFunc="" carboidratoFunc="" gorduraFunc="" butFunc=""/>
                    </div>
                    <div className="col-span-2">
                        <DietaForm name="Lanche Tarde" nomeFunc="" quantidadeFunc="" proteinaFunc="" carboidratoFunc="" gorduraFunc="" butFunc=""/>
                    </div>
                    <div className="col-span-2">
                        <DietaForm name="Janta" nomeFunc="" quantidadeFunc="" proteinaFunc="" carboidratoFunc="" gorduraFunc="" butFunc=""/>
                    </div>
                </div>
            </div>
            <div>
                <Link to="/verDieta">
                    <Buttons name="Ver Dieta"/>
                </Link>
                
            </div>
            
        </div>
    )
}