import { Footers } from "../Footers/Footers";
import { Headers } from "../Headers.js/Headers";
import { Link } from "react-router-dom";
import { BackButtons } from "../../Atomic/Buttons/BackButtons";
import { Buttons } from "../../Atomic/Buttons/Buttons";
import axios, { isCancel, AxiosError } from "axios";
import response from "react";
import { useEffect, useState } from "react";


export function VerDieta(){
    

    axios.defaults.headers.common['Authorization'] = `Bearer `

    const [ lanchesTarde, getLanchesTarde] = useState([])
    const[almoco, getAlmoco] = useState([])
    const[cafe, getCafe] = useState([])
    const[janta, getJanta] = useState([])
    const [ lanchesManha, getLanchesManha] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/lanche-da-tarde")
        .then((response) => {
            getLanchesTarde(response.data)
        })
        .catch(() =>{
            console.log("deu tudo errado")
        })


        axios.get("http://localhost:3001/almoco")
        .then((response)=>{
            getAlmoco(response.data)
        })
        .catch(()=>{
            console.log("Há algum problema")
        })

        axios.get("http://localhost:3001/cafe")
        .then((response)=>{
            getCafe(response.data)
        })
        .catch(()=>{
            console.log("Há algum problema")
        })

        axios.get("http://localhost:3001/jantar")
        .then((response)=>{
            getJanta(response.data)
        })
        .catch(()=>{
            console.log("Há algum problema")
        })

        axios.get("http://localhost:3001/lanche-da-manha")
        .then((response)=>{
            getLanchesManha(response.data)
        })
        .catch(()=>{
            console.log("Há algum problema")
        })

    },[])


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
                        <p>cafe:</p>
        
                    {cafe.map((cafe,key) =>{
                    return(
                        <p>{
                            "Nome: "
                            +cafe.nome_alimento +", Quantidade: "
                            + cafe.quantidade+", Proteínas: "
                            + cafe.proteina +", Carboidratos "
                            + cafe.carboidrato +", Gorduras "
                            + cafe.gordura +"."
                            }</p>
                        )
                    })}

                <br></br>
                <p>Lanche da Manhã:</p>
                    {lanchesManha.map((lanchesManha,key) =>{
                    return(
                        <p>{
                            "Nome: "
                            +lanchesManha.nome_alimento +", Quantidade: "
                            + lanchesManha.quantidade+", Proteínas: "
                            + lanchesManha.proteina +", Carboidratos "
                            + lanchesManha.carboidrato +", Gorduras "
                            + lanchesManha.gordura +"."
                            }</p>
                    )
                    })}

                <br></br>
                <p>Almoco:</p>
                    {almoco.map((almoco,key) =>{
                    return(
                        <p>{
                            "Nome: "
                            +almoco.nome_alimento +", Quantidade: "
                            + almoco.quantidade+", Proteínas: "
                            + almoco.proteina +", Carboidratos "
                            + almoco.carboidrato +", Gorduras "
                            + almoco.gordura +"."
                            }</p>
                    )
                })}
                <br></br>
                <p>Lanche da Tarde:</p>
                {lanchesTarde.map((lanche,key) =>{
                return(
                    <p>{
                        "Nome: "
                        +lanche.nome_alimento +", Quantidade: "
                        + lanche.quantidade+", Proteínas: "
                        + lanche.proteina +", Carboidratos "
                        + lanche.carboidrato +", Gorduras "
                        + lanche.gordura +"."
                        }</p>
                )
            })}
                <br></br>
                <p>Jantar:</p>

                    {janta.map((janta,key) =>{
                    return(
                        <p>{
                            "Nome: "
                            +janta.nome_alimento +", Quantidade: "
                            + janta.quantidade+", Proteínas: "
                            + janta.proteina +", Carboidratos "
                            + janta.carboidrato +", Gorduras "
                            + janta.gordura +"."
                            }</p>
                    )
                    })}
                    <br></br>
            
                <Buttons name="Deletar" func={()=>{
                    axios.delete(`http://localhost:3001/cafe-delete`)
                    axios.delete(`http://localhost:3001/almoco-delete`)
                    axios.delete(`http://localhost:3001/jantar-delete`)
                    axios.delete(`http://localhost:3001/lanche-da-tarde-delete`)
                    axios.delete(`http://localhost:3001/lanche-da-manha-delete`)
                    // eslint-disable-next-line no-restricted-globals
                    location.reload()
                    
                }} /> 

                <Buttons name="Gerar PDF"></Buttons>
            </div>

        
        </div> 
        
        <Footers/>
        </div>
        
    )
}