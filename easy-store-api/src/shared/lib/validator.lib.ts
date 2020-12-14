class Validator {
    private emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    private colorRegex = /^#([a-zA-Z0-9-])*$/;
    private base64Regex = /^data:([A-Za-z-+/]+);base64,/;

    public isValidEmail(value: string) {
        return this.emailRegex.test(value);
    }

    public isValidColor(color: string) {
        return this.colorRegex.test(color);
    }

    public isValidBase64(base64: string) {
        return this.base64Regex.test(base64);
    }
}

export default new Validator();