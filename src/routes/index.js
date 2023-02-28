import rotas_usuario from "./usuario.routes";
import rotas_imc from "./imc.route";
import rotas_dieta from "./dieta.routes";
import rotas_jantar from "./jantar.routes";
import rotas_cafe from "./cafe.routes";
import rotas_lache_manha from "./lanche_manha.routes";
import rotas_almoco from "./almoco.routes";
import rotas_lanche_tarde from "./lanche_tarde.routes";
import rotas_alimento from "./alimento.routes";
import rotas_treino from "./treino.routes";
import rotas_exer_triceps from "./exer_triceps.routes";
import rotas_exer_deltoides from "./exer_deltoides.routes";
import rotas_exer_peitoral from "./exer_peitoral.routes";
import rotas_exer_gluteo from "./exer_gluteo.routes";
import rotas_exer_coxa from "./exer_coxa.routes";
import rotas_exer_panturrilha from "./exer_panturrilha.routes";
import rotas_exer_dorsal from "./exer_dorsal.routes";
import rotas_exer_biceps from "./exer_biceps.routes";
import rotas_tricepsTreino from "./triceps_treino.routes";
import rotas_deltoidesTreino from "./deltoides_treino.routes";
import rotas_peitoralTreino from "./peitoral_treino.routes";
import rotas_gluteoTreino from "./gluteo_treino.routes";
import rotas_coxaTreino from "./coxa_treino.routes";
import rotas_panturrilhaTreino from "./panturrilha_treino.routes";
import rotas_dorsalTreino from "./dorsal_treino.routes";
import rotas_bicepsTreino from "./biceps_treino.routes";

const rotas = app =>{
    rotas_usuario(app)
    rotas_imc(app)
    rotas_dieta(app)
    rotas_jantar(app)
    rotas_cafe(app)
    rotas_lache_manha(app)
    rotas_almoco(app)
    rotas_lanche_tarde(app)
    rotas_alimento(app)
    rotas_treino(app)
    rotas_exer_triceps(app)
    rotas_exer_deltoides(app)
    rotas_exer_peitoral(app)
    rotas_exer_gluteo(app)
    rotas_exer_coxa(app)
    rotas_exer_panturrilha(app)
    rotas_exer_dorsal(app)
    rotas_exer_biceps(app)
    rotas_tricepsTreino(app)
    rotas_deltoidesTreino(app)
    rotas_peitoralTreino(app)
    rotas_gluteoTreino(app)
    rotas_coxaTreino(app)
    rotas_panturrilhaTreino(app)
    rotas_dorsalTreino(app)
    rotas_bicepsTreino(app)
}

export default rotas