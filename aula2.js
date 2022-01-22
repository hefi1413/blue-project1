

let history =
        "Se voce esta desempregado, ja tem +30 e até com problemas na área da sáude , certamente esta se sentindo por baixo, desmotivado e inseguro.\n";

    history += 
        "Contudo, você ainda sonha com uma boa residência em um local tranquilo , uma renda média por mês e uma família sob sua responsabilidade ... \n";
    
    history += "Mas, como conseguir meterializar estes sonhos nesta atual realidade ?\n"

    history += 
        "Ainda com estas questões em mente, vc abre seu cliente de email e verifique que irá ocorrer um concurso e que será uma ótima opção para você.\n";
        
    history += 
        "Isso mesmo !!! vc exclama. Essa vaga será será minha!\n";  
    
    history += "Então, vc decide que irá se aplicar no concurso e passar e se tornar um servidor público.";

    console.info( history );
    console.log();
    console.info("Passos para a aprovação");
    console.log("-----------------------------");
    console.log();
    console.info("Você ja prevê no seu planejamento de esctudo:");
    console.log();

    let quest1 = prompt("Que deverá desembolsar alguma grana para adiquirir um bom curso específico/apostila para treinar ?");
    let quest2 = prompt("Que devera utilizar alguma técnica de memorização para àqueles 1/5 de questões impossíveis de se lembrar ?");
    let quest3 = prompt("Que deverá montar um ciclo de estudo para as disciplinas?");
    let quest4 = prompt("Que deverá abdicar de passeios/descanços em alguns finais de semana ?");
    let quest5 = prompt("Que uma alimentação saudável também contribui para a melhora da sua concentração e aprendizado ?");

    var soma =0;
    if(quest1.toUpperCase()=="S" ) {
        soma += 1;
    }

    if(quest2.toUpperCase()=="S" ) {
        soma += 1;
    }

    if(quest3.toUpperCase()=="S" ) {
        soma += 1;
    }

    if(quest4.toUpperCase()=="S" ) {
        soma += 1;
    }

    if(quest5.toUpperCase()=="S" ) {
        soma += 1;
    }


    if (soma == 0 ) {
        console.log("você falha miseravelmente ...");
    }
    else if(soma==1 || soma==2 ) {
        console.log("você falha ,mas consegue desfaçar");
    }
    else if( soma == 3 ) {
        console.log("você chega perto, mas falha por pouco");
    }
    else if( soma == 4 ) {
        console.log("depois de muito esforço vc consegue seu objetivo, porém não de forma perfeita");
    }
    else if(soma == 5 ) {
        console.log("você triunfa de forma inquestionavél e seus feitos serão lembrados por gerações !! :)”);
    }
