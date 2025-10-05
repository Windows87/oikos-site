import DropdownSection from "@/app/components/DropdownSection";
import Footer from "@/app/components/Footer";
import MainBackground from "@/app/components/MainBackground";
import TextSection from "@/app/components/TextSection";
import TextWithImageSection from "@/app/components/TextWithImageSection";

const dropDownItems = [
    { 
        label: "Trindade: Deus É", 
        content: "•  Cremos que há um só Deus verdadeiro, que é eterno, não-criado e cuja subsistência está em Si mesmo. Deus é espiritual e pessoal, existindo eternamente em três Pessoas: Pai, Filho e Espírito Santo;\n\n•  Cremos que Pai, Filho e Espírito Santo são iguais em divindade, essência, atributos, perfeições, poder e glória, e atuam de forma perfeitamente complementar na criação e sustentação do mundo, e também na sua redenção e restauração futura. Por isso, são igualmente dignos de nossa adoração e obediência;\n\n•  Cremos que o Deus Triúno é soberano como Criador, Rei e Juiz de todas as coisas. Ele é totalmente amável, santo, justo, íntegro e perfeito em todas Suas ações, pensamentos, mandamentos e propósitos." 
    },
    { 
        label: "Revelação: Deus fala", 
        content: "•  Cremos que Deus Se revela parcialmente a todo ser humano por meio da Revelação geral (natureza criada e consciência humana), mas que é somente pela Revelação especial que alguém pode ter um relacionamento e o conhecimento salvador de Deus;\n\n•  Cremos que a Revelação especial é composta pelas Escrituras do Antigo e Novo Testamento, que formam a inspirada e inerrante Palavra de Deus, cujo centro e ápice é Jesus Cristo, o Filho de Deus – a suprema Revelação de quem Deus é;\n\n•  Cremos que as Escrituras são verdadeiras e autoritativas, e têm a palavra final em todos assuntos de fé e prática. As Escrituras ensinam tudo que precisamos saber acerca de Deus, da salvação e da Realidade, a fim de termos uma vida coerente com a vontade de Deus." 
    },
    { 
        label: "Criação: Deus faz", 
        content: "•  Cremos que Deus criou todas as coisas do nada, sem auxílio externo, e amorosamente preparou o mundo como um presente para a Humanidade, onde podemos alegremente desfrutar de Sua Presença e adorá-Lo;\n\n•  Cremos que Deus criou a Humanidade à Sua imagem e semelhança, de forma que a vida de todo ser humano é sagrada, com valor e dignidade intrínsecos. Onde há uma pessoa, há ali um vestígio da glória de Deus;\n\n•  Cremos que o propósito humano é refletir a glória de Deus em todas as áreas da vida, incluindo o trabalho e cultivo desse mundo – desenvolvendo-o e usufruindo-o de forma responsável, amorosa e justa. Entendemos que todas as coisas só são verdadeiramente boas se desfrutadas segundo o propósito de Deus, pois tudo foi criado por Ele e para Ele;\n\n•  Distintivo teológico: Complementarismo. Cremos que Deus criou homem e mulher em plena igualdade de valor, dignidade e propósito, e que por meio de uma aliança de amor, o casamento, Deus une um homem e uma mulher de forma espiritual, familiar, emocional e física. Nessa aliança, a relação entre ambos se dá por meio de papéis complementares: enquanto o marido é chamado para liderar a família através do serviço sacrificial, a esposa é chamada para ser uma cooperadora forte na missão do cultivo familiar e do mundo." 
    },
    { 
        label: "Queda: Deus julga", 
        content: "•  Cremos que, ao não crerem na Palavra de Deus e optarem por buscar autonomia dEle, nossos primeiros pais foram enganados por Satanás, pecaram e se rebelaram contra o Criador. Isso fez a Humanidade perder o acesso a Deus e cair de sua condição original – essa é a origem de toda morte, dor e mal presentes no mundo;\n\n•  Cremos que a partir dessa Queda, todo ser humano já nasce separado de Deus e vive em oposição a Ele, por natureza herdada e escolha pessoal. O pecado deformou e manchou todas as áreas da Realidade e da vida, e ninguém tem o poder para se livrar de sua triste condição e se achegar a Deus novamente;\n\n•  Cremos que o juízo divino por nosso pecado é a morte eterna – espiritual e física. A Bíblia mostra a condição eterna dos que morrem sem Deus como um lugar de tormento, dor e separação permanente de toda vida e bondade." 
    },
    { 
        label: "Encarnação: Deus vem", 
        content: "•  Cremos que Deus prometeu salvar toda a Criação do pecado e suas consequências por meio de um ser humano – promessa que Ele sustentou e realizou por amor, graça e misericórdia, apesar de merecermos juízo e morte. Essa é boa notícia do evangelho;\n\n•  Cremos que o Deus Filho se fez carne e entrou na História humana como Jesus Cristo, perfeitamente Deus e perfeitamente humano, concebido pelo Espírito Santo e nascido de uma virgem, Maria;\n\n•  Cremos que Jesus nasceu sem pecado e viveu sem pecado, pelo poder do Espírito Santo. Sua vida é a representação perfeita do que todo ser humano foi criado para ser." 
    },
    { 
        label: "Cruz: Deus morre", 
        content: "•  Cremos que ao viver uma vida totalmente santa, Jesus tornou-se o perfeito Representante da Humanidade, e pôde nos substituir perfeitamente ao morrer na cruz. Ali ele escolheu levar sobre si nosso pecado e maldição, recebendo a ira destinada a nós, e morreu a morte que merecíamos pela rebelião contra Deus;\n\n•  Cremos que por seu sacrifício gracioso, Cristo nos livra de todo pecado e maldição de uma vez por todas, não sendo possível acrescentarmos qualquer coisa à sua obra;\n\n•  Cremos que a morte de Jesus é o único meio de sermos perdoados e reconciliados com Deus. Não há outro sacrifício, esforço ou mediador que possa realizar o que Cristo realizou." 
    },
    { 
        label: "Ressurreição: Deus vence", 
        content: "•  Cremos que no terceiro dia Cristo ressuscitou corporalmente pelo poder do Espírito Santo. A ressurreição mostra que sua obra em nosso favor foi eficaz e aceita pelo Pai. Também revela sua vitória sobre a morte, o pecado e poderes malignos que nos oprimiam desde a Queda;\n\n•  Cremos que a ressurreição de Jesus é o primeiro sinal da ressurreição de todas as coisas, que ocorrerá no futuro. O Cristo ressurreto é o primeiro fruto de uma Nova Criação, e todos que são unidos a ele pela fé recebem, aqui e agora, o poder dessa Nova Criação;\n\n•  Cremos que o Cristo ressurreto ascendeu aos céus e tornou-se o Senhor do Universo. Desse lugar ele agora governa seu povo, a Igreja, e conduz a História ao seu fim." 
    },
    { 
        label: "Salvação: Deus resgata", 
        content: "•  Cremos que pelo arrependimento dos pecados e pela fé em Jesus Cristo, somos unidos espiritualmente a ele para receber as bênçãos conquistadas por sua morte e ressurreição: o perdão dos pecados, uma nova justiça, um novo coração, a habitação do Espírito Santo, a inclusão na família de Deus e um novo destino eterno. Isso é o que a Bíblia chama de 'salvação';\n\n•  Cremos que a salvação ocorre somente pela graça imerecida de Deus, e é recebida somente pela fé em Cristo. Essa salvação não é resultado de nenhuma obra, moralidade ou religiosidade humanas;\n\n•  Cremos que a salvação conquistada por Jesus precisa ser operada em cada pessoa por uma obra interior do Espírito Santo, que nos capacita a nos arrepender e crer. Assim, a salvação envolve tanto a soberania divina (o Espírito nos capacita a crer em Jesus) quanto a responsabilidade humana (precisamos crer em Jesus);\n\n•  Distintivo teológico: A segurança dos salvos. Cremos que aqueles que estão em Cristo estão eternamente seguros em sua salvação, não podendo cair dessa condição por pecados e falhas. Se uma pessoa vive de maneira incoerente com o evangelho de forma sistemática e contínua, isso é sinal de que não houve salvação verdadeiramente." 
    },
    { 
        label: "Santificação: Deus transforma", 
        content: "•  Cremos que a salvação não muda apenas nossa eternidade, mas também a vida presente. A santificação do salvo é a jornada na qual somos moldados à imagem de Jesus Cristo, conforme o Espírito Santo transforma, dia a dia, nossas vontades e amores, e conforme respondemos a isso em fé e obediência;\n\n•  Cremos que santificação significa crescer em dependência, obediência e amor a Deus com tudo que somos e temos. Isso envolve nosso tempo, finanças, caráter, prioridades, relacionamentos, sexualidade, vocação e trabalho. A santificação também nos faz crescer em amor, serviço e generosidade ao próximo com tudo que somos e temos;\n\n•  Cremos que a jornada da santificação é marcada, por um lado, por pecados e inconstância da nossa parte – o que nos faz necessitar de perdão, consolo e correção diários. Por outro lado, o Espírito Santo está continuamente operando Sua graça para nos levar à maturidade." 
    },
    { 
        label: "Igreja: Deus envia", 
        content: "•  Cremos que a Igreja é composta por aqueles que confessam Cristo como Senhor e Salvador. Na Igreja estão pessoas de todos os tempos e lugares da História – incluindo gente de todas as tribos, classes, povos, línguas, etnias e nações. Essa Igreja universal se manifesta e se organiza em comunidades locais por todo o mundo;\n\n•  Cremos que a Igreja é enviada ao mundo para realizar a missão de testemunhar de Cristo, proclamar o evangelho e fazer discípulos para Jesus. Essa missão é o grande propósito da Igreja, e tudo que ela faz deve ter isso como finalidade máxima;\n\n•  Cremos que as igrejas locais existem para a edificação, capacitação, consolo, serviço e encorajamento dos crentes, conforme eles se reúnem semanalmente para adorar a Deus, ouvir e falar a Palavra, interceder uns pelos outros, participar dos sacramentos, apoiar financeiramente, viver em comunidade amorosa – sendo assim empoderados pelo Espírito Santo para realizar a missão;\n\n•  Distintivo teológico: Atualidade dos dons espirituais. Cremos que Deus ainda hoje dá dons espirituais ao Seu povo, capacitando-o para servir, cuidar e edificar uns aos outros e proclamar o evangelho ao mundo. Todos os dons descritos na Bíblia são para edificação e unidade, devendo ser exercitados com alegria, confiança e moderação, sempre priorizando a edificação comunitária;\n\n•  Distintivo teológico: Liderança plural da igreja. Cremos que a igreja deve ser liderada por uma pluralidade de presbíteros/pastores, responsáveis por nutrir, proteger, conduzir e supervisionar os membros e demais líderes da igreja. O ofício de presbítero/pastor é reservado a homens maduros, qualificados e reconhecidos pela igreja por sua piedade e capacidade de ensino, mas todas as práticas do ministério da igreja são abertas para homens e mulheres – seja liderar, ensinar, cuidar, aconselhar, servir ou administrar." 
    },
    { 
        label: "Sacramentos: Deus confirma", 
        content: "•  Cremos que Cristo deixou dois sacramentos para a Igreja. Essas são práticas comunitárias que servem como sinal e selo da salvação: são 'sinais' pois ilustram de forma visível o evangelho, e são 'selos' porque Deus as usa para confirmar o evangelho em nosso coração e fortalecer nossa fé;\n\n•  Cremos que o batismo é o primeiro sacramento. Ele é um sinal pois ilustra nossa união na morte e ressurreição de Jesus – quando morremos para a antiga vida e ressuscitamos para a nova vida –, e é um selo pois fortalece a confiança de que agora pertencemos a Cristo e ao Seu povo. Mesmo sendo um mandamento, o ato do batismo em si não tem poder para salvar, pois somos salvos pela graça de Deus mediante a fé somente;\n\n•  Cremos que o segundo sacramento é a Santa Ceia. Ela é um sinal pois ilustra como Cristo é a fonte de toda nossa vida e provisão, e é um selo pois aumenta nossa fé na obra de Jesus em nosso favor – simbolizados pela participação no pão (o corpo rasgado de Jesus) e no vinho (seu sangue derramado);\n\n•  Distintivo teológico: Batismo com confissão de fé, por imersão. Cremos que no Novo Testamento o batismo era feito por imersão nas águas, e apenas para os que professavam a fé de forma individual. Por isso não batizamos bebês; mas os apresentamos à comunidade;\n\n•  Distintivo teológico: Ceia para cristãos batizados. Cremos que a Ceia deve ser celebrada com discernimento e autoexame, e que a participação nela é reservada a cristãos que confirmaram sua fé em Cristo por meio do batismo." 
    },
    { 
        label: "O Reino: Deus voltará", 
        content: "•  Cremos que o Senhor Jesus voltará de forma pessoal e corpórea para julgar vivos e mortos, e então reinar eternamente. Ele destruirá para sempre todo mal, morte e poder inimigo, e estabelecerá Seu Reino eterno sobre Seu povo ressurreto, que viverá em uma Nova Criação, perfeitamente restaurada;\n\n•  Cremos que a volta de Jesus é iminente, mas reconhecemos que a Bíblia não descreve com clareza a ordem dos eventos futuros, e por isso não estabelecemos modelos rígidos acerca destas coisas;\n\n•  Cremos que o ensino sobre o retorno de Cristo nos convida a uma nova perspectiva da vida terrena aqui e agora, além de inspirar em nós alegria, esperança e perseverança enquanto nos empenhamos no serviço e na missão à espera do Reino de Deus." 
    }
]

