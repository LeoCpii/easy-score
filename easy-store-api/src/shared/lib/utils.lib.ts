export class Utils {
    constructor() { }

    private get WHITE_LIST() {
        return ['development', 'test'];
    }

    get isProd() {
        return !this.WHITE_LIST.includes(process.env.NODE_ENV);
    }

    public EhNuloOuVazio(element: any): boolean {
        return (
            element === '' ||
            element === null ||
            element === undefined ||
            element.length === 0 ||
            Object.keys(element).length === 0
        ) ? true : false;
    }

    public hasStatusError(status: number) {
        return !(status >= 200 && status <= 299);
    }

    public slug(str: string): string {
        str = str.toLowerCase();
        str = str.replace(/a-zA-Z0-9_.-+/g, '')
        str = str.replace(/_/g, '')
        str = str.replace(/[^\w\s]/gi, '')
        str = str.replace(/( )+/g, '-');

        if (str.substring(str.length - 1, str.length) === '-') {
            return str.substring(0, str.length - 1);
        }

        return str;
    }
}