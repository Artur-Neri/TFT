const comp = [
  {
    "darkin": "Darkin",
    "darkinImg": "origens-tft/darkin-origem.png",
    "darkinEfeitos": "Quando Aatrox ou o usuário da Espada Darkin morre, a Espada Darkin é equipada no Campeão aliado mais próximo, concedendo a ele 450 de Vida e 20% de Vampirismo Universal.",
    "efeitoAdicional": "Depois de ficar equipada no Campeão por 4s, Aatrox ressuscitará quando o usuário morrer."
  },

  {
    "demacia": "Demacia",
    "demaciaImg": "origens-tft/demacia-origem.png",
    "demaciaEfeitos": "Durante a Fase de Planejamento, seus Demacianos mais fortes se tornam Elite e equipam um Item Radiante aleatório para o próximo combate. Elites concedem Armadura e Resistência Mágica a si mesmos e a aliados adjacentes, mas o efeito não acumula. Itens Radiantes são versões melhoradas de itens completos.",
    "efeitoAdicional": "(3) 1 Elite, +10, +10\n(5) 2 Elites, +15, +15\n(7) 3 Elites, +80, +80\n(9) 5 Elites, +180, +180"
  },

  {
    "freijord": "Freljord",
    "efeitos": "Depois de 5s, uma tempestade de neve atinge o campo de batalha. Inimigos sofrem uma porcentagem da Vida máxima deles como Dano Verdadeiro e recebem efeitos negativos por 15s.\n\n(2) 5% de Vida, inimigos sofrem 40% de Fatiamento e Fragmentação\n(3) 12% de Vida, inimigos também sofrem 50% de Aumento do Custo de Mana\n(4) 20% de Vida, inimigos também ficam atordoados por 1,5s",
    "efeitoAdicional": "Fatiamento: reduz a Armadura\nFragmentação: reduz a Resistência Mágica\nCusto de Mana: aumenta o Mana máximo até a próxima conjuração"
  },

  {
    "ionia": "Ionia",
    "efeitos": "A cada 4s, seus Ionianos mais fortes são iluminados para a forma de espírito e recebem 20 de Mana.\n\nCada Ioniano tem um efeito único com sua respectiva habilidade, dobrando quando estiver na forma de espírito.",
    "efeitoAdicional": "(3) 100% Ioniano, 1 iluminado\n(6) 200% Ioniano, 2 iluminados\n(9) 270% Ioniano, 3 iluminados"
  },

  {
    "noxus": "Noxus",
    "efeitos": "Unidades de Noxus recebem Vida, Poder de Habilidade e Dano de Ataque. Isso aumenta em 10% para cada tipo de adversário diferente que você venceu ou que morreu.",
    "efeitoAdicional": "(3) 175, 15, 15%\n(6) 375, 30, 30%\n(9) 550, 55, 55%"
  },

  {
    "piltover": "Piltover",
    "efeitos": "Recebe uma T-Hex. Sempre que perder um combate contra jogador, a T-Hex recebe Cargas. Vencer converte as Cargas em Poder para a T-Hex.\n\n Você também pode vender a T-Hex se ela tiver alguma Carga, redefinindo-a e convertendo o Poder dela em espólios.",
    "efeitoAdicional": "(3) Recebe uma T-Hex.\n(6) Recebe espólios adicionais toda rodada. Cada derrota vale como 2."
  },

  {
    "redentora": "Redentora",
    "efeitos": "Sempre que um aliado ganha Escudo, concede a ele 7% de Velocidade de Ataque cumulativa pelo resto do combate."
  },

  {
    "ilha": "Ilhas das Sombras",
    "efeitos": "Após causar ou sofrer dano 8 vezes, unidades das Ilhas das Sombras recebem um Escudo por 8s e se tornam Espectrais pelo resto do combate. Unidades Espectrais recebem Mana a cada segundo.",
    "efeitoAdicional": "(2) 40% de Escudo, 10 de Mana\n(4) 70% de Escudo, 15 de Mana\n(6) 100% de Escudo, 20 de Mana"
  },

  {
    "shurima": "Shurima",
    "efeitos": "A cada 4s, Shurimanes curam 7% da Vida máxima. Depois de 8s, Shurimanes selecionados ascendem e ganham 40% de Vida máxima e 40% de Velocidade de Ataque.",
    "efeitoAdicional": "(3) O Shurimane mais forte ascende\n(5) Todos os Shurimanes ascendem\n(7) TAMBÉM ascendem no início do combate\n(9) +50% do efeito de Ascensão"
  },

  {
    "targon": "Targon",
    "efeitos": "Suas curas e Escudos são aumentados.",
    "efeitoAdicional": "(2) 18% de cura e Escudo aumentados\n(3) 25% de cura e Escudo aumentados\n(4) 34% de cura e Escudo aumentados"
  },

  {
    "vazio": "Vazio",
    "efeitos": "Recebe um Ovo do Vazio que pode ser posicionado. No início do combate, ele eclode e revela um horror inexplicável que arremessa os inimigos adjacentes pelos ares.\n\nTodos os níveis de estrela do Vazio aumentam a Vida e o Poder de Habilidade do horror em 25%",
    "efeitoAdicional": "(3) Rêmora do Vazio\n(6) Arauto do Vale\n(8) Barão Na'Shor"
  },

  {
    "yordle": "Yordle",
    "efeitos": "Suas unidades recebem 10% de Velocidade de Ataque por nível de estrela.\n\nSe você tiver três Campeões 3 estrelas, seus Yordles se tornam 4 estrelas, deixando as habilidades deles bem bizarras!\n\nEmpates de itens são decididos pelo Yordle que foi colocado no campo mais recentemente.",
    "efeitoAdicional": "(3) Seu Yordle 3 estrelas mais forte\n(5) Dois yordles 3 estrelas"
  },

  {
    "bastiao": "Bastião",
    "efeitos": "Campeões Bastião recebem Armadura e Resistência Mágica. Isso aumenta em 100% nos primeiros 10s do combate.",
    "efeitoAdicional": "(2) +20 de defesa\n(4) +45 de defesa\n(6) +90 de defesa\n(8) +180 de defesa"
  },

  {
    "zaun": "Zaun",
    "efeitos": "Campeões de Zaun criam Módulos Quimtec aleatórios que só podem ser usados por eles. Campeões podem ser modificados uma vez, enquanto Módulos só podem ser removidos ao vender o Campeão.",
    "efeitoAdicional": "(2) Recebe 1 Módulo Quimtec\n(4) Recebe 2 Módulos Quimtec\n(6) Recebe 3 Módulos Quimtec e Módulos de Sobrecarga"
  },

  {
    "brutamontes": "Brutamontes",
    "efeitos": "Suas unidades recebem 100 de Vida. Brutamontes recebem mais ainda.",
    "efeitoAdicional": "(2) +15%\n(4) +40%\n(6) +85%"
  },

  {
    "desafiante": "Desafiante",
    "efeitos": "Desafiantes recebem Velocidade de Ataque adicional. Quando o alvo morre, Desafiantes avançam para um novo alvo e aumentam a Velocidade de Ataque adicional em 50% por 2,5s.",
    "efeitoAdicional": "(2) 30%\n(4) 55%\n(6) 80%\n(8) 110%"
  },

  {
    "mira": "Mira Letal",
    "efeitos": "Inato: +1 de alcance\n\nA cada 3s, Miras Letais atacam o inimigo com o maior percentual de Vida e causam dano adicional.",
    "efeitoAdicional": "(2) +20% de dano\n(4) +44% de dano\n(6) +100% de dano"
  },

  {
    "imperatriz": "Imperatriz",
    "efeitos": "Quando Bel'Veth mata inimigos, os abates deixam um rastro de Coral do Vazio que ela consome. O primeiro Coral aumenta a Vida máxima dela em 50%, e Corais posteriores a curam em 20% da Vida máxima.",
    "efeitoAdicional": "Quando um Coral do Vazio é consumido, ela causa 10% de Vida máxima como Dano Mágico a inimigos em até 2 casas adjacentes."
  },

  {
    "artilheiro": "Artilheiro",
    "efeitos": "Quando Campeões Artilheiros atacam, eles recebem Dano de Ataque adicional, até um máximo de 8 acúmulos.",
    "efeitoAdicional": "(2) 5% de Dano de Ataque por acúmulo\n(4) 10% de Dano de Ataque por acúmulo\n(6) 16% de Dano de Ataque por acúmulo"
  },

  {
    "emanador": "Emanador",
    "efeitos": "A cada 3s, suas unidades recebem Mana.",
    "efeitoAdicional": "(2) 5\n(4) +10 para Invocadores\n(6) 10 para todos, + 15 para Invocadores"
  },

  {
    "colosso": "Colosso",
    "efeitos": "Campeões Colossos sofrem menos dano conforme perdem Vida.",
    "efeitoAdicional": "(2) 10% - 20% de redução de dano\n(4) 20% - 34% de redução de dano\n(6) 30% - 50% de redução de dano"
  },

  {
    "multi": "Multiconjurador",
    "efeitos": "Multiconjuradores conjuram suas habilidades múltiplas vezes. Conjurações adicionais têm 50% de eficácia reduzida.",
    "efeitoAdicional": "(2) 1 conjuração extra\n(4) 2 conjurações extras"
  },

  {
    "ladino": "Ladino",
    "efeitos": "(2) Quando um Ladino fica com menos de 50% de Vida, ele fica inalvejável temporariamente e avança até um inimigo a até 4 casas de distância (dando preferência a inimigos na retaguarda).",
    "efeitoAdicional": "(4) Além disso, o primeiro ataque de um Ladino causa 50% da Vida máxima como Dano Mágico por 5s."
  },

  {
    "dizimador": "Dizimador",
    "efeitos": "Dizimadores recebem 15% de Vampirismo Universal.\n\nDizimadores causam dano adicional, duplicado contra unidades com menos de 60% de Vida.",
    "efeitoAdicional": "(2) +5% de dano adicional.\n(3) +10% de dano adicional.\n(4) +25% de dano adicional.\n(5) +35% de dano adicional\n(6) +50% de dano adicional"
  },

  {
    "feiticeiro": "Feiticeiro",
    "efeitos": "Feiticeiros ganham Poder de Habilidade adicional.\n\nQuando um inimigo morre após sofrer dano de um Feiticeiro, ele causa uma porcentagem da Vida máxima da vítima a outros inimigos.",
    "efeitoAdicional": "(2) 25 ; eletrocuta 1 inimigo, causando 10%\n(4) 45 ; eletrocuta 1 inimigo, causando 15%\n(6) 75 ; eletrocuta 2 inimigos, causando 15%\n(8) 111 ; eletrocuta 2 inimigos, causando 20%"
  },

  {
    "estrategico": "Estratégico",
    "efeitos": "Início do combate: aliados nas 2 primeiras linhas recebem Escudo por 8s. Aliados nas 2 últimas linhas recebem Poder de Habilidade.",
    "efeitoAdicional": "(2) 200 de Escudo; 20\n(3) 350 de Escudo; 30\n(4) 400 de Escudo; 40\n(5) 550 de Escudo; 55"
  },

  {
    "tecno": "Tecnogênio",
    "efeitos": "Recebe uma Torre Apex que pode ser posicionada e tem 3 espaços para melhorias. Aprimoramentos da Torre Apex aparecem na sua loja por 6 de ouro. A Torre Apex compartilha a Velocidade de Ataque e o Poder de Habilidade de Heimerdinger.",
    "efeitoAdicional": "Você só pode ter 1 Torre Apex."
  },

  {
    "errante": "Errante",
    "efeitos": "A habilidade de Ryze muda de acordo com o Portal de Região escolhido pelos jogadores no início da partida."
  }
]

