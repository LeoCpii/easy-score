interface ISecurityRegister {
    name: string;
    email: string;
}

interface IJWT {
    id: string;
    email: string;
    name: string;
}

interface IUser {
    favorites: Array<{ name: string; id: string }>;
    name: string;
    email: string;
}

interface IApp {
    name: string;
    slug?: string;
    category: number;
    image: string;
    favorite?: boolean;
    color: {
        primary: string;
        secondary: string;
    }
}