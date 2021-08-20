import { createServer, Model } from 'miragejs';

export default function makeServer() {
  createServer({
    models: {
      continents: Model,
    },

    seeds(server) {
      server.db.loadData({
        continents: [
          {
            id: 1,
            name: 'Europa',
            description: 'O continente mais antigo',
            image: '/europe.png',
            info: {
              text: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
              countries: 44,
              spokenLanguages: 24,
              cities100: 32,
              cities: [
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
              ],
            },
          },
          {
            id: 2,
            name: 'América do Norte',
            description: 'A terra do capitão américa',
            image: '/north.png',
            info: {
              text: 'A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte mais setentrional da América, separada da América Central na fronteira entre o México e a Guatemala, a segunda classificação reconhece apenas uma América do Norte e uma América do Sul, traçando o limite no Istmo do Panamá (umas vezes no Canal do Panamá, outras na fronteira entre o Panamá e a Colômbia). Pela última definição, a América do Norte incluiria a América Central Continental e Insular (Caribe).',
              countries: 23,
              spokenLanguages: 3,
              cities100: 7,
              cities: [
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
              ],
            },
          },
          {
            id: 3,
            name: 'América do Sul',
            description: 'As melhores praias',
            image: '/south.png',
            info: {
              text: 'A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial. Une-se à América Central a norte pelo istmo do Panamá e se separa da Antártida ao sul pelo estreito de Drake. Tem uma extensão de 7 500 km desde o mar do Caribe até ao cabo Horn, ponto extremo sul do continente. Os outros pontos extremos da América do Sul são: ao norte a Punta Gallinas, na Colômbia, ao leste a Ponta do Seixas, no Brasil, e a oeste a Punta Pariñas, no Peru. Seus limites naturais são: ao norte com o mar do Caribe; a leste, nordeste e sudeste com o oceano Atlântico; e a oeste com o oceano Pacífico. O Brasil representa atualmente a metade da população e produto econômico desta região.',
              countries: 14,
              spokenLanguages: 37,
              cities100: 6,
              cities: [
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
              ],
            },
          },
          {
            id: 4,
            name: 'Ásia',
            description: 'O maior continente',
            image: '/asia.png',
            info: {
              text: 'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering.',
              countries: 48,
              spokenLanguages: 2300,
              cities100: 43,
              cities: [
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
              ],
            },
          },
          {
            id: 5,
            name: 'África',
            description: 'De praias à safaris',
            image: '/africa.png',
            info: {
              text: 'A África é o terceiro continente mais extenso (depois da Ásia e da América) com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com cerca de um bilhão de pessoas (estimativa para 2005), representando cerca de um sétimo da população mundial, e 54 países independentes. Tem se transformado na ultima década em uma continente cada vez mais católico.',
              countries: 54,
              spokenLanguages: 2000,
              cities100: 12,
              cities: [
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
              ],
            },
          },
          {
            id: 6,
            name: 'Oceania',
            description: 'O menor continente',
            image: '/oceania.png',
            info: {
              text: "Oceania ou Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo Oceania foi criado em 1831 pelo explorador francês Dumont d'Urville. O termo é usado hoje em vários idiomas para designar uma região geográfica e política que compreende o continente da Austrália e ilhas do Oceano Pacífico adjacentes.",
              countries: 14,
              spokenLanguages: 18,
              cities100: 1,
              cities: [
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
                {
                  image: '/europe.png',
                  city: 'Londres',
                  state: 'Reino Unido',
                  flag: '/uk.png',
                },
              ],
            },
          },
        ],
      });
    },
    routes() {
      this.namespace = 'api';

      this.get('/continents/:id', (_, request) => {
        const id = request.params.id;
        const continent = this.schema.find('continents', id);
        return { continent };
      });

      this.get('/continents', () => {
        return this.schema.all('continents');
      });

      this.namespace = '';
      this.passthrough();
    },
  });
}
