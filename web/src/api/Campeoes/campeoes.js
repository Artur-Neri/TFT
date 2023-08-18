const comp = [
  {
    "max":"1",
    "nome": "Darkin",
    "img": "origens-tft/darkin-origem.png",
    "efeitos": "Quando Aatrox ou o usuário da Espada Darkin morre, a Espada Darkin é equipada no Campeão aliado mais próximo, concedendo a ele 450 de Vida e 20% de Vampirismo Universal.",
    "efeitoAdicional": "Depois de ficar equipada no Campeão por 4s, Aatrox ressuscitará quando o usuário morrer."
  },

  {
    "max":"1",
    "nome": "Demacia",
    "img": "origens-tft/demacia-origem.png",
    "efeitos": "Quando Aatrox ou o usuário da Espada Darkin morre, a Espada Darkin é equipada no Campeão aliado mais próximo, concedendo a ele 450 de Vida e 20% de Vampirismo Universal.",
    "efeitoAdicional": "Depois de ficar equipada no Campeão por 4s, Aatrox ressuscitará quando o usuário morrer."
  },

  {
    "max":"4",
    "nome": "Freljord",
    "img": "origens-tft/freljord-origem.png",
    "efeitos": "Depois de 5s, uma tempestade de neve atinge o campo de batalha. Inimigos sofrem uma porcentagem da Vida máxima deles como Dano Verdadeiro e recebem efeitos negativos por 15s.\n\n(2) 5% de Vida, inimigos sofrem 40% de Fatiamento e Fragmentação\n(3) 12% de Vida, inimigos também sofrem 50% de Aumento do Custo de Mana\n(4) 20% de Vida, inimigos também ficam atordoados por 1,5s",
    "efeitoAdicional": "Fatiamento: reduz a Armadura\nFragmentação: reduz a Resistência Mágica\nCusto de Mana: aumenta o Mana máximo até a próxima conjuração"
  },

  {
    "max":"1",
    "nome": "Ionia",
    "img": "origens-tft/ionia-origem.png",
    "efeitos": "A cada 4s, seus Ionianos mais fortes são iluminados para a forma de espírito e recebem 20 de Mana.\n\nCada Ioniano tem um efeito único com sua respectiva habilidade, dobrando quando estiver na forma de espírito.",
    "efeitoAdicional": "(3) 100% Ioniano, 1 iluminado\n(6) 200% Ioniano, 2 iluminados\n(9) 270% Ioniano, 3 iluminados"
  },

  {
    "max":"1",
    "nome": "Noxus",
    "img": "origens-tft/noxus-origem.png",
    "efeitos": "Unidades de Noxus recebem Vida, Poder de Habilidade e Dano de Ataque. Isso aumenta em 10% para cada tipo de adversário diferente que você venceu ou que morreu.",
    "efeitoAdicional": "(3) 175, 15, 15%\n(6) 375, 30, 30%\n(9) 550, 55, 55%"
  },

  {
    "max":"5",
    "nome": "Piltover",
    "img": "origens-tft/piltover-origem.png",
    "efeitos": "Recebe uma T-Hex. Sempre que perder um combate contra jogador, a T-Hex recebe Cargas. Vencer converte as Cargas em Poder para a T-Hex.\n\n Você também pode vender a T-Hex se ela tiver alguma Carga, redefinindo-a e convertendo o Poder dela em espólios.",
    "efeitoAdicional": "(3) Recebe uma T-Hex.\n(6) Recebe espólios adicionais toda rodada. Cada derrota vale como 2."
  },

  {
    "max":"1",
    "nome": "Redentora",
    "img": "origens-tft/redentora-origem.png",
    "efeitos": "Sempre que um aliado ganha Escudo, concede a ele 7% de Velocidade de Ataque cumulativa pelo resto do combate."
  },

  {
    "max":"1",
    "nome": "Ilhas das Sombras",
    "img": "origens-tft/ilha-das-sombras-origem.png",
    "efeitos": "Após causar ou sofrer dano 8 vezes, unidades das Ilhas das Sombras recebem um Escudo por 8s e se tornam Espectrais pelo resto do combate. Unidades Espectrais recebem Mana a cada segundo.",
    "efeitoAdicional": "(2) 40% de Escudo, 10 de Mana\n(4) 70% de Escudo, 15 de Mana\n(6) 100% de Escudo, 20 de Mana"
  },

  {
    "max":"1",
    "nome": "Shurima",
    "img": "origens-tft/shurima-origem.png",
    "efeitos": "A cada 4s, Shurimanes curam 7% da Vida máxima. Depois de 8s, Shurimanes selecionados ascendem e ganham 40% de Vida máxima e 40% de Velocidade de Ataque.",
    "efeitoAdicional": "(3) O Shurimane mais forte ascende\n(5) Todos os Shurimanes ascendem\n(7) TAMBÉM ascendem no início do combate\n(9) +50% do efeito de Ascensão"
  },

  {
    "max":"4",
    "nome": "Targon",
    "img": "origens-tft/targon-origem.png",
    "efeitos": "Suas curas e Escudos são aumentados.",
    "efeitoAdicional": "(2) 18% de cura e Escudo aumentados\n(3) 25% de cura e Escudo aumentados\n(4) 34% de cura e Escudo aumentados"
  },

  {
    "max":"1",
    "nome": "Vazio",
    "img": "origens-tft/vazio-origem.png",
    "efeitos": "Recebe um Ovo do Vazio que pode ser posicionado. No início do combate, ele eclode e revela um horror inexplicável que arremessa os inimigos adjacentes pelos ares.\n\nTodos os níveis de estrela do Vazio aumentam a Vida e o Poder de Habilidade do horror em 25%",
    "efeitoAdicional": "(3) Rêmora do Vazio\n(6) Arauto do Vale\n(8) Barão Na'Shor"
  },

  {
    "max":"1",
    "nome": "Yordle",
    "img": "origens-tft/yordle-origem.png",
    "efeitos": "Suas unidades recebem 10% de Velocidade de Ataque por nível de estrela.\n\nSe você tiver três Campeões 3 estrelas, seus Yordles se tornam 4 estrelas, deixando as habilidades deles bem bizarras!\n\nEmpates de itens são decididos pelo Yordle que foi colocado no campo mais recentemente.",
    "efeitoAdicional": "(3) Seu Yordle 3 estrelas mais forte\n(5) Dois yordles 3 estrelas"
  },

  {
    "max":"1",
    "nome": "Bastião",
    "img": "origens-tft/bastiao-origem.png",
    "efeitos": "Campeões Bastião recebem Armadura e Resistência Mágica. Isso aumenta em 100% nos primeiros 10s do combate.",
    "efeitoAdicional": "(2) +20 de defesa\n(4) +45 de defesa\n(6) +90 de defesa\n(8) +180 de defesa"
  },

  {
    "max":"1",
    "nome": "Zaun",
    "img": "origens-tft/zaun-origem.png",
    "efeitos": "Campeões de Zaun criam Módulos Quimtec aleatórios que só podem ser usados por eles. Campeões podem ser modificados uma vez, enquanto Módulos só podem ser removidos ao vender o Campeão.",
    "efeitoAdicional": "(2) Recebe 1 Módulo Quimtec\n(4) Recebe 2 Módulos Quimtec\n(6) Recebe 3 Módulos Quimtec e Módulos de Sobrecarga"
  },

  {
    "max":"1",
    "nome": "Brutamontes",
    "img": "origens-tft/brutamontes-origem.png",
    "efeitos": "Suas unidades recebem 100 de Vida. Brutamontes recebem mais ainda.",
    "efeitoAdicional": "(2) +15%\n(4) +40%\n(6) +85%"
  },

  {
    "max":"1",
    "nome": "Desafiante",
    "img": "origens-tft/desafiante-origem.png",
    "efeitos": "Desafiantes recebem Velocidade de Ataque adicional. Quando o alvo morre, Desafiantes avançam para um novo alvo e aumentam a Velocidade de Ataque adicional em 50% por 2,5s.",
    "efeitoAdicional": "(2) 30%\n(4) 55%\n(6) 80%\n(8) 110%"
  },

  {
    "max":"1",
    "nome": "Mira Letal",
    "img": "origens-tft/mira-letal-origem.png",
    "efeitos": "Inato: +1 de alcance\n\nA cada 3s, Miras Letais atacam o inimigo com o maior percentual de Vida e causam dano adicional.",
    "efeitoAdicional": "(2) +20% de dano\n(4) +44% de dano\n(6) +100% de dano"
  },

  {
    "max":"1",
    "nome": "Imperatriz",
    "img": "origens-tft/imperatriz-origem.png",
    "efeitos": "Quando Bel'Veth mata inimigos, os abates deixam um rastro de Coral do Vazio que ela consome. O primeiro Coral aumenta a Vida máxima dela em 50%, e Corais posteriores a curam em 20% da Vida máxima.",
    "efeitoAdicional": "Quando um Coral do Vazio é consumido, ela causa 10% de Vida máxima como Dano Mágico a inimigos em até 2 casas adjacentes."
  },

  {
    "max":"1",
    "nome": "Artilheiro",
    "img": "origens-tft/artilheiro-origem.png",
    "efeitos": "Quando Campeões Artilheiros atacam, eles recebem Dano de Ataque adicional, até um máximo de 8 acúmulos.",
    "efeitoAdicional": "(2) 5% de Dano de Ataque por acúmulo\n(4) 10% de Dano de Ataque por acúmulo\n(6) 16% de Dano de Ataque por acúmulo"
  },

  {
    "max":"1",
    "nome": "Emanador",
    "img": "origens-tft/emanador-origem.png",
    "efeitos": "A cada 3s, suas unidades recebem Mana.",
    "efeitoAdicional": "(2) 5\n(4) +10 para Invocadores\n(6) 10 para todos, + 15 para Invocadores"
  },

  {
    "max":"1",
    "nome": "Colosso",
    "img": "origens-tft/colosso-origem.svg",
    "efeitos": "Campeões Colossos sofrem menos dano conforme perdem Vida.",
    "efeitoAdicional": "(2) 10% - 20% de redução de dano\n(4) 20% - 34% de redução de dano\n(6) 30% - 50% de redução de dano"
  },

  {
    "max":"1",
    "nome": "Multiconjurador",
    "img": "origens-tft/multiconjurador-origem.png",
    "efeitos": "Multiconjuradores conjuram suas habilidades múltiplas vezes. Conjurações adicionais têm 50% de eficácia reduzida.",
    "efeitoAdicional": "(2) 1 conjuração extra\n(4) 2 conjurações extras"
  },

  {
    "max":"1",
    "nome": "Ladino",
    "img": "origens-tft/ladino-origem.png",
    "efeitos": "(2) Quando um Ladino fica com menos de 50% de Vida, ele fica inalvejável temporariamente e avança até um inimigo a até 4 casas de distância (dando preferência a inimigos na retaguarda).",
    "efeitoAdicional": "(4) Além disso, o primeiro ataque de um Ladino causa 50% da Vida máxima como Dano Mágico por 5s."
  },

  {
    "max":"1",
    "nome": "Dizimador",
    "dizimadorImg": "origens-tft/dizimador-origem.svg",
    "efeitos": "Dizimadores recebem 15% de Vampirismo Universal.\n\nDizimadores causam dano adicional, duplicado contra unidades com menos de 60% de Vida.",
    "efeitoAdicional": "(2) +5% de dano adicional.\n(3) +10% de dano adicional.\n(4) +25% de dano adicional.\n(5) +35% de dano adicional\n(6) +50% de dano adicional"
  },

  {
    "max":"1",
    "nome": "Feiticeiro",
    "img": "origens-tft/feiticeiro-origem.png",
    "efeitos": "Feiticeiros ganham Poder de Habilidade adicional.\n\nQuando um inimigo morre após sofrer dano de um Feiticeiro, ele causa uma porcentagem da Vida máxima da vítima a outros inimigos.",
    "efeitoAdicional": "(2) 25 ; eletrocuta 1 inimigo, causando 10%\n(4) 45 ; eletrocuta 1 inimigo, causando 15%\n(6) 75 ; eletrocuta 2 inimigos, causando 15%\n(8) 111 ; eletrocuta 2 inimigos, causando 20%"
  },

  {
    "max":"1",
    "nome": "Estratégico",
    "img": "origens-tft/estrategico-origem.png",
    "efeitos": "Início do combate: aliados nas 2 primeiras linhas recebem Escudo por 8s. Aliados nas 2 últimas linhas recebem Poder de Habilidade.",
    "efeitoAdicional": "(2) 200 de Escudo; 20\n(3) 350 de Escudo; 30\n(4) 400 de Escudo; 40\n(5) 550 de Escudo; 55"
  },

  {
    "max":"1",
    "nome": "Tecnogênio",
    "img": "origens-tft/tecnogenio-origem.png",
    "efeitos": "Recebe uma Torre Apex que pode ser posicionada e tem 3 espaços para melhorias. Aprimoramentos da Torre Apex aparecem na sua loja por 6 de ouro. A Torre Apex compartilha a Velocidade de Ataque e o Poder de Habilidade de Heimerdinger.",
    "efeitoAdicional": "Você só pode ter 1 Torre Apex."
  },

  {
    "max":"1",
    "nome": "Errante",
    "img": "origens-tft/errante-origem.png",
    "efeitos": "A habilidade de Ryze muda de acordo com o Portal de Região escolhido pelos jogadores no início da partida."
  }
]

