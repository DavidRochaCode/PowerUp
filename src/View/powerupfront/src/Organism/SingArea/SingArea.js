import { Input } from "../../Atomic/Input/Input";
import { BackButton } from "../../Button/BackButton";
import { Button } from "../../Button/Button";
import { Link } from "react-router-dom";


export function SingArea({title,subTitle,but1,but2}){
    return(
        <div className='col-span-12  h-max  mx-[80px] flex justify-center items-center'>
            <div className="flex flex-col items-center justify-center w-[400px] h-max p-[50px] shadow-2xl rounded-[12px] my-[30px] ">
                
                <div className="my-[20px]">
                   <h1 className="text-4xl font-bold text-[#8854d0]">{title}</h1> 
                   <h2 className="text-2xl font-medium flex justify-center mt-[10px]">{subTitle}</h2>
                </div>

                <div className="my-[20px]">
                    <form action="" method="">
                        <label htmlFor="" className="text-[#8854d0]">Informe um usuário:</label>
                        <Input type="text" place="Nome:"/>
                    </form>
                </div>

                <div className="my-[20px]">
                    <form action="" method="">  
                        <label htmlFor="" className="text-[#8854d0]">Informe um email:</label>
                        <Input type="email" place="Email:"/>
                    </form>
                </div>

                <div className="my-[20px]">
                    <form action="" method="">  
                        <label htmlFor="" className="text-[#8854d0]">Informe uma senha:</label>
                        <Input type="password" place="Senha:"/>
                    </form>
                </div>

                <div className="flex justify-between w-full ">
                    <div className="my-[20px]">
                        <Button name={but1}/>
                    </div>

                    <div className="my-[20px]">
                        <Link to='/login'>
                            <BackButton name={but2}/>
                        </Link>
                       
                    </div> 
                </div>

                  

            </div>
                
        </div>
    )
}