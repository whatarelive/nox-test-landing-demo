import { extendTheme, ThemeConfig, defineStyle, defineStyleConfig } from "@chakra-ui/react";

// Heading Styles
const h4v1 = defineStyle({
    fontSize: { base: '18px', xl: '24px' },
    fontWeight: { base: '500', xl: '700' },
    lineHeight: { base: '19.8px', xl: '26.4px' },
    color: '#CBD5E1'
})
const h4v2 = defineStyle({
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '17.6px',
    color: 'primary.white'
})
const h5v1 = defineStyle({
    fontSize: { base: '18px', xl: '32px' },
    fontWeight: { base: '500', xl: '700' },
    lineHeight: { base: '19.8px', xl: '35.2px' },
    maxInlineSize: { base: '400', xl: '600' },
    color: '#ffffff'
})
const headingTheme = defineStyleConfig({
    variants: { h4v1, h4v2, h5v1 }
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
const linkv2 = defineStyle({
    fontSize: { base:'14px', md:'16px' },
    fontWeight: '400',
    lineHeight: { base: '19.6px', md: '22.4px' },
    color: 'white'
})
const linkTheme = defineStyleConfig({
    variants: { linkv1, linkv2 }
})
//---------------------------------------------

export const theme: ThemeConfig = extendTheme({
    breakpoints: {
        base: "0px",
        xs: "300px",   // Muy Pequeño
        sm: "394",     // Pequeño
        md: "768px",   // Mediano
        lg: "960px",   // Grande
        xl: "1200px",  // Extra grande
        "2xl": "1536px" // Dos veces extra grande
    },
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
                px: { base: '16px', xl:'80px' },
                py: { base: '16px', xl:'24px' },
                justifyContent: { base: 'space-between', xl: 'flex-start' }
            },
            nav: {
                flex: '2',
                gap: '8px',
                justifyContent: 'center',
            },
            section: {
                py: { base: '48px', xl: '80px' },
                px: { base: '16px', xl: '80px' },
                gap: { base: '32px', xl: '80px' },
                display: 'flex',
                alignItems: 'center',
                flexDirection:{ base: 'column', xl:'row' },
            },
            article: {
                justifyContent: 'center',
                alignItems: 'center'
            },
            h1: {
                fontSize: { base: '48px', xl: '72px' },
                fontWeight: '900',
                lineHeight: { base: '52.8px', xl: '79.2px' },
                textAlign:'center',
                color: '#ffffff'   
            },
            h2: {
                fontSize: { base: '24px', xl:'56px' },
                fontWeight: { base: '700', xl:'900' },
                lineHeight: { base:'26.4px', xl:'61.6px'},
                color: 'primary.white'
            },
            'h3, h6': {
                fontSize: { base: '24px', xl: '48px' },
                fontWeight: { base: '700', xl: '900' },
                lineHeight: { base: '26.4px', xl: '52.8px' },
                color: 'primary.white'  
            },
            h5: {
                fontSize: '32px',
                fontWeight: '700',
                lineHeight: '35.2px',
                color: 'primary.white'    
            },
            p: {
                fontSize: { base: '16px', xl: '18px' },
                fontWeight: '400',
                lineHeight: { base: '22.4px', xl: '28.8px' },
                color: 'primary.gray'       
            },
            a: {
                fontSize: { base: '14px', xl: '16px' },
                fontWeight: '400',
                lineHeight: { base: '19.6px', xl: '22.4px' },
            },
            span: {
                fontSize: '20px',
                fontWeight: '500',
                lineHeight: '22px',
                textAlign:'center',
                color: 'primary.indigo'
            },
            br: {
                display: { xl: 'none' }
            }
        }
    },
    components: {
        Text: headingTheme,
        Link: linkTheme,
    }
});