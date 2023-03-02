import rotas_usuario from "./usuario.routes";
import rotas_imc from "./imc.route";
import rotas_jantar from "./jantar.routes";
import rotas_cafe from "./cafe.routes";
import rotas_lache_manha from "./lanche_manha.routes";
import rotas_almoco from "./almoco.routes";
import rotas_lanche_tarde from "./lanche_tarde.routes";
import rotas_exer_segunda from "./exer_segunda.routes";
import rotas_exer_terca from "./exer_terca.routes";
import rotas_exer_quarta from "./exer_quarta.routes";
import rotas_exer_quinta from "./exer_quinta.routes";
import rotas_exer_sexta from "./exer_sexta.routes";
import rotas_exer_sabado from "./exer_sabado.routes";
import rotas_exer_domingo from "./exer_domingo.routes";



const rotas = app =>{
    rotas_usuario(app)
    rotas_imc(app)
    rotas_jantar(app)
    rotas_cafe(app)
    rotas_lache_manha(app)
    rotas_almoco(app)
    rotas_lanche_tarde(app)
    rotas_exer_segunda(app)
    rotas_exer_terca(app)
    rotas_exer_quarta(app)
    rotas_exer_quinta(app)
    rotas_exer_sexta(app)
    rotas_exer_sabado(app)
    rotas_exer_domingo(app)
    
}

export default rotas