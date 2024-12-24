JsonEntrada = '{"numeroCPFCNPJ": "11923474634","linhaCredito": "CPR_CUSTEIOS","propriedadesRurais": [{"numeroCAR": "GO5219803C891C6187E7145CD8AFA6EF1A0236642","numeroMatricula": "1689","caracteristicaPropriedade": "IMOVEL_MEU_E_OUTROS","formaAtuacao": "OUTROS","areaTotalImovel": 29473367.0,"recebimentoArrendamento": 50000.0,"pagamentoArrendamento": 0.0,"dataFinalContrato": "2024-08-31T02:40:26.827+00:00","receitaAgropecuaria": {"producaoAgricola": [{"produtividade": "AGRICOLA","produto": "SOJA","variedade": "SOJA PEQUENA","safra": "SAFRA 1","especificacao": "SACO 60KG","area": 80.0,"pracaComercializacao": "São Domingos, GO","produtividadeIrrigada": {"area": 10.0,"produtividade": 10.3,"unidadeMedida": "ha"},"produtividadeSequeira": {"area": 110.0,"produtividade": 50.0,"unidadeMedida": "ha"}},{"produtividade": "AGRICOLA","produto": "CANA-DE-ACUCAR","variedade": "CANA","safra": "SAFRA 1","especificacao": "SACO 60KG","area": 95.0,"pracaComercializacao": "São Domingos, GO","produtividadeIrrigada": {"area": 10.0,"produtividade": 10.0,"unidadeMedida": "ha"},"produtividadeSequeira": {"area": 110.0,"produtividade": 50.0,"unidadeMedida": "ha"}}],"pecuariaCorte": [{"produtividade": "PECUARIA_CORTE","modeloProducao": "Cria","areaPastagem": 110.0,"totalAnimais": 4000,"quantidadeVendaBezerro": 40,"precoMedioCabeca": 100.0,"terminacao":{"tipo": "Confinamento","quantidades": {"macho-14-arrobas": 5.0,"femea-14-arrobas": 0.0,"macho-18-arrobas": 10.0,"femea-16-arrobas": 8.0,"macho-22-arrobas": 10.0,"femea-20-arrobas": 15.0},"precoMedioPorArroba": 280.0,"pracaComercializacao": "São Domingos, GO"}},{"produtividade": "PECUARIA_CORTE","modeloProducao": "ENGORDA","areaPastagem": 324.0,"totalAnimais": 1005,"quantidadeVendaBezerro": 0,"precoMedioCabeca": 150.0,"terminacao":{"tipo": "CONFINAMENTO","quantidades":{"macho-14-arrobas": 10.0,"femea-14-arrobas": 10.0,"macho-18-arrobas": 15.0,"femea-16-arrobas": 15.0,"macho-22-arrobas": 10.0,"femea-20-arrobas": 10.0},"precoMedioPorArroba": 280.0,"pracaComercializacao": "São Domingos, GO"}}],"pecuariaLeite": [{"produtividade": "PECUARIA_LEITE","totalVacas": 90,"produtividadeMedia": 30.0,"area": 10.0,"pracaComercializacao": "São Domingos, GO"}]}}]}';


//criação é tratamento de json E-AGRO
function eagro(listAgro){
    var listpropriedadesRurais = ' '
   
    try{
       if (listAgro != '' && listAgro != '##'){
         var jsonArrendament = JSON.parse(listAgro)
         
         for (var propriedadesRurais in jsonArrendament['propriedadesRurais']){
           var atividade = 0
           var precoComercLeite = 0
           var recebimentoArrend = 0
           var pagamentoArrend = 0
 
           for (var key in jsonArrendament['propriedadesRurais'][0]["receitaAgropecuaria"]["producaoAgricola"][propriedadesRurais])
            {
                switch (key) {
                    case 'atividade':
                      atividade = jsonArrendament['propriedadesRurais'][0]["receitaAgropecuaria"]["producaoAgricola"][propriedadesRurais][key]
                      break;
                    case 'precoComercializacao':
                      precoComercLeite = jsonArrendament['propriedadesRurais'][0]["receitaAgropecuaria"]["producaoAgricola"][propriedadesRurais][key]
                      break;
                  }
 
            }
           
           for (var key in jsonArrendament['propriedadesRurais'][propriedadesRurais])
            {
             switch (key)
                {
                case 'recebimentoArrendamento':
                    recebimentoArrend = jsonArrendament['propriedadesRurais'][propriedadesRurais][key]
                    break;
                case 'pagamentoArrendamento':
                    pagamentoArrend = jsonArrendament['propriedadesRurais'][propriedadesRurais][key]
                    break;
                }
             
           }
           valores = atividade + ";" + precoComercLeite + ";" +recebimentoArrend + ";" + pagamentoArrend
           if (propriedadesRurais == 0 ){
             listpropriedadesRurais = valores
           } else{
             listpropriedadesRurais = listpropriedadesRurais +"#"+ listpropriedadesRurais;
           }
         }
       }
       return listpropriedadesRurais;
     } catch (e){
       return listpropriedadesRurais;
     }
 }
 
 console.log(eagro(JsonEntrada));



 // JSON de exemplo (substitua pelo seu próprio JSON)