export default function AboutUs() {
    return (
        <>
        <MainBackground
            backgroundImage="https://i.imgur.com/hwmfftt.png"
            title="Sobre Nós"
            description="Descubra o porquê nascemos e no que acreditamos."
            firstButtonText="Por quê?"
            secondButtonText="O que acreditamos"
            firstButtonLink="#por-que"
            secondButtonLink="#declaracao-de-fe"
        />
        <TextSection
            id="por-que"
            title="Por que Nascemos?"
            textSize="28px"
            text="Reconhecemos que São Carlos tem excelentes igrejas, e damos graças a Deus por todos esses nossos irmãos e comunidades. Mas também reconhecemos que há uma enorme parcela de nossa cidade - composta por estudantes e profissionais mais seculares, intelectuais e plurais - que ainda não tem sido alcançada pelo evangelho. É pensando nessas pessoas que decidimos iniciar a Oikos (palavra grega para “casa”, “família”), com o profundo desejo de ser uma Casa para todos crescerem no seu relacionamento com Jesus."
        />
        <DropdownSection
            id="declaracao-de-fe"
            title="Declaração de Fé"
            list={dropDownItems}
        />
        <TextWithImageSection
            topTitle="Venha nos Conhecer"
            title="Venha nos Conhecer no Domingo!"
            text="Temos cultos todos os Domingos e esperamos você aqui ;)"
            imageSrc="https://i.imgur.com/KjpLLyq.png"
            firstButtonText="Visitar"
            firstButtonLink="/nosso-culto"
        />
        <Footer />
        </>
    );
}