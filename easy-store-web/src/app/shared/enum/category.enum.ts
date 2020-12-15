
enum ECategory {
    'Arte e design' = 0,
    'Beleza' = 1,
    'Bibliotecas e demos' = 2,
    'Casa e decoração' = 3,
    'Clima' = 4,
    'Comer e beber' = 5,
    'Compras' = 6,
    'Comunicação' = 7,
    'Corporativo' = 8,
    'Criar os filhos' = 9,
    'Daydream' = 10,
    'Educação' = 11,
    'Encontros' = 12,
    'Entretenimento' = 13,
    'Esportes' = 14,
    'Estilo de vida' = 15,
    'Eventos' = 16,
    'Ferramentas' = 17,
    'Finanças' = 18,
    'Fotografia' = 19,
    'Humor' = 20,
    'Livros e referências' = 21,
    'Mapas e navegação' = 22,
    'Medicina' = 23,
    'Música e áudio' = 24,
    'Notícias e revistas' = 25,
    'Personalização' = 26,
    'Produtividade' = 27,
    'Realidade aumentada' = 28,
    'Reproduzir e editar vídeos' = 29,
    'Saúde e fitness' = 30,
    'Social' = 31,
    'Turismo e local' = 32,
    'Veículos' = 33,
    'Jogos' = 34,

}
export class CategoryEnum {
    static description(num: number): string {
        return ECategory[num];
    }
}