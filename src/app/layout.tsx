import React from "react";
import type { Metadata } from "next";
import { roboto } from "@/ui/fonts/fonts";
import { ChakraUiProvider } from "@/ui/providers/ChakraUiProvider";
import { Grid, GridItem } from "@chakra-ui/react";
import { Footer, NavBar } from "@/ui/views";
import "@/ui/styles/globals.css";

export const metadata: Metadata = {
  title: "Landing Page 9",
  description: "Create by Adrian Daniel Gutierrez",
};

interface Props {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
          <ChakraUiProvider>
              <Grid
                  h={'100vh'}
                  minW={'100vw'}
                  templateAreas={'"header" "main" "footer"'}
                  gridTemplateRows={'auto 1fr auto'}
              >
                  <GridItem as={'header'} area={'header'} position={'absolute'} w={'100%'}>
                      <NavBar/>
                  </GridItem>

                  <GridItem as={'main'} area={'main'}>
                      { children }
                  </GridItem>

                  <GridItem as={'footer'} area={'footer'}>
                      <Footer/>
                  </GridItem>
              </Grid>
          </ChakraUiProvider>
      </body>
    </html>
  );
}