const darkin = comp[0]
const demacia = comp[1]
const freljord = comp[2]
const ionia = comp[3]
const noxus = comp[4]
const piltover = comp[5]
const redentora = comp[6]
const ilha = comp[7]
const shurima = comp[8]
const targon = comp[9]
const vazio = comp[10]
const yordle = comp[11]
const bastiao = comp[12]
const zaun = comp[13]
const brutamontes = comp[14]
const desafiante = comp[15]
const mira = comp[16]
const imperatriz = comp[17]
const artilheiro = comp[18]
const emanador = comp[19]
const colosso = comp[20]
const multiconjurador = comp[21]
const ladino = comp[22]
const dizimador = comp[23]
const feiticeiro = comp[24]
const estrategico = comp[25]
const tecno = comp[26]
const errante = comp[27]

export default ([
  [
    {
      "id": "0",
      "nome": "cassiopeia", 
      "img": "campeoes-tft/cassiopeia.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": noxus.nome, "img": noxus.img, "descricao": noxus.efeitos},
        {"nome": emanador.nome, "img": emanador.img, "descricao": emanador.efeitos},
        {"nome": shurima.nome, "img": shurima.img, "descricao": shurima.efeitos}
      ],
      
    },
    {
      "id": "1",
      "nome": "chogath", 
      "img": "campeoes-tft/chogath.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": vazio.nome, "img": vazio.img, "descricao": vazio.efeitos},
        {"nome": brutamontes.nome, "img": brutamontes.img, "descricao": brutamontes.efeitos}
      ],
      
    },
    {
      "id": "2",
      "nome": "irelia", 
      "img": "campeoes-tft/irelia.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": ionia.nome, "img": ionia.img, "descricao": ionia.efeitos},
        {"nome": desafiante.nome, "img": desafiante.img, "descricao": desafiante.efeitos}
      ],
      
    },
    {
      "id": "3",
      "nome": "jhin", 
      "img": "campeoes-tft/jhin.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": ionia.nome, "img": ionia.img, "descricao": ionia.efeitos},
        {"nome": mira.nome, "img": mira.img, "descricao": mira.efeitos}
      ],
      
    },
    {
      "id": "4",
      "nome": "kayle", 
      "img": "campeoes-tft/kayle.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": demacia.nome, "img": demacia.img, "descricao": demacia.efeitos},
        {"nome": dizimador.nome, "img": dizimador.img, "descricao": dizimador.efeitos}
      ],
      
    },
    {
      "id": "5",
      "nome": "malzahar", 
      "img": "campeoes-tft/malzahar.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": vazio.nome, "img": vazio.img, "descricao": vazio.efeitos},
        {"nome": feiticeiro.nome, "img": feiticeiro.img, "descricao": feiticeiro.efeitos}
      ],
      
    },
    {
      "id": "6",
      "nome": "maokai", 
      "img": "campeoes-tft/maokai.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": ilha.nome, "img": ilha.img, "descricao": ilha.efeitos},
        {"nome": bastiao.nome, "img": bastiao.img, "descricao": bastiao.efeitos}
      ],
      
    },
    {
      "id": "7",
      "nome": "orianna", 
      "img": "campeoes-tft/orianna.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": piltover.nome, "img": piltover.img, "descricao": piltover.efeitos},
        {"nome": feiticeiro.nome, "img": feiticeiro.img, "descricao": feiticeiro.efeitos}
      ],
      
    },
    {
      "id": "8",
      "nome": "poppy", 
      "img": "campeoes-tft/poppy.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": demacia.nome, "img": demacia.img, "descricao": demacia.efeitos},
        {"nome": bastiao.nome, "img": bastiao.img, "descricao": bastiao.efeitos}
      ],
      
    },
    {
      "id": "9",
      "nome": "renekton", 
      "img": "campeoes-tft/renekton.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": brutamontes.nome, "img": brutamontes.img, "descricao": brutamontes.efeitos},
        {"nome": shurima.nome, "img": shurima.img, "descricao": shurima.efeitos}
      ],
      
    },
    {
      "id": "10",
      "nome": "samira", 
      "img": "campeoes-tft/samira.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": noxus.nome, "img": noxus.img, "descricao": noxus.efeitos},
        {"nome": desafiante.nome, "img": desafiante.img, "descricao": desafiante.efeitos}
      ],
      
    },
    {
      "id": "11",
      "nome": "tristana", 
      "img": "campeoes-tft/tristana.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": yordle.nome, "img": yordle.img, "descricao": yordle.efeitos},
        {"nome": artilheiro.nome, "img": artilheiro.img, "descricao": artilheiro.efeitos}
      ],
      
    },
    {
      "id": "12",
      "nome": "viego", 
      "img": "campeoes-tft/viego.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": ilha.nome, "img": ilha.img, "descricao": ilha.efeitos},
        {"nome": ladino.nome, "img": ladino.img, "descricao": ladino.efeitos}
      ],
      
    },
  ],
  
  //  TIER II

  [
    {
      "id": "13",
      "nome": "ashe", 
      "img": "campeoes-tft/ashe.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": freljord.nome, "img": freljord.img, "descricao": freljord.efeitos},
        {"nome": mira.nome, "img": mira.img, "descricao": mira.efeitos}
      ],
      
    },
    {
      "id": "14",
      "nome": "galio", 
      "img": "campeoes-tft/galio.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": demacia.nome, "img": demacia.img, "descricao": demacia.efeitos},
        {"nome": emanador.nome, "img": emanador.img, "descricao": emanador.efeitos}
      ],
      
    },
    {
      "id": "15",
      "nome": "jinx", 
      "img": "campeoes-tft/jinx.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": zaun.nome, "img": zaun.img, "descricao": zaun.efeitos},
        {"nome": artilheiro.nome, "img": artilheiro.img, "descricao": artilheiro.efeitos}
      ],
      
    },
    {
      "id": "16",
      "nome": "kassadin", 
      "img": "campeoes-tft/kassadin.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": vazio.nome, "img": vazio.img, "descricao": vazio.efeitos},
        {"nome": bastiao.nome, "img": bastiao.img, "descricao": bastiao.efeitos}
      ],
      
    },
    {
      "id": "17",
      "nome": "kled", 
      "img": "campeoes-tft/kled.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": yordle.nome, "img": yordle.img, "descricao": yordle.efeitos},
        {"nome": noxus.nome, "img": noxus.img, "descricao": noxus.efeitos},
        {"nome": dizimador.nome, "img": dizimador.img, "descricao": dizimador.efeitos}
      ],
      
    },
    {
      "id": "18",
      "nome": "sett", 
      "img": "campeoes-tft/sett.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": ionia.nome, "img": ionia.img, "descricao": ionia.efeitos},
        {"nome": colosso.nome, "img": colosso.img, "descricao": colosso.efeitos}
      ],
      
    },
    {
      "id": "19",
      "nome": "soraka", 
      "img": "campeoes-tft/soraka.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": emanador.nome, "img": emanador.img, "descricao": emanador.efeitos},
        {"nome": targon.nome, "img": targon.img, "descricao": targon.efeitos}
      ],
      
    },
    {
      "id": "20",
      "nome": "swain", 
      "img": "campeoes-tft/swain.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": noxus.nome, "img": noxus.img, "descricao": noxus.efeitos},
        {"nome": feiticeiro.nome, "img": feiticeiro.img, "descricao": feiticeiro.efeitos},
        {"nome": estrategico.nome, "img": estrategico.img, "descricao": estrategico.efeitos}
      ],
      
    },
    {
      "id": "21",
      "nome": "taliyah", 
      "img": "campeoes-tft/taliyah.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": shurima.nome, "img": shurima.img, "descricao": shurima.efeitos},
        {"nome": multiconjurador.nome, "img": multiconjurador.img, "descricao": multiconjurador.efeitos}
      ],
      
    },
    {
      "id": "22",
      "nome": "teemo", 
      "img": "campeoes-tft/teemo.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": yordle.nome, "img": yordle.img, "descricao": yordle.efeitos},
        {"nome": multiconjurador.nome, "img": multiconjurador.img, "descricao": multiconjurador.efeitos},
        {"nome": estrategico.nome, "img": estrategico.img, "descricao": estrategico.efeitos}
      ],
      
    },
    {
      "id": "23",
      "nome": "vi", 
      "img": "campeoes-tft/vi.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": brutamontes.nome, "img": brutamontes.img, "descricao": brutamontes.efeitos},
        {"nome": piltover.nome, "img": piltover.img, "descricao": piltover.efeitos}
      ],
      
    },
    {
      "id": "24",
      "nome": "warwick", 
      "img": "campeoes-tft/warwick.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": desafiante.nome, "img": desafiante.img, "descricao": desafiante.efeitos},
        {"nome": zaun.nome, "img": zaun.img, "descricao": zaun.efeitos},
        {"nome": colosso.nome, "img": colosso.img, "descricao": colosso.efeitos}
      ],
      
    },
    {
      "id": "25",
      "nome": "zed", 
      "img": "campeoes-tft/zed.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": ionia.nome, "img": ionia.img, "descricao": ionia.efeitos},
        {"nome": ladino.nome, "img": ladino.img, "descricao": ladino.efeitos},
        {"nome": dizimador.nome, "img": dizimador.img, "descricao": dizimador.efeitos}
      ],
      
    },
  ],
  
  // TIER III

  [
    
    {
      "id": "26",
      "nome": "akshan", 
      "img": "campeoes-tft/akshan.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": shurima.nome, "img": shurima.img, "descricao": shurima.efeitos},
        {"nome": mira.nome, "img": mira.img, "descricao": mira.efeitos}
      ],
      
    },
    {
      "id": "27",
      "nome": "darius", 
      "img": "campeoes-tft/darius.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": noxus.nome, "img": noxus.img, "descricao": noxus.efeitos},
        {"nome": colosso.nome, "img": colosso.img, "descricao": colosso.efeitos}
      ],
      
    },
    {
      "id": "28",
      "nome": "ekko", 
      "img": "campeoes-tft/ekko.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": zaun.nome, "img": zaun.img, "descricao": zaun.efeitos},
        {"nome": ladino.nome, "img": ladino.img, "descricao": ladino.efeitos}
      ],
      
    },
    {
      "id": "29",
      "nome": "garen", 
      "img": "campeoes-tft/garen.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": demacia.nome, "img": demacia.img, "descricao": demacia.efeitos},
        {"nome": colosso.nome, "img": colosso.img, "descricao": colosso.efeitos}
      ],
      
    },
    {
      "id": "30",
      "nome": "jayce", 
      "img": "campeoes-tft/jayce.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": piltover.nome, "img": piltover.img, "descricao": piltover.efeitos},
        {"nome": artilheiro.nome, "img": artilheiro.img, "descricao": artilheiro.efeitos}
      ],
      
    },
    {
      "id": "31",
      "nome": "kalista", 
      "img": "campeoes-tft/kalista.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": ilha.nome, "img": ilha.img, "descricao": ilha.efeitos},
        {"nome": desafiante.nome, "img": brutamontes.img, "descricao": brutamontes.efeitos}
      ],
      
    },
    {
      "id": "32",
      "nome": "karma", 
      "img": "campeoes-tft/karma.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": ionia.nome, "img": ionia.img, "descricao": ionia.efeitos},
        {"nome": emanador.nome, "img": emanador.img, "descricao": emanador.efeitos}
      ],
      
    },
    {
      "id": "33",
      "nome": "katarina", 
      "img": "campeoes-tft/katarina.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": noxus.nome, "img": noxus.img, "descricao": noxus.efeitos},
        {"nome": ladino.nome, "img": ladino.img, "descricao": ladino.efeitos}
      ],
      
    },
    {
      "id": "34",
      "nome": "lissandra", 
      "img": "campeoes-tft/lissandra.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": freljord.nome, "img": freljord.img, "descricao": freljord.efeitos},
        {"nome": emanador.nome, "img": emanador.img, "descricao": emanador.efeitos}
      ],
      
    },
    {
      "id": "35",
      "nome": "reksai", 
      "img": "campeoes-tft/reksai.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": vazio.nome, "img": vazio.img, "descricao": vazio.efeitos},
        {"nome": brutamontes.nome, "img": brutamontes.img, "descricao": brutamontes.efeitos}
      ],
      
    },
    {
      "id": "36",
      "nome": "sona", 
      "img": "campeoes-tft/sona.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": demacia.nome, "img": demacia.img, "descricao": demacia.efeitos},
        {"nome": multiconjurador.nome, "img": multiconjurador.img, "descricao": multiconjurador.efeitos}
      ],
      
    },
    {
      "id": "37",
      "nome": "taric", 
      "img": "campeoes-tft/taric.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": targon.nome, "img": targon.img, "descricao": targon.efeitos},
        {"nome": feiticeiro.nome, "img": feiticeiro.img, "descricao": feiticeiro.efeitos},
        {"nome": bastiao.nome, "img": bastiao.img, "descricao": bastiao.efeitos}
      ],
      
    },
    {
      "id": "38",
      "nome": "velkoz", 
      "img": "campeoes-tft/velkoz.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": vazio.nome, "img": vazio.img, "descricao": vazio.efeitos},
        {"nome": feiticeiro.nome, "img": feiticeiro.img, "descricao": feiticeiro.efeitos},
        {"nome": multiconjurador.nome, "img": multiconjurador.img, "descricao": multiconjurador.efeitos}
      ],
      
    },
  ],
  
  // TIER IV

  [
    {
      "id": "39",
      "nome": "aphelios", 
      "img": "campeoes-tft/aphelios.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": mira.nome, "img": mira.img, "descricao": mira.efeitos},
        {"nome": targon.nome, "img": targon.img, "descricao": targon.efeitos},
      ],
      
    },
    {
      "id": "40",
      "nome": "azir", 
      "img": "campeoes-tft/azir.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": shurima.nome, "img": shurima.img, "descricao": shurima.efeitos},
        {"nome": estrategico.nome, "img": estrategico.img, "descricao": estrategico.efeitos},
      ],
      
    },
    {
      "id": "41",
      "nome": "gwen", 
      "img": "campeoes-tft/gwen.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": ilha.nome, "img": ilha.img, "descricao": ilha.efeitos},
        {"nome": dizimador.nome, "img": dizimador.img, "descricao": dizimador.efeitos},
      ],
      
    },
    {
      "id": "42",
      "nome": "jarvaniv", 
      "img": "campeoes-tft/jarvaniv.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": demacia.nome, "img": demacia.img, "descricao": demacia.efeitos},
        {"nome": estrategico.nome, "img": estrategico.img, "descricao": estrategico.efeitos},
      ],
      
    },
    {
      "id": "43",
      "nome": "kaisa", 
      "img": "campeoes-tft/kaisa.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": vazio.nome, "img": vazio.img, "descricao": vazio.efeitos},
        {"nome": desafiante.nome, "img": desafiante.img, "descricao": desafiante.efeitos},
      ],
      
    },
    {
      "id": "44",
      "nome": "lux", 
      "img": "campeoes-tft/lux.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": demacia.nome, "img": demacia.img, "descricao": demacia.efeitos},
        {"nome": feiticeiro.nome, "img": feiticeiro.img, "descricao": feiticeiro.efeitos},
      ],
      
    },
    {
      "id": "45",
      "nome": "nasus", 
      "img": "campeoes-tft/nasus.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": shurima.nome, "img": shurima.img, "descricao": shurima.efeitos},
        {"nome": colosso.nome, "img": colosso.img, "descricao": colosso.efeitos},
      ],
      
    },
    {
      "id": "46",
      "nome": "sejuani", 
      "img": "campeoes-tft/sejuani.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": freljord.nome, "img": freljord.img, "descricao": freljord.efeitos},
        {"nome": brutamontes.nome, "img": brutamontes.img, "descricao": brutamontes.efeitos},
      ],
      
    },
    {
      "id": "47",
      "nome": "shen", 
      "img": "campeoes-tft/shen.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": ionia.nome, "img": ionia.img, "descricao": ionia.efeitos},
        {"nome": emanador.nome, "img": emanador.img, "descricao": emanador.efeitos},
      ],
      
    },
    {
      "id": "48",
      "nome": "urgot", 
      "img": "campeoes-tft/urgot.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": mira.nome, "img": mira.img, "descricao": mira.efeitos},
        {"nome": zaun.nome, "img": zaun.img, "descricao": zaun.efeitos},
      ],
      
    },
    {
      "id": "49",
      "nome": "yasuo", 
      "img": "campeoes-tft/yasuo.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": ionia.nome, "img": ionia.img, "descricao": ionia.efeitos},
        {"nome": desafiante.nome, "img": desafiante.img, "descricao": desafiante.efeitos},
      ],
      
    },
    {
      "id": "50",
      "nome": "zeri", 
      "img": "campeoes-tft/zeri.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": artilheiro.nome, "img": artilheiro.img, "descricao": artilheiro.efeitos},
        {"nome": zaun.nome, "img": zaun.img, "descricao": zaun.efeitos},
      ],
      
    },
  ],
  
  // TIER V

  [
    {
      "id": "51",
      "nome": "aatrox", 
      "img": "campeoes-tft/aatrox.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": darkin.nome, "img": darkin.img, "descricao": darkin.efeitos},
        {"nome": dizimador.nome, "img": dizimador.img, "descricao": dizimador.efeitos},
        {"nome": colosso.nome, "img": colosso.img, "descricao": colosso.efeitos}
      ],
      
    },
    {
      "id": "52",
      "nome": "ahri", 
      "img": "campeoes-tft/ahri.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": ionia.nome, "img": ionia.img, "descricao": ionia.efeitos},
        {"nome": feiticeiro.nome, "img": feiticeiro.img, "descricao": feiticeiro.efeitos}
      ],
      
    },
    {
      "id": "53",
      "nome": "belveth", 
      "img": "campeoes-tft/belveth.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": vazio.nome, "img": vazio.img, "descricao": vazio.efeitos},
        {"nome": imperatriz.nome, "img": imperatriz.img, "descricao": imperatriz.efeitos}
      ],
      
    },
    {
      "id": "54",
      "nome": "heimerdinger", 
      "img": "campeoes-tft/heimerdinger.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": tecno.nome, "img": tecno.img, "descricao": tecno.efeitos},
        {"nome": piltover.nome, "img": piltover.img, "descricao": piltover.efeitos},
        {"nome": yordle.nome, "img": yordle.img, "descricao": yordle.efeitos}
      ],
      
    },
    {
      "id": "55",
      "nome": "ksante", 
      "img": "campeoes-tft/ksante.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": shurima.nome, "img": shurima.img, "descricao": shurima.efeitos},
        {"nome": bastiao.nome, "img": bastiao.img, "descricao": bastiao.efeitos}
      ],
      
    },
    {
      "id": "56",
      "nome": "ryze", 
      "img": "campeoes-tft/ryze.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": errante.nome, "img": errante.img, "descricao": errante.efeitos},
        {"nome": emanador.nome, "img": emanador.img, "descricao": emanador.efeitos}
      ],
      
    },
    {
      "id": "57",
      "nome": "senna", 
      "img": "campeoes-tft/senna.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": ilha.nome, "img": ilha.img, "descricao": ilha.efeitos},
        {"nome": redentora.nome, "img": redentora.img, "descricao": redentora.efeitos},
        {"nome": artilheiro.nome, "img": artilheiro.img, "descricao": artilheiro.efeitos}
      ],
      
    },
    {
      "id": "58",
      "nome": "sion", 
      "img": "campeoes-tft/sion.jpg",
      "descricao": "Habilidade",
      "caracteristica": [
        {"nome": brutamontes.nome, "img": brutamontes.img, "descricao": brutamontes.efeitos},
        {"nome": noxus.nome, "img": noxus.img, "descricao": noxus.efeitos}
      ],
      
    },
  ]
])