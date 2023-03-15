import { useState } from "react";
import { Buttons } from "../../Atomic/Buttons/Buttons";





export function SolicitarTreino(){

    const treino = {

        "default":{
            "parte1":[""],
            "dia1":[""],
            "parte2":[""],
            "dia2":[""],
            "parte3":[""],
            "dia3":[""],
            "parte4":[""],
            "dia4":[""],
            "parte5":[""],
            "dia5":[""],
            "parte6":[""],
            "dia6":[""]
        },

        "3":{
            "parte1":["Treino de corpo inteiro"],
            "dia1":["Agachamento com barra: 3 séries de 8-12 repetições - ","Supino com halteres: 3 séries de 8-12 repetições - ","Puxada na barra: 3 séries de 8-12 repetições - ","Rosca bíceps com halteres: 3 séries de 8-12 repetições - ","Extensão de tríceps com halteres: 3 séries de 8-12 repetições - ","Prancha: 3 séries de 30-60 segundos"],
            "parte2":["Treino de membros inferiores e abdominais"],
            "dia2":["Levantamento terra com barra: 3 séries de 8-12 repetições - ","Lunges com halteres: 3 séries de 10-12 repetições em cada perna - ","Cadeira extensora: 3 séries de 8-12 repetições - ","Abdominais: 3 séries de 12-15 repetições"],
            "parte3":["Treino de membros superiores e abdominais"],
            "dia3":["Flexão de braço: 3 séries de 8-12 repetições - ","Remada com halteres: 3 séries de 8-12 repetições - ","Elevação lateral com halteres: 3 séries de 8-12 repetições - ","Rosca martelo com halteres: 3 séries de 8-12 repetições - ","Tríceps testa com halteres: 3 séries de 8-12 repetições - ","Prancha lateral: 3 séries de 30-60 segundos em cada lado"],
            "parte4":[""],
            "dia4":[""],
            "parte5":[""],
            "dia5":[""],
            "parte6":[""],
            "dia6":[""]
        },

        "4":{
            "parte1":["Treino de peito e tríceps"],
            "dia1":["Supino reto com barra: 3-4 séries de 8-12 repetições - ","Supino inclinado com halteres: 3-4 séries de 8-12 repetições - ","Crucifixo com halteres: 3-4 séries de 8-12 repetições - ","Extensão de tríceps com halteres: 3-4 séries de 8-12 repetições"],
            "parte2":["Treino de costas e bíceps"],
            "dia2":["Puxada na barra: 3-4 séries de 8-12 repetições - ","Remada com halteres: 3-4 séries de 8-12 repetições - ","Pull-ups ou chin-ups: 3-4 séries de 6-10 repetições - ","Rosca bíceps com halteres: 3-4 séries de 8-12 repetições"],
            "parte3":["Treino de pernas"],
            "dia3":["Agachamento com barra: 3-4 séries de 8-12 repetições - ","Cadeira extensora: 3-4 séries de 8-12 repetições - ","Cadeira flexora: 3-4 séries de 8-12 repetições - ","Panturrilha em pé: 3-4 séries de 12-15 repetições"],
            "parte4":["Treino de ombros e abdominais"],
            "dia4":["Press militar com barra: 3-4 séries de 8-12 repetições - ","Elevação lateral com halteres: 3-4 séries de 8-12 repetições - ","Desenvolvimento frontal com halteres: 3-4 séries de 8-12 repetições - ","Abdominais: 3-4 séries de 12-15 repetições"],
            "parte5":[""],
            "dia5":[""],
            "parte6":[""],
            "dia6":[""]
        },

        "5":{
            "parte1":["Treino de peito"],
            "dia1":["Supino reto com barra: 3-4 séries de 6-10 repetições - ","Supino inclinado com halteres: 3-4 séries de 8-12 repetições - ","Crucifixo inclinado com halteres: 3-4 séries de 8-12 repetições - ","Flyes com halteres: 3-4 séries de 8-12 repetições"],
            "parte2":["Treino de costas"],
            "dia2":["Puxada na barra: 3-4 séries de 6-10 repetições - ","Remada com halteres: 3-4 séries de 8-12 repetições - ","Pull-ups ou chin-ups: 3-4 séries de 6-10 repetições - ","Levantamento terra: 3-4 séries de 6-10 repetições"],
            "parte3":["Treino de pernas"],
            "dia3":["Agachamento com barra: 3-4 séries de 6-10 repetições - ","Leg press: 3-4 séries de 8-12 repetições - ","Cadeira flexora: 3-4 séries de 8-12 repetições - ","Panturrilha em pé: 3-4 séries de 12-15 repetições"],
            "parte4":["Treino de ombros"],
            "dia4":["Press militar com barra: 3-4 séries de 6-10 repetições - ","Elevação lateral com halteres: 3-4 séries de 8-12 repetições - ","Desenvolvimento frontal com halteres: 3-4 séries de 8-12 repetições - ","Elevação posterior com halteres: 3-4 séries de 8-12 repetições"],
            "parte5":["Treino de braços e abdominais"],
            "dia5":["Rosca bíceps com barra: 3-4 séries de 8-12 repetições - ","Tríceps pulley: 3-4 séries de 8-12 repetições - ","Martelo com halteres: 3-4 séries de 8-12 repetições - ","Abdominais: 3-4 séries de 12-15 repetições"],
            "parte6":[""],
            "dia6":[""]
        },

        "6":{
            "parte1":["Treino de peito e tríceps"],
            "dia1":["Supino reto com barra: 4 séries de 6-10 repetições - ","Supino inclinado com halteres: 3 séries de 8-12 repetições - ","Crucifixo inclinado com halteres: 3 séries de 8-12 repetições - ","Extensão de tríceps com halteres: 3 séries de 8-12 repetições - ","Fundos em barras paralelas: 3 séries de 10-15 repetições"],
            "parte2":["Treino de costas e bíceps"],
            "dia2":["Puxada na barra: 4 séries de 6-10 repetições - ","Remada curvada: 3 séries de 8-12 repetições - ","Remada sentado com halteres: 3 séries de 8-12 repetições - ","Rosca direta com barra: 3 séries de 8-12 repetições - ","Rosca martelo com halteres: 3 séries de 8-12 repetições"],
            "parte3":["Treino de pernas"],
            "dia3":["Agachamento com barra: 4 séries de 6-10 repetições - ","Leg press: 3 séries de 8-12 repetições - ","Cadeira extensora: 3 séries de 8-12 repetições - ","Cadeira flexora: 3 séries de 8-12 repetições - ","Panturrilha em pé: 3 séries de 12-15 repetições"],
            "parte4":[" Treino de ombros"],
            "dia4":["Press militar com barra: 4 séries de 6-10 repetições - ","Elevação lateral com halteres: 3 séries de 8-12 repetições - ","Desenvolvimento frontal com halteres: 3 séries de 8-12 repetições - ","Elevação posterior com halteres: 3 séries de 8-12 repetições - ","Encolhimento de ombros com halteres: 3 séries de 10-15 repetições"],
            "parte5":["Treino de pernas e abdômen"],
            "dia5":["Agachamento frontal: 4 séries de 6-10 repetições - ","Leg press inclinado: 3 séries de 8-12 repetições - ","Stiff: 3 séries de 8-12 repetições - ","Elevação de panturrilha sentado: 3 séries de 12-15 repetições - ","Abdominais: 4 séries de 10-15 repetições"],
            "parte6":["Treino de braços e antebraços"],
            "dia6":["Rosca bíceps com halteres: 3 séries de 8-12 repetições - ","Rosca scott: 3 séries de 8-12 repetições - ","Tríceps corda: 3 séries de 8-12 repetições - ","Tríceps francês com halteres: 3 séries de 8-12 repetições - ","Curl de antebraço com barra: 3 séries de 12-15 repetições - ", "Extensão de antebraço com halteres: 3 séries"]
        },
    }

    const [fator, setFator] = useState("");
    const [userFator, setUserFator] = useState("default")

    const handleFatorChange = (e) => setFator(e.target.value);

    function onClickSolicitarTreino(){
        if(fator === "3"){
            setUserFator("3")
        }else if(fator === "4"){
            setUserFator("4")
        }
        else if(fator === "5"){
            setUserFator("5")
        }
        else if(fator === "6"){
            setUserFator("6")
        }else if(fator === null || fator === undefined){
            alert("digite um valor para receber a dieta correta")
        }else{
            alert("digite um valor para receber a dieta correta")
        }

        console.log(userFator)
        console.log(fator)
    }

    let TypeFator = userFator;


    return(
        <div>
             <div className="flex flex-col items-center justify-center pt-[20px]" >
            <p>Solicitar Treino</p>
            <div className=" w-max h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] ">
                    <p>Selecione o fator atividade desejado</p>
                    <select name="" id="" onChange={handleFatorChange}>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>

                    
                    <Buttons type="submit" name="Solicitar" func={onClickSolicitarTreino} />

                    

                    <div className=" w-[1300px] h-max p-[50px]  rounded-[12px] my-[30px] ">

                        <div className="">
                            <p className="text-2xl font-bold text-[#8854d0]">Treino</p>  
                        </div>

                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl ">
                            <p className="my-[10px] font-bold">Dia 1</p>
                            <p className="my-[10px] font-bold">{treino[TypeFator].parte1}</p>
                            <p>{treino[TypeFator].dia1}</p>
                        </div>
                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl ">
                            <p className="my-[10px] font-bold">Dia 2</p>
                            <p className="my-[10px] font-bold">{treino[TypeFator].parte2}</p>
                            <p>{treino[TypeFator].dia2}</p>
                        </div>
                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl ">
                            <p className="my-[10px] font-bold">Dia 3</p>
                            <p className="my-[10px] font-bold">{treino[TypeFator].parte3}</p>
                            <p>{treino[TypeFator].dia3}</p>
                        </div>
                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl ">
                            <p className="my-[10px] font-bold">Dia 4</p>
                            <p className="my-[10px] font-bold">{treino[TypeFator].parte4}</p>
                            <p>{treino[TypeFator].dia4}</p>
                        </div>
                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl ">
                            <p className="my-[10px] font-bold">Dia 5</p>
                            <p className="my-[10px] font-bold">{treino[TypeFator].parte5}</p>
                            <p>{treino[TypeFator].dia5}</p>
                        </div>
                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl ">
                            <p className="my-[10px] font-bold">Dia 6</p>
                            <p className="my-[10px] font-bold">{treino[TypeFator].parte6}</p>
                            <p>{treino[TypeFator].dia6}</p>
                        </div>

                        
           
                        </div>
                    </div>
                
            </div>
        </div>  
    )
}