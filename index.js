

var prompt =require('prompt-sync')();

let history =
        `   Se voce esta desempregado, ja tem +30 e/ou problemas na área da sáude , certamente esta se sentindo por baixo, desmotivado e inseguro.

            Contudo, você ainda sonha com uma residência em um bairro tranquilo , uma boa renda por mês e uma família sob sua responsabilidade ... 

            Mas, como conseguir meterializar estes sonhos na atual realidade ?

            Então, ainda com estas questões em mente, vc abre seu cliente de email e percebe que irá ocorrer um concurso público e que será uma ótima opção para você.

            Isso mesmo !!! vc exclama. Essa é minha oportunidade!  
    
            Dessa maneira, já decidido, vc começa a se aplicar para passar no concurso, se tornar um servidor público e iniciar sua jornada. :)`;

    console.log();
    console.log();
    console.info( history );
    console.log();
    console.info("A Jornada do Herói");
    console.log("---------------------------");
    console.log();
    console.info("Segue abaixo 5 perguntas relacionadas ao seu planejamento de esctudo:");
    console.log();

    let quest1 = prompt("1- Você sabe que deverá investir uma grana para adiquirir um bom curso/apostila para treinar ?");
    let quest2 = prompt("2- Ja comprende que deverá utilizar alguma técnica de memorização para 1/5 de questões impossíveis de se lembrar ?");
    let quest3 = prompt("3- Entende que deverá montar um ciclo de estudo para as disciplinas envolvidas?");
    let quest4 = prompt("4- Tmabém sabe que deverá abdicar de passeios/descanços em alguns finais de semana ?");
    let quest5 = prompt("5- Por final, como um bom concurseiro, compreende que uma alimentação saudável também melhora sua concentração e aprendizado ?");

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

    console.log();
    console.info('Resultado');
    console.log("---------------------------");

    if (soma == 0 ) {
        console.info("Você falha miseravelmente ...");
    }
    else if(soma==1 || soma==2 ) {
        console.info("Você falha ,mas consegue desfaçar.");
    }
    else if( soma == 3 ) {
        console.info("Você chega perto, mas falha por pouco");
    }
    else if( soma == 4 ) {
        console.info("Depois de muito esforço vc consegue seu objetivo, porém não de forma perfeita");
    }
    else if(soma == 5 ) {
        console.info("Você triunfa de forma inquestionavél e seus feitos serão lembrados por gerações !!");
    }