import { Article, FooterLink } from "@/lib/interfaces/definitions";

export const companiesSvgs: string[] = ['Smart', 'Zoomer', 'Shells', 'Waves', 'ArtVenue'];

export const articleTools: Article = {
    title: 'Powerful tools.',
    subtitle: 'More control.',
    content: 'Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.',
    listCheck: [
        'Interdum volutpat turpis malesuada ac turpis.',
        'Tortor ipsum pretium quis nunc.',
        'Vitae odio a id purus in.'
    ],
};

export const articleManagement: Article = {
    title: 'Team management.',
    subtitle: 'Effortless syncronization.',
    content: 'Massa nunc nisi fames adipiscing scelerisque placerat et sagittis cursus. Mi commodo id maecenas amet, elementum a, in.',
    listCheck: [
        'Est et in pharetra magna adipiscing ornare aliquam.',
        'Tellus arcu sed consequat ac velit ut eu blandit.',
        'Ullamcorper ornare in et egestas dolor orci.'
    ],
};

export const articleControl: Article = {
    title: 'Control the flow.',
    subtitle: 'Work faster.',
    content: 'Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc.Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.',
}

export const footerLinks: FooterLink[] = [
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