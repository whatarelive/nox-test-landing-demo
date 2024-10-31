export interface Route {
    name: string;
    href: string;
}

export interface Article {
    readonly title: string;
    readonly subtitle: string;
    readonly content: string;
    listCheck?: string[];
}

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface ParsePost {
    id: number;
    body: string;
    user: {
        id: number;
        imgUrl: string;
        name: string;
        company: {
            name: string;
            logoUrl: string;
        }
    }
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Geo {
    lat: string;
    lng: string;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}
