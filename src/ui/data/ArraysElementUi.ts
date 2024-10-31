interface Props {
    readonly name: string;
    readonly links: string[];
    readonly badge?: 'Accessibility'
    readonly icon?: 'Request Demo'
}

export const footerLinks: Props[] = [
    {
        name: 'Categories',
        links: ['User Interface', 'User Experience', 'Digital Media', 'LifeStyle']
    },
    {
        name: 'Product',
        links: ['Pricing', 'Overview', 'Browse', 'Accessibility'],
        badge: 'Accessibility'
    },
    {
        name: 'Solutions',
        links: ['Brainstorming', 'Ideation', 'WireFraming', 'Research'],
    },
    {
        name: 'Resources',
        links: ['Help Center', 'Blog', 'Tutorials', 'FAQs'],
    },
    {
        name: 'Support',
        links: ['Contact Us', 'Developers', 'Documentation', 'Integrations'],
    },
    {
        name: 'Company',
        links: ['About', 'Press', 'Events', 'Request Demo'],
        icon: 'Request Demo'
    }
]