
enum ECategory {
    'Música' = 0,
    'Stream' = 1,
}
export class CategoryEnum {
    static description(num: number): string {
        return ECategory[num];
    }
}