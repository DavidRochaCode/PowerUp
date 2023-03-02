import { Input } from "../../Atomic/Input/Input";
import { Button } from "../../Button/Button";

export function LoginArea(){
    return(
        <div className='col-span-12 bg-[#d1d8e0] flex flex-col h-[500px]'>
            <h1>PowerUp</h1>
            <p>Nome do usuário:</p>
            <Input type="text" place="Nome:"/>
            <p>Senha:</p>
            <Input type="password" place="Senha:"/>
            <p>Cadastrar</p>
            <Button name="Login"/>
        </div>
    )
}