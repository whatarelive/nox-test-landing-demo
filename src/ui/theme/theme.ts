import { extendTheme, ThemeConfig, defineStyle, defineStyleConfig } from "@chakra-ui/react";

// Heading Styles
const h4v1 = defineStyle({
    fontSize: { base: '18px', md: '24px' },
    fontWeight: { base: '500', md: '700' },
    lineHeight: { base: '19.8px', md: '26.4px' },
    color: '#CBD5E1'
})
const h4v2 = defineStyle({
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '17.6px',
    color: 'primary.white'
})
const headingTheme = defineStyleConfig({
    variants: { h4v1, h4v2 }
})
//---------------------------------------------
// Links Styles
const linkv1 = defineStyle({
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '24px',
    letterSpacing: '0.5px',
    color: 'white'
})
const linkTheme = defineStyleConfig({
    variants: { linkv1 }
})
//---------------------------------------------
// Stack Styles

export const theme: ThemeConfig = extendTheme({
    colors: {
        primary: {
            white: '#ffffff',
            purple: '#001D6C',
            indigo: '#818CF8',
            gray: '#CBD5E1',
        }
    },
    fonts: {
        heading: 'var(--fonts-roboto)',
        body: 'var(--fonts-roboto)',
        p: 'var(--fonts-roboto)',
        span: 'var(--fonts-roboto)',
        button: 'var(--fonts-roboto)',
    },
    styles: {
        global: {
            header: {
                display: 'flex',
                alignItems: 'center',
                px: { base: '16px', lg:'80px' },
                py: { base: '16px', lg:'24px' },
                justifyContent: { base: 'space-between', lg: 'flex-start' }
            },
            nav: {
                flex: '2',
                gap: '8px',
                justifyContent: 'center',
            },
            section: {
                py: { base: '48px', md: '80px' },
                px: { base: '16px', md: '80px' },
                gap: { base: '32px', md: '80px' },
                display: 'flex',
                alignItems: 'center',
                flexDirection:{ base: 'column', md: 'row' },
            },
            article: {
                justifyContent: 'center',
                alignItems: 'center'
            },
            h1: {
                fontSize: { base: '48px', md: '72px' },
                fontWeight: '900',
                lineHeight: { base: '52.8px', md: '79.2px' },
                textAlign:'center',
                color: '#ffffff'   
            },
            h2: {
                fontSize: { base: '24px', md:'56px' },
                fontWeight: { base: '700', md:'900' },
                lineHeight: { base:'26.4px', md:'61.6px'},
                color: 'primary.white'
            },
            'h3, h6': {
                fontSize: { base: '24px', md: '48px' },
                fontWeight: { base: '700', md: '900' },
                lineHeight: { base: '26.4px', md: '52.8px' },
                color: 'primary.white'  
            },
            h5: {
                fontSize: '32px',
                fontWeight: '700',
                lineHeight: '35.2px',
                color: 'primary.white'    
            },
            p: {
                fontSize: { base: '16px', md: '18px' },
                fontWeight: '400',
                lineHeight: { base: '22.4px', md: '28.8px' },
                color: 'primary.gray'       
            },
            a: {
                fontSize: { base: '14px', md: '16px' },
                fontWeight: '400',
                lineHeight: { base: '19.6px', md: '22.4px' }
            },
            span: {
                fontSize: '20px',
                fontWeight: '500',
                lineHeight: '22px',
                textAlign:'center',
                color: 'primary.indigo'
            },
            br: {
                display: { md: 'none' }
            }
        }
    },
    components: {
        Text: headingTheme,
        Link: linkTheme,
    }
});