const composicoes = comp[0]

export default ([
  [
    {
      "nome": "aatrox", 
      "img": "campeoes-tft/aatrox.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": composicoes.darkin, "img": composicoes.darkinImg, "descricao": composicoes.darkinEfeitos},
        {"nome": "colosso", "img": "origens-tft/demacia-origem.png", "descricao": "descricao da origem 2"},
        {"nome": "dizimador", "img": "origens-tft/demacia-origem.png", "descricao": "descricao da origem 3"},
        
      ]
    },
    {"nome": "orianna", "img": "campeoes-tft/orianna.jpg"}
  ],
  
  [
    {"nome": "aatrox", "img": "campeoes-tft/aatrox.jpg"},
    {"nome": "aatrox", "img": "campeoes-tft/aatrox.jpg"}
  ],
  
  [
    {"nome": "aatrox", "img": "campeoes-tft/aatrox.jpg"},
    {"nome": "aatrox", "img": "campeoes-tft/aatrox.jpg"}
  ],
  
  [
    {"nome": "aatrox", "img": "campeoes-tft/aatrox.jpg"},
    {"nome": "aatrox", "img": "campeoes-tft/aatrox.jpg"}
  ],
  
  [
    {"nome": "aatrox", "img": "campeoes-tft/aatrox.jpg"},
    {"nome": "aatrox", "img": "campeoes-tft/aatrox.jpg"}
  ]
])