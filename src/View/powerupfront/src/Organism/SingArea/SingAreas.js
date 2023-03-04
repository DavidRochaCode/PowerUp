
import { Link } from "react-router-dom";
import { Inputs } from "../../Atomic/Input/Inputs";
import { Buttons } from "../../Atomic/Buttons/Buttons";
import { BackButtons } from "../../Atomic/Buttons/BackButtons";


export function SingAreas({title,subTitle,but1,but2}){
    return(
        <div className='col-span-12  h-max  mx-[80px] flex justify-center items-center'>
            <div className="flex flex-col items-center justify-center w-[400px] h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] ">
                
                <div className="my-[20px]">
                   <h1 className="text-4xl font-bold text-[#8854d0]">{title}</h1> 
                   <h2 className="text-2xl font-medium flex justify-center mt-[10px]">{subTitle}</h2>
                </div>

                <form action="" method="">
                    <div className="my-[20px]">
                    
                        <label htmlFor="" className="text-[#8854d0]">Informe um usuário:</label>
                        <Inputs type="text" place="Nome:"  name="" id="" func=""/>
                    
                    </div>

                    <div className="my-[20px]">
                     
                        <label htmlFor="" className="text-[#8854d0]">Informe um email:</label>
                        <Inputs  type="email" place="Email:" name="" id="" func=""/>
                    
                    </div>

                    <div className="my-[20px]">
                    
                        <label htmlFor="" className="text-[#8854d0]">Informe uma senha:</label>
                        <Inputs type="password" place="Senha:" name="" id="" func=""/>
                    
                    </div>
                    
                    <div className="flex justify-between w-full "> 
                        <div className="my-[20px]">
                            <Buttons name={but1} id="" func=""/>
                        </div>

                        <div className="my-[20px]">
                            <Link to='/login'>
                                <BackButtons name={but2}/>
                            </Link>
                       
                        </div> 
                    </div>
                </form>

            </div>
                
        </div>
    )
}