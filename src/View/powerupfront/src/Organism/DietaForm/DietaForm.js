import { Buttons } from "../../Atomic/Buttons/Buttons";
import { Inputs } from "../../Atomic/Input/Inputs";

export function DietaForm({name,nomeFunc,quantidadeFunc,proteinaFunc,carboidratoFunc,gorduraFunc, butName, butId, butFunc, radioValue}){
    return(
        <div className=" flex flex-col items-center justify-center w-max h-max p-[30px] shadow-2xl rounded-[12px] my-[30px] ">
            <p>{name}</p>
            <form action="">
                <div>
                    <p>Nome</p>
                    <Inputs type="text" place="Nome:" id="" func={nomeFunc}/>
                </div>
                <div>
                    <p>Quantidade</p>
                    <Inputs type="text" place="Quantidade:" id="" func={quantidadeFunc}/>
                </div>
                <div>
                    <p>Proteína</p>
                    <Inputs type="text" place="Proteína:" id="" func={proteinaFunc}/>
                </div>
                <div>
                    <p>Carboidrato</p>
                    <Inputs type="text" place="Carboidrato:" id="" func={carboidratoFunc}/>
                </div>
                <div>
                    <p>Gordura</p>
                    <Inputs type="text" place="Gordura:" id="" func={gorduraFunc}/>
                </div>
                <div className="grid grid-cols-7 gap-4">
                    <div>
                        <p>S</p>
                        <Inputs type="radio" value="segunda" id="" name="dia"/>
                    </div>
                    <div>
                        <p>T</p>
                        <Inputs type="radio" value="terca" id="" name="dia"/>
                    </div>
                    <div>
                        <p>Q</p>
                        <Inputs type="radio" value="quarta" id="" name="dia"/>
                    </div>
                    <div>
                        <p>Q</p>
                        <Inputs type="radio" value="quinta" id="" name="dia"/>
                    </div>
                    <div>
                        <p>S</p>
                        <Inputs type="radio" value="sexta" id="" name="dia"/>
                    </div>
                    <div>
                        <p>S</p>
                        <Inputs type="radio" value="sabado" id="" name="dia"/>
                    </div>
                    <div>
                        <p>D</p>
                        <Inputs type="radio" value="domingo" id="" name="dia"/>
                    </div> 
                </div>
                <div>
                    <Buttons name="Cadastrar" id={butId} func={butFunc}/>
                </div>
            </form>
            
        </div>
    )
}