//const JsonEntrada = '{"numeroCPFCNPJ": "11923474634","linhaCredito": "CPR_CUSTEIOS","propriedadesRurais": [{"numeroCAR": "GO5219803C891C6187E7145CD8AFA6EF1A0236642","numeroMatricula": "1689","caracteristicaPropriedade": "IMOVEL_MEU_E_OUTROS","formaAtuacao": "OUTROS","areaTotalImovel": 29473367.0,"recebimentoArrendamento": 50000.0,"pagamentoArrendamento": 0.0,"dataFinalContrato": "2024-08-31T02:40:26.827+00:00","receitaAgropecuaria": {"producaoAgricola": [{"produtividade": "AGRICOLA","produto": "SOJA","variedade": "SOJA PEQUENA","safra": "SAFRA 1","especificacao": "SACO 60KG","area": 80.0,"pracaComercializacao": "São Domingos, GO","produtividadeIrrigada": {"area": 10.0,"produtividade": 10.3,"unidadeMedida": "ha"},"produtividadeSequeira": {"area": 110.0,"produtividade": 50.0,"unidadeMedida": "ha"}},{"produtividade": "AGRICOLA","produto": "CANA-DE-ACUCAR","variedade": "CANA","safra": "SAFRA 1","especificacao": "SACO 60KG","area": 95.0,"pracaComercializacao": "São Domingos, GO","produtividadeIrrigada": {"area": 10.0,"produtividade": 10.0,"unidadeMedida": "ha"},"produtividadeSequeira": {"area": 110.0,"produtividade": 50.0,"unidadeMedida": "ha"}}],"pecuariaCorte": [{"produtividade": "PECUARIA_CORTE","modeloProducao": "Cria","areaPastagem": 110.0,"totalAnimais": 4000,"quantidadeVendaBezerro": 40,"precoMedioCabeca": 100.0,"terminacao":{"tipo": "Confinamento","quantidades": {"macho-14-arrobas": 5.0,"femea-14-arrobas": 0.0,"macho-18-arrobas": 10.0,"femea-16-arrobas": 8.0,"macho-22-arrobas": 10.0,"femea-20-arrobas": 15.0},"precoMedioPorArroba": 280.0,"pracaComercializacao": "São Domingos, GO"}},{"produtividade": "PECUARIA_CORTE","modeloProducao": "ENGORDA","areaPastagem": 324.0,"totalAnimais": 1005,"quantidadeVendaBezerro": 0,"precoMedioCabeca": 150.0,"terminacao":{"tipo": "CONFINAMENTO","quantidades":{"macho-14-arrobas": 10.0,"femea-14-arrobas": 10.0,"macho-18-arrobas": 15.0,"femea-16-arrobas": 15.0,"macho-22-arrobas": 10.0,"femea-20-arrobas": 10.0},"precoMedioPorArroba": 280.0,"pracaComercializacao": "São Domingos, GO"}}],"pecuariaLeite": [{"produtividade": "PECUARIA_LEITE","totalVacas": 90,"produtividadeMedia": 30.0,"area": 10.0,"pracaComercializacao": "São Domingos, GO"}]}}]}';

// Criação e tratamento de JSON E-AGRO
function eagro(listAgro) {
  var listpropriedadesRurais = ' ';

  try {
    if (listAgro != '' && listAgro != '##') {
      var jsonArrendament = JSON.parse(listAgro);

      for (var propriedadesRurais in jsonArrendament['propriedadesRurais']) {
        var atividade = 0;
        var precoComercLeite = 0;
        var recebimentoArrend = 0;
        var pagamentoArrend = 0;
        var area = 0;

        var producaoAgricola = jsonArrendament['propriedadesRurais'][propriedadesRurais]['receitaAgropecuaria']['producaoAgricola'];
        for (var i = 0; i < producaoAgricola.length; i++) {
          switch (producaoAgricola[i]) {
            case producaoAgricola[i]['atividade'] !== undefined:
              atividade = producaoAgricola[i]['atividade'];
              break;
            case producaoAgricola[i]['precoComercializacao'] !== undefined:
              precoComercLeite = producaoAgricola[i]['precoComercializacao'];
              break;
            case producaoAgricola[i]['area'] !== undefined:
              area = producaoAgricola[i]['area'];
              break;
          }
        }

        var propriedades = jsonArrendament['propriedadesRurais'][propriedadesRurais];
        for (var key in propriedades) {
          switch (key) {
            case 'recebimentoArrendamento':
              recebimentoArrend = propriedades[key];
              break;
            case 'pagamentoArrendamento':
              pagamentoArrend = propriedades[key];
              break;
          }
        }

        var pecuariaCorte = propriedades['receitaAgropecuaria']['pecuariaCorte'];
        var modeloProducao = '';
        for (var j = 0; j < pecuariaCorte.length; j++) {
          if (pecuariaCorte[j]['modeloProducao'] !== undefined) {
            modeloProducao = pecuariaCorte[j]['modeloProducao'];
            break; // Saindo do loop após encontrar o modeloProducao
          }
        }

        var valores = atividade + ";" + precoComercLeite + ";" + recebimentoArrend + ";" + pagamentoArrend + ";" + modeloProducao + ";" + area;
        if (propriedadesRurais == 0) {
          listpropriedadesRurais = valores;
        } else {
          listpropriedadesRurais = listpropriedadesRurais + "#" + valores;
        }
      }
    }
    return listpropriedadesRurais;
  } catch (e) {
    return listpropriedadesRurais;
  }
}

console.log(eagro(JsonEntrada));
