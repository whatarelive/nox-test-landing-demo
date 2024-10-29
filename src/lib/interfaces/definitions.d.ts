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