import { useEffect, useState } from "react";
import { Buttons } from "../../Atomic/Buttons/Buttons";
import axios, { isCancel, AxiosError } from "axios";
import jsPDF from 'jspdf';






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
            "dia4":["Descanso"],
            "parte5":[""],
            "dia5":["Descanso"],
            "parte6":[""],
            "dia6":["Descanso"]
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
            "dia5":["Descanso"],
            "parte6":[""],
            "dia6":["Descanso"]
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
            "dia6":["Descanso"]
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

    const aviso = {
        "1":{
            "aviso1":["Lembre-se de aquecer antes de cada treino e de alongar após. Escolha uma carga que permita que você complete todas as repetições com boa forma e descanse entre as séries por cerca de 60-90 segundos. Se possível, tente aumentar gradualmente a carga e/ou o número de repetições para progredir. Certifique-se de ter um programa de treinamento personalizado, que leve em consideração suas limitações, objetivos e experiência prévia com exercícios. Se tiver dúvidas ou preocupações, consulte um profissional de educação física ou um médico antes de iniciar qualquer programa de treinamento."]
        },
    }

    const [fator, setFator] = useState("");
    const [userFator, setUserFator] = useState("default")
    const [data, getData] = useState([]);

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

    let perfilFator = data.map((fator, index) => { return fator.fatorAtividade})
    console.log(perfilFator);

    
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("powerup")).token; // obter token do localStorage
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        axios.get(`http://localhost:3001/perfil/`, config)
        .then(reponse => {
            console.log(reponse.data)
            getData(reponse.data)
        })
        .catch((error) => {
            console.log(error);
            console.log("Deu erro");
          });
    }, []);

    let print = []

    print.push(treino[TypeFator].dia1)
    print.push(treino[TypeFator].dia2)
    print.push(treino[TypeFator].dia3)
    print.push(treino[TypeFator].dia4)
    print.push(treino[TypeFator].dia5)
    print.push(treino[TypeFator].dia6)
    print.push(aviso[1].aviso1)

    let arrayPrintTreino = ["Dia 1",...treino[TypeFator].dia1,"Dia 2",...treino[TypeFator].dia2,"Dia 3",...treino[TypeFator].dia3,"Dia 4",...treino[TypeFator].dia4,"Dia 5",...treino[TypeFator].dia5,"Dia 6",...treino[TypeFator].dia6,"Aviso",...aviso[1].aviso1]

    function gerarPDFTreino() {

        console.log("teste pdf")
        // Crie um novo objeto jsPDF
        const doc = new jsPDF();
      
        // Selecione o elemento que deseja exportar como PDF
        const element = document.getElementById('elemento-pdf');
      
        doc.text(arrayPrintTreino,10,10)
       

        doc.save('treino.pdf');
      }


    return(
        <div>
             <div className="flex flex-col items-center justify-center pt-[20px]" >
                <p className="text-2xl font-bold text-[#8854d0]">Solicitar Treino</p>
            <div className=" w-max h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] ">

                    
                        <p className="my-[20px]">Selecione o fator atividade desejado</p>

                        
                        <p className="my-[20px]">O seu fator atividade atual é: {perfilFator}</p>
                        

                        <div className="my-[20px]">
                            <select name="" id="" onChange={handleFatorChange} className="mr-[20px]">
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>

                            <Buttons type="submit" name="Solicitar" func={onClickSolicitarTreino} />    
                        </div>

                       
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
                        <div className=" shadow-inner p-[20px] m-[10px] duration-500 hover:shadow-2xl ">
                            
                            <p className="my-[10px] font-bold">
                                {aviso[1].aviso1}
                            </p>
                            
                        </div>
                        <div>
                            <Buttons name="Gerar PDF" func={gerarPDFTreino}></Buttons>
                        </div>
                        </div>
                    </div>
                
            </div>
        </div>  
    )
}