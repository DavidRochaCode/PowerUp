export function Buttons({name,id, func,type}){
    return(
        <button className="text-[#8854d0] border border-[#8854d0] duration-500 w-[100px] h-[40px] rounded-[12px] shadow-2xl hover:text-[#fff]  hover:bg-[#8854d0]" type={type} id={id} onClick={func}>{name}</button>
    )
}